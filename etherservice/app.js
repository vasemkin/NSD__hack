const http = require('http');
const ethers = require('ethers');

const hostname = '127.0.0.1';
const port = 3000;

var wallets = [
    "0xbade836562b3b707b3c407d60058f3039c2bad46da46500d4b953eda3d0d2739",
    "0x480d82c80a22e8a650867f5fe2499bac0d4e0eeee93e699333d84aa18bd96eea",
    "0x8b974b739616754ab5d98a24b137b52677034840a8efc5da9f4586cda257b284",
    "0xf909cf0763881f900bfa2122910829b8a938074625a1ad859e5b0c59a54b10a9",
    "0x41f8141ee29d39b3c8427d96992c0e7bdd0ebbe17463be6eb4247897de292843",
    "0x841a0f52325c205af55bfc3d0d033f7607128342617fcafc6042c7b4f7753495",
    "0x32f0d4616789d36f37b6b45f73cc4a75bc11ecf8ee3f1d2871752610f2a5349a",
    "0xe57959033b66c7d484350d43fa559f6cfbea198f856793a2425a556934108284",
    "0xdc3b7a11173a21f6574d31c94d8fe6136461afabffb77d8a9e71639eb16f77d9",
    "0xbc21aed2f633bbeae0d21ab95af770875bcb2a81a8f15cdff5c00bbc9a8743be"
]

const fs = require('fs');
const solc = require('solc');
const input = fs.readFileSync('/Users/degtiarenko/WebstormProjects/nsd-token-creator/MyToken.sol', 'UTF-8');
const solcInput = {
    language: 'Solidity',
    sources: {
        'MyToken.sol' : {
            content: input
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};
const output = JSON.parse(solc.compile(JSON.stringify(solcInput)));
console.log(output)
const bytecode = output.contracts['MyToken.sol'].ERC20Basic.evm.bytecode.object;
const abi = output.contracts['MyToken.sol'].ERC20Basic.abi;

var legalIdToWallet = {}
var tokenNameToAddress = {}

function createLegalEntityWallet(req, res, body) {
    // console.log(req)
    // console.log(body)
    let legalId = JSON.parse(body).legalId;
    if (legalIdToWallet[legalId] == null) {
        legalIdToWallet[legalId] = wallets.shift()
    }
    console.log("Wallet for " + legalId + " is " + legalIdToWallet[legalId])
    res.statusCode = 200;
    res.end()
}

function createNewToken(req, res, body) {
    let reqBody = JSON.parse(body)
    let provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    let privateKey = legalIdToWallet[reqBody.legalId]
    let wallet = new ethers.Wallet(privateKey, provider);
    let factory = new ethers.ContractFactory(abi, bytecode, wallet);
    (async function() {
        let contract = await factory.deploy(reqBody.totalAmount, reqBody.name, reqBody.symbol)
        await contract.deployed()
        tokenNameToAddress[reqBody.name] = contract.address
        let currentBalance = await contract.connect(wallet).balanceOf(await wallet.getAddress());
        console.log("Token " + reqBody.symbol + " balance on " + reqBody.legalId + " account:" + currentBalance.toString())
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Success! Token is created');
    })();
}

function transferToken(req, res, body) {
    let reqBody = JSON.parse(body)
    let provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    let contract = new ethers.Contract(tokenNameToAddress[reqBody.tokenName], abi, provider);
    let privateKey = legalIdToWallet[reqBody.fromId]
    let wallet = new ethers.Wallet(privateKey, provider);
    contract.connect(wallet).transfer(legalIdToWallet[reqBody.toId], reqBody.tokenCount)
}

const server = http.createServer((req, res) => {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        // at this point, `body` has the entire request body stored in it as a string
        console.log("New request with URL:" + req.url);
        if (req.url.includes("createNewToken")) {
            createNewToken(req, res, body)
        } else if (req.url.includes("createLegalEntity")) {
            createLegalEntityWallet(req, res, body)
        } else if (req.url.includes("transferToken")){
            transferToken(req, res, body)
        } else if (req.url.includes("favicon.ico")) {
            res.statusCode = 200;
        } else {
            res.statusCode = 404;
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
