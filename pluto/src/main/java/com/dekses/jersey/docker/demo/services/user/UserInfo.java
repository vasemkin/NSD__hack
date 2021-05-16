package com.dekses.jersey.docker.demo.services.user;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserInfo {
    @JsonProperty("id")
    public String login;
    @JsonProperty("password")
    public String password;
    @JsonProperty("entity_type")
    public String entityType;
}
