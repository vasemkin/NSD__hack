package com.dekses.jersey.docker.demo.resources;

import com.dekses.jersey.docker.demo.resources.data.TransferRequest;
import com.dekses.jersey.docker.demo.services.token.TokenInfo;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jersey.repackaged.com.google.common.collect.ImmutableMap;
import org.jsoup.Jsoup;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.Map;

public class EtherResource {

    public static final String HOST = "http://127.0.0.1:3000";

    @POST
    @Path("/ether/release_token")
    @Consumes(MediaType.APPLICATION_JSON)
    public void releaseTokenToBlockchain(TokenInfo tokenInfo) throws IOException {
        Jsoup.connect(HOST + "/createLegalEntity")
                .data(ImmutableMap.of(
                        "legalId", tokenInfo.legalId
                )).post();

        ObjectMapper mapper = new ObjectMapper();
        Map<String, String> request = mapper.convertValue(tokenInfo, new TypeReference<Map<String, String>>() {});
        Jsoup.connect(HOST + "/createNewToken")
                .data(request)
                .post();
    }

    @POST
    @Path("/ether/transfer_token")
    @Consumes(MediaType.APPLICATION_JSON)
    public void transferToken(TransferRequest transferRequest) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Map<String, String> request = mapper.convertValue(transferRequest, new TypeReference<Map<String, String>>() {});
        Jsoup.connect(HOST + "/transferToken")
                .data(request)
                .post();
    }
}
