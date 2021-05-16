package com.dekses.jersey.docker.demo.resources;

import com.dekses.jersey.docker.demo.resources.data.PurchasedToken;
import com.dekses.jersey.docker.demo.services.buyrequests.BuyRequest;
import com.dekses.jersey.docker.demo.services.buyrequests.BuyRequestService;
import com.dekses.jersey.docker.demo.services.token.TokenInfo;
import com.dekses.jersey.docker.demo.services.token.TokenService;
import com.dekses.jersey.docker.demo.services.wallet.Wallet;
import com.dekses.jersey.docker.demo.services.wallet.WalletService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Path("tokens")
public class TokenResource {
    @GET
    @Path("/issued_tokens/search")
    @Produces(MediaType.APPLICATION_JSON)
    public List<TokenInfo> listAllTokens() throws IOException {
        return TokenService.singleton().listTokens(t -> t.creationStatus == TokenInfo.Status.ACCEPTED);
    }


    @GET
    @Path("/issued_tokens/pending")
    @Produces(MediaType.APPLICATION_JSON)
    public List<TokenInfo> listPendingTokens() throws IOException {
        return TokenService.singleton().listTokens(t -> t.creationStatus == TokenInfo.Status.PENDING);
    }

    @GET
    @Path("/issued_tokens/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<TokenInfo> listTokensForLegal(@PathParam("id") String id) {
        return TokenService.singleton().listTokens(t -> t.legalId.equals(id));
    }

    @POST
    @Path("/issued_tokens/{id}/{tokenName}/accept")
    public void approveToken(@PathParam("id") String id, @PathParam("tokenName") String tokenName) {
        List<TokenInfo> toApprove = TokenService.singleton().listTokens(t -> t.legalId.equals(id) && t.name.equals(tokenName));
        if (toApprove.size() != 1) {
            throw new BadRequestException();
        }
        TokenInfo tokenInfo = toApprove.get(0);
        tokenInfo.creationStatus = TokenInfo.Status.ACCEPTED;

        Wallet wallet = new Wallet();
        wallet.tokenCounts.put(tokenName, tokenInfo.totalCount);
        WalletService.singleton().createWallet(id, wallet);
    }

    @POST
    @Path("/issued_tokens/{id}/{tokenName}/deny")
    public void denyToken(@PathParam("id") String id, @PathParam("tokenName") String tokenName) {
        List<TokenInfo> toApprove = TokenService.singleton().listTokens(t -> t.legalId.equals(id) && t.name.equals(tokenName));
        if (toApprove.size() != 1) {
            throw new BadRequestException();
        }
        TokenInfo tokenInfo = toApprove.get(0);
        tokenInfo.creationStatus = TokenInfo.Status.DENIED;
    }

    @POST
    @Path("issued_tokens")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public TokenInfo requestTokenIssuance(TokenInfo tokenInfo) {
        return TokenService.singleton().requestTokenIssuance(tokenInfo);
    }

    @GET
    @Path("awaiting_purchase_tokens/{tokenName}")
    public List<BuyRequest> listBuyRequests(@PathParam("tokenName") String tokenName) {
        return BuyRequestService.singleton().listBuyRequests(r -> r.tokenName.equals(tokenName));
    }

    @GET
    @Path("awaiting_purchase_tokens/foruser/{id}")
    public List<BuyRequest> getUserBuyRequests(@PathParam("id") String id) {
        return BuyRequestService.singleton().listBuyRequests(r -> r.buyerId.equals(id));
    }

    @POST
    @Path("awaiting_purchase_tokens")
    @Consumes(MediaType.APPLICATION_JSON)
    public BuyRequest createBuyRequest(BuyRequest buyRequest) {
        // TODO: allow only accepted tokens
        List<TokenInfo> tokens = TokenService.singleton().listTokens(t -> t.name.equals(buyRequest.tokenName));
        if (tokens.isEmpty()) {
            throw new NotFoundException();
        }
        TokenInfo tokenInfo = tokens.get(0);
        buyRequest.payoff = tokenInfo.payoff;
        buyRequest.auctionEndDate = tokenInfo.auctionEndDate;
        buyRequest.expiryDate = tokenInfo.expiryDate;
        buyRequest.requestId = "buyrequest-" + UUID.randomUUID();
        BuyRequestService.singleton().createBuyRequest(buyRequest);
        return buyRequest;
    }

    @POST
    @Path("buyrequests/{id}/accept")
    public void acceptBuyRequest(@PathParam("id") String requestId) {
        List<BuyRequest> buyRequests = BuyRequestService.singleton().listBuyRequests(r -> r.requestId.equals(requestId));
        if (buyRequests.isEmpty()) {
            throw new NotFoundException();
        }
        BuyRequest buyRequest = buyRequests.get(0);

        String tokenName = buyRequest.tokenName;
        String toId = buyRequest.buyerId;

        List<TokenInfo> tokenInfos = TokenService.singleton().listTokens(r -> r.name.equals(tokenName));
        if (tokenInfos.isEmpty()) {
            throw new NotFoundException();
        }
        String fromId = tokenInfos.get(0).legalId;
        WalletService.singleton().moveTokens(tokenName, fromId, toId, buyRequest.tokenCount);
    }

    @POST
    @Path("buyrequests/{id}/deny")
    public void denyBuyRequest(@PathParam("id") String requestId) {
        BuyRequestService.singleton().delete(requestId);
    }

    @GET
    @Path("purchased_tokens/{id}")
    public List<PurchasedToken> listBoughtTokens(@PathParam("id") String id) {
        Wallet wallet = WalletService.singleton().getWallet(id);
        List<PurchasedToken> purchased = new ArrayList<>();
        for (String tokenName: wallet.tokenCounts.keySet()) {
            TokenInfo tokenInfo = TokenService.singleton().listTokens(t -> t.name.equals(tokenName)).get(0);
            PurchasedToken purchasedToken = new PurchasedToken();
            purchasedToken.count = wallet.tokenCounts.get(tokenName);
            purchasedToken.payoff = tokenInfo.payoff;
            purchasedToken.expiryDate = tokenInfo.expiryDate;
            purchasedToken.name = tokenName;
            purchased.add(purchasedToken);
        }
        return purchased;
    }
}
