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
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/containers")
@RequiredArgsConstructor
public class ContainerController {
    private final ContainerService service;

    @GetMapping
    public List<Container> getAllContainers() {
        return service.getAllContainers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Container> getContainerById(@PathVariable UUID id) {
        Container container = service.getContainerById(id);
        return ResponseEntity.ok(container);
    }

    // get containers by user
    @GetMapping("/user/{id}")
    public ResponseEntity<List<Container>> getContainersByUserId(@PathVariable UUID id) {
        List<Container> containers = service.getContainerByUserId(id);
        return ResponseEntity.ok(containers);
    }

    @GetMapping("/myContainers")
    public ResponseEntity<List<Container>> getMyContainers(HttpServletRequest request) {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String token;
        token = authHeader.substring(7);
        List<Container> containers = service.getMyContainers(token);
        return ResponseEntity.ok(containers);
    }
    // get your own containers

    @PostMapping
    public ResponseEntity<Container> createContainer(@RequestBody CreateContainerDTO container,
            HttpServletRequest request) {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String token;
        token = authHeader.substring(7);
        Container createdContainer = service.save(container, token);
        return ResponseEntity.ok(createdContainer);
    }

    /*
     * @PutMapping("")
     * public ResponseEntity<Container> updateContainer(@RequestBody Container
     * container) {
     * Container updatedContainer = service.save( container);
     * return ResponseEntity.ok(updatedContainer);
     * }
     */

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContainer(@PathVariable UUID id) {
        service.deleteContainer(id);
        return ResponseEntity.ok("Deleted container with ID: " + id);
    }

}
