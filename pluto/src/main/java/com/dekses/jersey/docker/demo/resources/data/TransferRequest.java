package com.dekses.jersey.docker.demo.resources.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferRequest {
    @JsonProperty("tokenName")
    public String tokenName;
    @JsonProperty("tokenCount")
    public long tokenCount;
    @JsonProperty("buyerId")
    public String buyerId;
    @JsonProperty("sellerId")
    public String sellerId;
}
