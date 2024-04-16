package com.edubox.backend.service;

import com.edubox.backend.DTOs.CreateContainerDTO;
import com.edubox.backend.controller.UserController;
import com.edubox.backend.entity.Container;
import com.edubox.backend.entity.User;
import com.edubox.backend.repository.ContainerRepository;
import com.edubox.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ContainerService {

    private final ContainerRepository repository;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    public List<Container> getAllContainers() { return repository.findAll();}

    public Container getContainerById(UUID id) {
        Optional<Container> result = repository.findById(id);

        Container theContainer = null;

        if (result.isPresent()) {
            theContainer = result.get();
        }
        else {
            // we didn't find the User
            throw new RuntimeException("Did not find Container id - " + id);
        }

        return theContainer;
    }
    public List<Container> getContainerByUserId(UUID userId) {
        return repository.findByUser_Id(userId);
    }
    public Container save(CreateContainerDTO createContainerDTO, String authToken) {
        // Get the user from the db to populate the container
        String userEmail = jwtService.extractUsername(authToken);
        Optional<User> userInDbResult = userRepository.findByEmail(userEmail);
        User userInDb = null;
        if (userInDbResult.isPresent())
        {
            userInDb = userInDbResult.get();
        } else {
            throw new RuntimeException("Authentication Error, User inexistant!");
        }

        // Create the container
        Container containerToCreate = Container.builder()
                .name(createContainerDTO.name)
                .cpu(createContainerDTO.cpu)
                .ports(createContainerDTO.ports)
                .actions(createContainerDTO.actions)
                .operating(createContainerDTO.operating)
                .status(createContainerDTO.status)
                .laststarted(LocalDateTime.now())
                .user(userInDb)
                .build();
        return repository.save(containerToCreate);
    }
    public List<Container> getMyContainers(String authToken) {
        String userEmail = jwtService.extractUsername(authToken);
        return repository.findByUser_Email(userEmail);
    }


    public void deleteContainer(UUID id) {
        repository.deleteById(id);
    }



}
