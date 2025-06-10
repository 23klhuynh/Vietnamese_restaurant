package com.example.phoviet.backend.service;

import com.example.phoviet.backend.model.MenuItem;
import com.example.phoviet.backend.repository.MenuItemRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuItemService {

    private final MenuItemRepository menuItemRepository;

    public ResponseEntity<List<MenuItem>> all(){
        return ResponseEntity.ok(menuItemRepository.findAll());
    }

    @Transactional
    public ResponseEntity<Void> delete(Long id){
        if (!menuItemRepository.existsById(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Menu Item not found");
        }
        menuItemRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Transactional
    public ResponseEntity<MenuItem> add(MenuItem dish){
        return ResponseEntity.ok(menuItemRepository.save(dish));
    }

    @Transactional
    public ResponseEntity<MenuItem> update(Long id, MenuItem newDish){
        MenuItem existingItem = menuItemRepository.findById(id).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Menu Item not found") );

        if (newDish.getCategory() != null) {
            existingItem.setCategory(newDish.getCategory());
        }
        if (newDish.getName() != null) {
            existingItem.setName(newDish.getName());
        }
        if (newDish.getPrice() != null) {
            existingItem.setPrice(newDish.getPrice());
        }
        if (newDish.getDescription() != null) {
            existingItem.setDescription(newDish.getDescription());
        }

        MenuItem updateItem = menuItemRepository.save(existingItem);
        return ResponseEntity.ok(updateItem);
    }

}
