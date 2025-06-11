package com.example.phoviet.backend.controller;

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
@CrossOrigin(origins = "http://localhost:5173")
public class MenuItemController {

    private final MenuItemService menuItemService;

    @GetMapping
    public ResponseEntity<Map<String, Map<String, String>[]>> getAllMenuItems(){
       return menuItemService.all();
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
