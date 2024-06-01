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
    public String id;

    @Column(unique = true)
    public String name;
    public String password;
    public String image;
    public String status;
    public String port;
    public LocalDateTime created;

}