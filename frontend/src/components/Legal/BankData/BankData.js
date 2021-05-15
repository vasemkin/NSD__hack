import { 
    Box,
    Image,
    Flex,
    Button,
    Text,
    Heading
 } from "@chakra-ui/react"

function BankData () {
    return(
        <Box p="20px" bg="#f3f3f3" borderRadius="30px" w="100%" mb="2rem">

            <Flex justify="space-between" align="center" mb="1rem">
                <Box w="67px" h="41px">
                    <Image src="./img/Legal__bankIcon.svg" alt="NSD" />
                </Box>

                <Button variant="link" color="rgba(200, 15, 46, 1)">Пополнить</Button>
            </Flex>

            <Text variant="grey">Номер счета</Text>
            <Heading variant="bank-normal" mb="2rem">2213 5367 2456 4345</Heading>

            <Text variant="grey">Баланс</Text>
            <Heading variant="bank-bold">134000</Heading>
        </Box>
    )
}

export default BankData