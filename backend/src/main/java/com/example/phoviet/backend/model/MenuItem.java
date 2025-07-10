package com.example.phoviet.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Menu_Item")
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private String category;
}
