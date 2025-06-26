package com.example.phoviet.backend.controller;

import com.example.phoviet.backend.DTO.CategoryDTO;
import com.example.phoviet.backend.DTO.MenuItemDTO;
import com.example.phoviet.backend.model.MenuItem;
import com.example.phoviet.backend.repository.MenuItemRepository;
import com.example.phoviet.backend.service.MenuItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/menu-items")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class MenuItemController {

    private final MenuItemService menuItemService;

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> getAllMenuItems(){
        try {
            List<CategoryDTO> categories = menuItemService.getAllMenuCategories();
            return ResponseEntity.ok(categories);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error fetching categories");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<MenuItem> getItemsById(@PathVariable Long id){
        return menuItemService.getById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenuItem(@PathVariable Long id){
        return menuItemService.delete(id);
    }

    @PostMapping
    public ResponseEntity<MenuItem> addMenuItem(@RequestBody MenuItem dish){
        return menuItemService.add(dish);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MenuItem> updateMenuItem(@PathVariable Long id, @RequestBody MenuItem newDish){
        return menuItemService.update(id, newDish);
    }

}
