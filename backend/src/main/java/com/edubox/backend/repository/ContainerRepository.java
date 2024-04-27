package com.edubox.backend.repository;

import com.edubox.backend.entity.Container;
import com.edubox.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ContainerRepository extends JpaRepository<Container, UUID> {

    List<Container> findByUser_Id(UUID userId);

    List<Container> findByUser_Email(String userEmail);
}
