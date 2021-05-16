package com.dekses.jersey.docker.demo.resources;

import com.dekses.jersey.docker.demo.services.user.UserInfo;
import com.dekses.jersey.docker.demo.services.user.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.io.InputStream;

@Path("user")
public class UserResource {
    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public UserInfo register(InputStream entity) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        UserInfo json = mapper.readValue(entity, UserInfo.class);
        boolean isUserNew = UserService.singleton().createUser(json);
        if (!isUserNew) {
            throw new BadRequestException();
        }
        return json;
    }

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public UserInfo login(InputStream entity) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        UserInfo json = mapper.readValue(entity, UserInfo.class);
        UserInfo currentUser = UserService.singleton().loginUser(json.login, json.password);
        if (currentUser == null) {
            throw new NotFoundException();
        }
        return currentUser;
    }
}
