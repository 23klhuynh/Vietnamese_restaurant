package com.example.phoviet.backend.DTO;

import com.example.phoviet.backend.model.MenuItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO implements Serializable {
    private String category;
    private List<MenuItemDTO> items;
}
