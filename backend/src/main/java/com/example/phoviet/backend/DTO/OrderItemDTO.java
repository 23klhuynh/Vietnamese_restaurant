package com.example.phoviet.backend.DTO;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class OrderItemDTO {

//    @NotNull
//    private Long orderId;
    // this will be automatically implemented

    @NotNull
    @Positive
    private Long menuItemId;

    @Min(1)
    @Positive
    private Long quantity;
}
