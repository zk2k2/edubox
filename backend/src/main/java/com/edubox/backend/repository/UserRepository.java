package com.edubox.backend.repository;


import java.util.Optional;
import java.util.UUID;

import com.edubox.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, UUID> {

    Optional<User> findByEmail(String email);

    Optional<User> findById(UUID userId);
}