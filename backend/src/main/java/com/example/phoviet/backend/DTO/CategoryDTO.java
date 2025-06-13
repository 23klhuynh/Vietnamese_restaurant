package com.example.phoviet.backend.DTO;

import com.example.phoviet.backend.model.MenuItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {
    private String category;
    private List<MenuItemDTO> items;
}
