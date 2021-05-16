package com.dekses.jersey.docker.demo.services.user;

import jdk.internal.access.JavaSecurityAccess;

import java.util.*;
import java.util.stream.Collectors;

public class UserService {
    private static UserService instance;
    private UserService() {}


    private final Map<String, UserInfo> users = new HashMap<>();
    private final Map<String, UserInfo> pending = new HashMap<>();
    private final Set<String> banned = new HashSet<>();

    public static UserService singleton() {
        if (instance == null) {
            synchronized (UserService.class) {
                if (instance == null) {
                    instance = new UserService();
                }
            }
        }
        return instance;
    }

    public boolean createUser(UserInfo userInfo) {
        if (users.containsKey(userInfo.login) || banned.contains(userInfo.login)) {
            return false;
        }
        pending.put(userInfo.login, userInfo);
        return true;
    }

    public UserInfo loginUser(String login, String password) {
        if (users.containsKey(login) && users.get(login).password.equals(password)) {
            return users.get(login);
        }
        return null;
    }

    public void banUser(String id) {
        users.remove(id);
        banned.add(id);
    }

    public void approveUser(String id) {
        users.put(id, pending.get(id));
        pending.remove(id);
    }

    public void denyUser(String id) {
        pending.remove(id);
    }

    public List<String> pendingUsers() {
        return new ArrayList<>(pending.keySet());
    }
}
