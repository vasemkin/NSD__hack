package com.dekses.jersey.docker.demo.resources.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PurchasedToken {
    @JsonProperty("name")
    public String name;
    @JsonProperty("expiryDate")
    public String expiryDate;
    @JsonProperty("payoff")
    public long payoff;
    @JsonProperty("count")
    public long count;
}
