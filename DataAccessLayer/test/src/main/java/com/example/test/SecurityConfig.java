package com.example.test;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    	@Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	        http.cors(cors -> cors
	                .configurationSource(request -> {
	                    CorsConfiguration config = new CorsConfiguration();
	                    config.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:8080"));
	                    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	                    config.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
	                    config.setAllowCredentials(true);
	                    return config;
	                }))
	            .authorizeHttpRequests(authz -> authz
	                .requestMatchers("/login").permitAll()
					.requestMatchers("/users/**").permitAll()
					.requestMatchers("/ballots/**").permitAll()
	                .anyRequest().authenticated()
	            )
	            .formLogin(form -> form.disable())
	            .httpBasic(basic -> basic.disable())
	        	.csrf(csrf -> csrf.disable());
	        return http.build();
	    }
	
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

