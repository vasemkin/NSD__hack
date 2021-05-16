package com.dekses.jersey.docker.demo.resources;

import com.dekses.jersey.docker.demo.resources.data.PendingUsers;
import com.dekses.jersey.docker.demo.services.user.UserService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("admin")
public class AdminResource {

    @POST
    @Path("/ban_user/{id}")
    public void banUser(@PathParam("id") String id) {
        UserService.singleton().banUser(id);
    }

    @POST
    @Path("/user/{id}/approve")
    public void approve(@PathParam("id") String id) {
        UserService.singleton().approveUser(id);
    }

    @POST
    @Path("/user/{id}/deny")
    public void deny(@PathParam("id") String id) {
        UserService.singleton().denyUser(id);
    }

    @GET
    @Path("/user/pending/list")
    @Produces(MediaType.APPLICATION_JSON)
    public PendingUsers pendingList() {
        PendingUsers response = new PendingUsers();
        response.pendingUsers = UserService.singleton().pendingUsers();
        return response;
    }
}
