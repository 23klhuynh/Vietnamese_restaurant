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

    // The delivery table will extract the order id column
    // and then create a column name order_id in the delivery table
    //
//    @ManyToOne // Many deliveries could be linked to one order (usually 1 though)
//    @JoinColumn(name = "order_id", nullable = false)
//    private Orders order;

    @Column(nullable = false)
    private Long orderId;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private Long zipcode;

    // *Delivery table = order_id, address, city, state, zipcode

}
