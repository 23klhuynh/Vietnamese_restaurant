package com.example.phoviet.backend.DTO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class OrderDTO {

    @NotBlank
    private String customerName;

    @NotBlank
    @Email
    private String email;

    @NotNull
    private Integer phoneNumber;

    @JsonIgnore
    private Long id;

    @JsonIgnore
    private LocalDateTime createdAt;
}
