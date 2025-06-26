package com.example.phoviet.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItemDTO implements Serializable {
    private Long id;
    private String name;
    private String description;
    private Double price;

}
