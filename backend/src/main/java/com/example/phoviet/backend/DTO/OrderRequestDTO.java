package com.example.phoviet.backend.DTO;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class OrderRequestDTO {
    @NotBlank
    private String customerName;

    @NotBlank
    @Email
    private String email;

    @NotNull
    private String phoneNumber;

    private DeliveryDTO deliveryDTO;

    @NotEmpty
    private List<@Valid OrderItemDTO> items;




}
