package com.example.phoviet.backend.service;

import com.example.phoviet.backend.DTO.DeliveryDTO;
import com.example.phoviet.backend.DTO.OrderDTO;
import com.example.phoviet.backend.DTO.OrderItemDTO;
import com.example.phoviet.backend.DTO.OrderRequestDTO;
import com.example.phoviet.backend.model.Delivery;
import com.example.phoviet.backend.model.OrderItem;
import com.example.phoviet.backend.model.Orders;
import com.example.phoviet.backend.repository.DeliveryRepository;
import com.example.phoviet.backend.repository.MenuItemRepository;
import com.example.phoviet.backend.repository.OrderItemRepository;
import com.example.phoviet.backend.repository.OrdersRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrdersService {

    // Note: this service is for both the Orders and OrderItem

    private final OrdersRepository ordersRepository;
    private final OrderItemRepository orderItemRepository;
    private final MenuItemRepository menuItemRepository;
    private final DeliveryRepository deliveryRepository;

    @Transactional
    public ResponseEntity<OrderDTO> createOrder(OrderRequestDTO request) {
        Orders order = new Orders();
        order.setCustomerName(request.getCustomerName());
        order.setEmail(request.getEmail());
        order.setPhoneNumber(request.getPhoneNumber());
        order.setCreatedAt(LocalDateTime.now());
        Orders savedOrder = ordersRepository.save(order);

        for (OrderItemDTO itemDto : request.getItems()) {
            OrderItem item = new OrderItem();
            item.setOrderId(savedOrder.getId());
            item.setMenuItemId(itemDto.getMenuItemId());
            item.setQuantity(itemDto.getQuantity());
            orderItemRepository.save(item);
        }
        // Convert to response

        if (request.getDeliveryDTO() != null) {
            Delivery deliveryEntity = new Delivery();
            deliveryEntity.setOrderId(savedOrder.getId());
            deliveryEntity.setAddress(request.getDeliveryDTO().getAddress());
            deliveryEntity.setCity(request.getDeliveryDTO().getCity());
            deliveryEntity.setZipcode(request.getDeliveryDTO().getZipcode());
            deliveryRepository.save(deliveryEntity);
        }

        OrderDTO response = new OrderDTO();
        response.setId(savedOrder.getId());
        response.setCustomerName(savedOrder.getCustomerName());
        response.setEmail(savedOrder.getEmail());
        response.setPhoneNumber(savedOrder.getPhoneNumber());
        response.setCreatedAt(savedOrder.getCreatedAt());

        return ResponseEntity.ok(response);
        // the frontend should be passing the response with reponse.id
    }



    //create devlivery

//    @Transactional
//    public ResponseEntity<DeliveryDTO> createDelivery(DeliveryDTO deliveryDTO){
//        // need to create controller
//        // need to save what ever is pass on in the parameter
//        // the frontend will pass in everything
//
//        return ResponseEntity.ok();
//
//    }




}
