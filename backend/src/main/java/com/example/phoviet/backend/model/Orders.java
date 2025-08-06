package com.example.phoviet.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
@Data
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String customerName;

    @Column(nullable = false)
    @Email
    private String email;

    @Column(nullable = false)
    private Integer phoneNumber;

    @Column(nullable = false)
    private LocalDateTime createdAt;



}
