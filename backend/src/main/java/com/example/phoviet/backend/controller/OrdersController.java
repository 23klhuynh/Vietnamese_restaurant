package com.example.phoviet.backend.controller;

import com.example.phoviet.backend.DTO.DeliveryDTO;
import com.example.phoviet.backend.DTO.OrderDTO;
import com.example.phoviet.backend.DTO.OrderRequestDTO;
import com.example.phoviet.backend.service.OrdersService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/orders")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class OrdersController {

    // Note: this service is for both the Orders and OrderItem

    private final OrdersService ordersService;

    @PostMapping
    public ResponseEntity<OrderDTO> makeOrder(@Valid @RequestBody OrderRequestDTO request){
        return ordersService.createOrder(request);
    }
}
