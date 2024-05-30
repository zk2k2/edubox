package com.edubox.backend.auth;


import com.edubox.backend.enums.Role;
import com.edubox.backend.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Date dateofbirth;
    private Status status;
    private Role role;
}
