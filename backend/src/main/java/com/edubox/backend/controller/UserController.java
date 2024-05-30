package com.edubox.backend.controller;

import com.edubox.backend.auth.ChangePasswordRequest;
import com.edubox.backend.entity.User;
import com.edubox.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;
    private final PasswordEncoder passwordEncoder;

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


    @GetMapping("/currentuser")
    public ResponseEntity<User> getCurrentUser(Principal connectedUser) {
        User user = service.getCurrentUser(connectedUser);
        return ResponseEntity.ok(user);
    }

    // POST /api/v1/users - Create a new user
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        //user.setId(0);
        User createdUser = service.save(user);
        return ResponseEntity.ok(createdUser);
    }

    // PUT /api/v1/users/{userId} - Update an existing user
    @PutMapping("/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable UUID userId, @RequestBody User user) {
        // Ensure the user ID matches the ID in the path
        user.setId(userId);
        User jo = this.getUserById(userId).getBody();
        user.setPassword(jo.getPassword());
        User updatedUser = service.save(user);


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
    public ResponseEntity<String> changePassword(
            @RequestBody ChangePasswordRequest request,
            Principal connectedUser
    ) {
        service.changePassword(request, connectedUser);
        return ResponseEntity.ok("password changed successfully");
    }
}

