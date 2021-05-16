package com.dekses.jersey.docker.demo.services.token;

import com.dekses.jersey.docker.demo.services.user.UserService;

import javax.ws.rs.BadRequestException;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class TokenService {
    private List<TokenInfo> tokens = new ArrayList<>();
    private static TokenService instance;

    public static TokenService singleton() {
        if (instance == null) {
            synchronized (TokenService.class) {
                if (instance == null) {
                    instance = new TokenService();
                }
            }
        }
        return instance;
    }

    public List<TokenInfo> listTokens(Predicate<TokenInfo> filter) {
        return tokens.stream()
                .filter(filter)
                .collect(Collectors.toList());
    }

    public TokenInfo requestTokenIssuance(TokenInfo tokenInfo) {
        if (tokenInfo.legalId == null) {
            throw new BadRequestException();
        }
        tokenInfo.creationStatus = TokenInfo.Status.PENDING;
        tokens.add(tokenInfo);
        return tokenInfo;
    }
}
