package com.edubox.backend.controller;

import io.swagger.v3.oas.annotations.Hidden;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@PreAuthorize("hasRole('USER')")
public class UserManagementController {

    @GetMapping
    @PreAuthorize("hasAuthority('user:read')")
    public String get() {
        return "GET:: user controller";
    }
    @PostMapping
    @PreAuthorize("hasAuthority('user:create')")
    @Hidden
    public String post() {
        return "POST:: user controller";
    }
    @PutMapping
    @PreAuthorize("hasAuthority('user:update')")
    @Hidden
    public String put() {
        return "PUT:: user controller";
    }
    @DeleteMapping
    @PreAuthorize("hasAuthority('user:delete')")
    @Hidden
    public String delete() {
        return "DELETE:: user controller";
    }
}