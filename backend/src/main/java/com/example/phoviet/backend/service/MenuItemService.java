package com.example.phoviet.backend.service;

import com.example.phoviet.backend.DTO.CategoryDTO;
import com.example.phoviet.backend.DTO.MenuItemDTO;
import com.example.phoviet.backend.model.MenuItem;
import com.example.phoviet.backend.repository.MenuItemRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class MenuItemService {

    private final MenuItemRepository menuItemRepository;

    @Cacheable(value = "menu_categories", key = "'all_categories'")
    public List<CategoryDTO> getAllMenuCategories(){
        log.info("Executing getAllMenuCategories() - fetching from database");

        Map<String, List<MenuItem>> itemsByCategory = menuItemRepository.findAll()
                .stream()
                .collect(Collectors.groupingBy(MenuItem::getCategory));

        List<CategoryDTO> result = itemsByCategory.entrySet().stream()
                .map(entry -> {
                    CategoryDTO dto = new CategoryDTO();
                    dto.setCategory(entry.getKey());
                    dto.setItems(
                            entry.getValue().stream()
                                    .map(item -> {
                                        MenuItemDTO itemDTO = new MenuItemDTO();
                                        itemDTO.setId(item.getId());
                                        itemDTO.setName(item.getName());
                                        itemDTO.setDescription(item.getDescription());
                                        itemDTO.setPrice(item.getPrice());
                                        return itemDTO;
                                    })
                                    .collect(Collectors.toList())
                    );
                    return dto;
                })
                .collect(Collectors.toList());

        log.info("Returning {} categories", result.size());
        return result;
    }

    // This method calls the cached method and wraps in ResponseEntity
//    public ResponseEntity<List<CategoryDTO>> all(){
//        try {
//            List<CategoryDTO> categories = getAllMenuCategories();
//            return ResponseEntity.ok(categories);
//        } catch (Exception e) {
//            log.error("Error fetching menu categories", e);
//            throw e;
//        }
//    }

    @Transactional
    @CacheEvict(value = {"menu_categories", "menu_items"}, allEntries = true)
    public ResponseEntity<Void> delete(Long id){
        if (!menuItemRepository.existsById(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Menu Item not found");
        }
        menuItemRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Transactional
    @CacheEvict(value = "menu_categories", key = "'all_categories'")
    @CachePut(value = "menu_items", key = "#dish.id")
    public ResponseEntity<MenuItem> add(MenuItem dish){
        MenuItem savedItem = menuItemRepository.save(dish);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedItem);
    }

    @Transactional
    @CacheEvict(value = "menu_categories", key = "'all_categories'")
    @CachePut(value = "menu_items", key = "#id")
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

    @Cacheable(value = "menu_items", key = "#id")
    public ResponseEntity<MenuItem> getById(Long id) {
        Optional<MenuItem> menuItem = menuItemRepository.findById(id);
        return menuItem
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
