package com.dekses.jersey.docker.demo.services.buyrequests;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class BuyRequestService {
    private final List<BuyRequest> buyRequests = new ArrayList<>();
    private static BuyRequestService instance;

    public static BuyRequestService singleton() {
        if (instance == null) {
            synchronized (BuyRequestService.class) {
                if (instance == null) {
                    instance = new BuyRequestService();
                }
            }
        }
        return instance;
    }

    public List<BuyRequest> listBuyRequests(Predicate<BuyRequest> filter) {
        return buyRequests.stream()
                .filter(filter)
                .collect(Collectors.toList());
    }

    public void createBuyRequest(BuyRequest buyRequest) {
        buyRequests.add(buyRequest);
    }

    public void delete(String requestId) {
        buyRequests.removeIf(r -> r.requestId.equals(requestId));
    }
}
