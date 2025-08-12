package com.example.phoviet.backend.DTO;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class DeliveryDTO {

    @NotBlank
    private Long order_id;

    @NotBlank
    private String address;

    @NotBlank
    private String city;

    @NotBlank
    private Long zipcode;
}
