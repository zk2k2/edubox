package com.edubox.backend.controller;

import com.edubox.backend.auth.ChangePasswordRequest;
import com.edubox.backend.entity.User;
import com.edubox.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    // GET /api/v1/users - Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    // GET /api/v1/users/{userId} - Get user by ID
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable UUID userId) {
        User user = service.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/currentuserid")
    public ResponseEntity<String> getCurrentUserId(Principal connectedUser) {
        String id = service.getCurrentUserId(connectedUser);
        return ResponseEntity.ok(id);
    }

    // POST /api/v1/users - Create a new user
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        //user.setId(0);
        User createdUser = service.save(user);
        return ResponseEntity.ok(createdUser);
    }

    // PUT /api/v1/users/{userId} - Update an existing user
    @PutMapping("")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updatedUser = service.save( user);
        return ResponseEntity.ok(updatedUser);
    }

    // DELETE /api/v1/users/{userId} - Delete user by ID
    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable UUID userId) {
        service.deleteUser(userId);
        return ResponseEntity.ok("Deleted user with ID: " + userId);
    }

    // PATCH /api/v1/users/password - Change user password
    @PatchMapping("/password")
    public ResponseEntity<?> changePassword(
            @RequestBody ChangePasswordRequest request,
            Principal connectedUser
    ) {
        service.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }
}

