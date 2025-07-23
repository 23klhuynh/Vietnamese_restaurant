package com.example.phoviet.backend.controller;

import com.example.phoviet.backend.DTO.OrderDTO;
import com.example.phoviet.backend.service.OrdersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/orders")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class OrdersController {

    private final OrdersService ordersService;

    @PostMapping
    public ResponseEntity<OrderDTO> makeOrder(@RequestBody OrderDTO order){
        return ordersService.createOrder(order);
    }
}
