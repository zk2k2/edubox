package com.edubox.backend.controller;

import com.edubox.backend.DTOs.CreateContainerDTO;
import com.edubox.backend.entity.Container;
import com.edubox.backend.entity.User;
import com.edubox.backend.service.ContainerService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/containers")
@RequiredArgsConstructor
public class ContainerController {
    private final ContainerService service;

    @GetMapping
    public List<Container> getAllContainers() {
        return service.getAllContainers();
    }


    @PostMapping
    public ResponseEntity<Container> createContainer(@RequestBody CreateContainerDTO container)
    {
        Container createdContainer = service.save(container);
        return ResponseEntity.ok(createdContainer);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContainer(@PathVariable String id) {
        service.deleteContainer(id);
        return ResponseEntity.ok("Deleted container with ID: " + id);
    }

}
