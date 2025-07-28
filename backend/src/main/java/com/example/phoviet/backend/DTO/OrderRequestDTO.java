package com.example.phoviet.backend.DTO;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.util.List;

@Data
public class OrderRequestDTO {
    @NotBlank
    private String customerName;

    @NotEmpty
    private List<@Valid OrderItemDTO> items;
}
