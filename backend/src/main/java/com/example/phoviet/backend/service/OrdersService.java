package com.example.phoviet.backend.service;

import com.example.phoviet.backend.DTO.OrderDTO;
import com.example.phoviet.backend.model.Orders;
import com.example.phoviet.backend.repository.OrdersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class OrdersService {

    private final OrdersRepository ordersRepository;

    public ResponseEntity<OrderDTO> createOrder(OrderDTO request) {
        Orders order = new Orders();
        order.setCustomerName(request.getCustomerName());
        order.setCreatedAt(LocalDateTime.now());

        Orders savedOrder = ordersRepository.save(order);

        // Convert to response
        request.setId(savedOrder.getId());
        request.setCreatedAt(savedOrder.getCreatedAt());
        return ResponseEntity.ok(request);
    }
}
