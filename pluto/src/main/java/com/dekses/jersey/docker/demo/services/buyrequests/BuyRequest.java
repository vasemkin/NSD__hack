package com.dekses.jersey.docker.demo.services.buyrequests;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BuyRequest {
    @JsonProperty("tokenName")
    public String tokenName;
    @JsonProperty("payoff")
    public long payoff;
    @JsonProperty("buyPrice")
    public long buyPrice;
    @JsonProperty("tokenCount")
    public long tokenCount;
    @JsonProperty("buyerId")
    public String buyerId;
    @JsonProperty("expiryDate")
    public String expiryDate;
    @JsonProperty("auctionEndDate")
    public String auctionEndDate;
    @JsonProperty("requestId")
    public String requestId;
}
