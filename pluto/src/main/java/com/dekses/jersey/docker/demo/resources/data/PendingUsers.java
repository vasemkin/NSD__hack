package com.dekses.jersey.docker.demo.resources.data;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class PendingUsers {
    @JsonProperty("pendingUsers")
    public List<String> pendingUsers;
}
