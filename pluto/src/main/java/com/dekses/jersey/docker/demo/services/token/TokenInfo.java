package com.dekses.jersey.docker.demo.services.token;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TokenInfo {
    @JsonProperty("name")
    public String name;
    @JsonProperty("legalId")
    public String legalId;
    @JsonProperty("expiryDate")
    public String expiryDate;
    @JsonProperty("totalCount")
    public long totalCount;
    @JsonProperty("status")
    public Status creationStatus;
    @JsonProperty("payoff")
    public long payoff;
    @JsonProperty("auctionEndDate")
    public String auctionEndDate;

    public enum Status {
        @JsonProperty("ACCEPTED")
        ACCEPTED,
        @JsonProperty("PENDING")
        PENDING,
        @JsonProperty("DENIED")
        DENIED
    }
}
