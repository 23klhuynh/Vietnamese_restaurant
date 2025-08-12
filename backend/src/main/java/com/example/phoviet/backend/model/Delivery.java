package com.example.phoviet.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="delivery")
@Data
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long order_id;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private Long zipcode;

    // *Delivery table = order_id, address, city, state, zipcode

}
