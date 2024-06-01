package com.edubox.backend.service;

import com.edubox.backend.DTOs.CreateContainerDTO;
import com.edubox.backend.controller.UserController;
import com.edubox.backend.entity.Container;
import com.edubox.backend.entity.User;
import com.edubox.backend.repository.ContainerRepository;
import com.edubox.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class ContainerService {

    private final ContainerRepository repository;

    public List<Container> getAllContainers() { return repository.findAll();}

    public Container save(CreateContainerDTO createContainerDTO) {

        // Create the container
        Container containerToCreate = Container.builder()
                .id(createContainerDTO.id)
                .name(createContainerDTO.name)
                .password(createContainerDTO.password)
                .image(createContainerDTO.image)
                .status(createContainerDTO.status)
                .port(createContainerDTO.port)
                .status(createContainerDTO.status)
                .created(LocalDateTime.now())
                .build();
        return repository.save(containerToCreate);
    }



    @Transactional
    public void deleteContainer(String containerId) {
        repository.deleteContainerById(containerId);
    }



}
