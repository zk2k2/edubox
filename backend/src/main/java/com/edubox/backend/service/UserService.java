package com.edubox.backend.service;

import com.edubox.backend.auth.ChangePasswordRequest;
import com.edubox.backend.entity.User;
import com.edubox.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository repository;
    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {

        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        // check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        // check if the two new passwords are the same
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Password are not the same");
        }

        // update the password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        // save the new password
        repository.save(user);
    }

    public List<User> getAllUsers() { return repository.findAll();}

    public User getUserById(UUID userId) {
        Optional<User> result = repository.findById(userId);

        User theUser = null;

        if (result.isPresent()) {
            theUser = result.get();
        }
        else {
            // we didn't find the User
            throw new RuntimeException("Did not find User id - " + userId);
        }

        return theUser;
    }

    public User save(User user) {
        return repository.save(user);
    }


    public void deleteUser(UUID userId) {
        repository.deleteById(userId);
    }

    public String getCurrentUserId(Principal connectedUser) {
        if (connectedUser == null) {
            throw new IllegalArgumentException("Connected user principal cannot be null");
        }
        // Assuming connectedUser is an instance of UsernamePasswordAuthenticationToken
        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        return user.getEmail(); // Assuming User object has a method getId() which returns UUID
    }
}
