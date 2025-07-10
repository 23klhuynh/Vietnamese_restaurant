package com.example.phoviet.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@Table(name = "reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String customer_name;

    @Column(nullable = false)
    private String customer_email;

    @Column(nullable = false)
    private Integer number_of_people;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private LocalDate reservation_date;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime reservation_time;
}
