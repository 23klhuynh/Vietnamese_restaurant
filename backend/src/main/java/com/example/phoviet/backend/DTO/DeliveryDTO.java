package com.example.phoviet.backend.DTO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class DeliveryDTO {

    @JsonIgnore
    private Long orderId;

    private String address;

    private String city;

    private Long zipcode;
}
