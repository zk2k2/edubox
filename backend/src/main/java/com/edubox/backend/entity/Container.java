package com.edubox.backend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Container {
    @Id
    @GeneratedValue
    public UUID id;

    @Column(unique = true)
    public String name;
    public String operating;
    public String status;
    public String cpu;
    public String ports;
    public LocalDateTime laststarted;
    public String actions;


    // Ignore the user field during serialization
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    public User user;
}