package com.dekses.jersey.docker.demo.services.wallet;

import java.util.HashMap;
import java.util.Map;

public class WalletService {
    private static WalletService instance;
    private WalletService() {}

    private final Map<String, Wallet> wallets = new HashMap<>();

    public static WalletService singleton() {
        if (instance == null) {
            synchronized (WalletService.class) {
                if (instance == null) {
                    instance = new WalletService();
                }
            }
        }
        return instance;
    }

    public void moveTokens(String tokenName, String fromId, String toId, long amount) {
        Map<String, Long> fromTokens = wallets.get(fromId).tokenCounts;
        Map<String, Long> toTokens = wallets.get(toId).tokenCounts;

        fromTokens.put(tokenName, fromTokens.get(tokenName) - amount);
        toTokens.put(tokenName, toTokens.get(tokenName) + amount);
    }

    public void createWallet(String id, Wallet wallet) {
        wallets.put(id, wallet);
    }

    public Wallet getWallet(String id) {
        return wallets.get(id);
    }
}
