package com.example.test;

import org.springframework.data.repository.CrudRepository;

public interface SocietyRepository extends CrudRepository<Society, Integer> {
    // Additional query methods if needed
}