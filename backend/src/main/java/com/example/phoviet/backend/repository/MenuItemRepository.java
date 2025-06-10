package com.example.phoviet.backend.repository;

import com.example.phoviet.backend.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {

    @Override
    Optional<MenuItem> findById(Long aLong);
}
