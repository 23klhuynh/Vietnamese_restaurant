package com.example.phoviet.backend.DTO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class OrderDTO {

    @NotBlank
    private String customerName;

    @JsonIgnore
    private Long id;

    @JsonIgnore
    private LocalDateTime createdAt;
}
