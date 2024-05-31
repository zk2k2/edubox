package com.edubox.backend.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import static com.edubox.backend.enums.Permission.*;
import static com.edubox.backend.enums.Role.USER;
import static com.edubox.backend.enums.Role.ADMIN;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

    private static final String[] WHITE_LIST_URL = { "/api/v1/auth/**",
            // "/v2/api-docs",
            // "/v3/api-docs",
            // "/v3/api-docs/**",
            // "/swagger-resources",
            // "/swagger-resources/**",
            // "/configuration/ui",
            // "/configuration/security",
            // "/swagger-ui/**",
            // "/webjars/**",
            // "/swagger-ui.html"
    };
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(req -> req.requestMatchers(WHITE_LIST_URL)
                        .permitAll()
                        .requestMatchers("/api/v1/users/password").hasAnyRole(USER.name())
                        .requestMatchers(PUT, "/api/v1/users/password").hasAnyAuthority(USER_UPDATE.name())
                        .requestMatchers("/api/v1/users/**").hasAnyRole(USER.name(), ADMIN.name())
                        .requestMatchers(GET, "/api/v1/users/**").hasAnyAuthority(USER_READ.name(), ADMIN_READ.name())
                        .requestMatchers(POST, "/api/v1/users/**")
                        .hasAnyAuthority(USER_CREATE.name(), ADMIN_CREATE.name())
                        .requestMatchers(PUT, "/api/v1/users/**")
                        .hasAnyAuthority(USER_UPDATE.name(), ADMIN_UPDATE.name())
                        .requestMatchers(DELETE, "/api/v1/users/**")
                        .hasAnyAuthority(USER_DELETE.name(), ADMIN_DELETE.name())
                        .requestMatchers("/api/v1/users/currentuser").hasAnyRole(USER.name(), ADMIN.name())
                        .requestMatchers(GET, "/api/v1/users/currentuser")
                        .hasAnyAuthority(USER_READ.name(), ADMIN_READ.name())
                        // .requestMatchers(GET, "/api/v1/admin/**").hasAnyAuthority(USER_READ.name(),
                        // ADMIN_READ.name())
                        // .requestMatchers(POST,
                        // "/api/v1/admin/**").hasAnyAuthority(USER_CREATE.name(), ADMIN_CREATE.name())
                        // .requestMatchers(PUT, "/api/v1/admin/**").hasAnyAuthority(USER_UPDATE.name(),
                        // ADMIN_UPDATE.name())
                        // .requestMatchers(DELETE,
                        // "/api/v1/admin/**").hasAnyAuthority(USER_DELETE.name(), ADMIN_DELETE.name())
                        .requestMatchers("/api/v1/containers/user/**").hasAnyRole(ADMIN.name())
                        .requestMatchers(GET, "/api/v1/containers/user/**").hasAnyAuthority(ADMIN_READ.name())

                        .anyRequest()
                        .authenticated())
                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout -> logout.logoutUrl("/api/v1/auth/logout")
                        .addLogoutHandler(logoutHandler)
                        .logoutSuccessHandler(
                                (request, response, authentication) -> SecurityContextHolder.clearContext()));

        return http.build();
    }
}
