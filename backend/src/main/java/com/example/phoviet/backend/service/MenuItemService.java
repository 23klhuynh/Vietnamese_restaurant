package com.example.phoviet.backend.service;

import com.example.phoviet.backend.DTO.CategoryDTO;
import com.example.phoviet.backend.DTO.MenuItemDTO;
import com.example.phoviet.backend.model.MenuItem;
import com.example.phoviet.backend.repository.MenuItemRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
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
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MenuItemService {

    private final MenuItemRepository menuItemRepository;

    @Cacheable(value = "API_RESPONSE_CACHE", key = "'all'")
    public ResponseEntity<List<CategoryDTO>> all(){

        Map<String, List<MenuItem>> itemsByCategory = menuItemRepository.findAll().stream().collect(Collectors.groupingBy(MenuItem::getCategory));

        List<CategoryDTO> result = itemsByCategory.entrySet().stream().map(
                entry -> {
                    CategoryDTO dto = new CategoryDTO();
                    dto.setCategory(entry.getKey());
                    dto.setItems(
                            entry.getValue().stream().map(item -> {
                                MenuItemDTO itemDTO = new MenuItemDTO();
                                itemDTO.setId(item.getId());
                                itemDTO.setName(item.getName());
                                itemDTO.setDescription(item.getDescription());
                                itemDTO.setPrice(item.getPrice());
                                return itemDTO;
                            })
                                    .collect(Collectors.toList()));
                            return dto;
                }).collect(Collectors.toList());

        return ResponseEntity.ok(result);

//        [
////        {
////            "category": "Beverages",
////                "items": [
////            {"id": 1, "name": "Coffee", "description": "Black coffee", "price": 3.99},
////            {"id": 2, "name": "Tea", "description": "Green tea", "price": 2.99}
////        ]
////        },
////        {
////            "category": "Entrees",
////                "items": [
////            {"id": 3, "name": "Burger", "description": "Beef burger", "price": 8.99}
////        ]
////        }
////       ]


//        List<MenuItem> menuItems = menuItemRepository.findAll();

        // Beverages: [Coffee, Tea]
        // Entrees: [Burger, Pizza]
        // Desserts: [Ice Cream]
//        Map<String, List<MenuItem>> itemsByCategory = menuItems.stream().collect(Collectors.groupingBy(MenuItem::getCategory));
//
//        Map<String, Map<String, String>[]> data = new HashMap<>();
//
//        for (Map.Entry<String, List<MenuItem>> entry : itemsByCategory.entrySet()){
//            // Get the key
//            String category = entry.getKey();
//            // Get the values
//            List<MenuItem> itemsInCategory = entry.getValue();
//
//            // Convert each MenuItem to a Map<String, String>
//            Map<String, String>[] itemMaps = new HashMap[itemsInCategory.size()];
//
//            for (int i = 0; i < itemsInCategory.size(); i++){
//                MenuItem item = itemsInCategory.get(i);
//                Map<String, String> itemMap = new HashMap<>();
//
//                itemMap.put("id", String.valueOf(item.getId()));
//                itemMap.put("name", item.getName());
//                itemMap.put("description", item.getDescription());
//                itemMap.put("price", String.valueOf(item.getPrice()));
//
//                itemMaps[i] = itemMap;
//            }
//            data.put(category, itemMaps);
//        }
//
//        return ResponseEntity.ok(data);

    }

    @Transactional
    @CacheEvict(value = "API_RESPONSE_CACHE", key = "'all'")
    public ResponseEntity<Void> delete(Long id){
        if (!menuItemRepository.existsById(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Menu Item not found");
        }
        menuItemRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Transactional
    @CacheEvict(value = "API_RESPONSE_CACHE", key = "'all'")
    @CachePut(value = "DISHES_CACHE", key = "#dish.id")
    public ResponseEntity<MenuItem> add(MenuItem dish){
        MenuItem savedItem = menuItemRepository.save(dish);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedItem);
    }

    @Transactional
    @CacheEvict(value = "API_RESPONSE_CACHE", key = "'all'")
    @CachePut(value = "DISHES_CACHE", key = "#id")
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
