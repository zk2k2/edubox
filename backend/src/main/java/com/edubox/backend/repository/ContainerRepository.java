package com.edubox.backend.repository;

import com.edubox.backend.entity.Container;
import com.edubox.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ContainerRepository extends JpaRepository<Container, String> {

    @Modifying
    @Transactional
    @Query("DELETE FROM Container c WHERE c.id = :id")
    void deleteContainerById(@Param("id") String id);


}
