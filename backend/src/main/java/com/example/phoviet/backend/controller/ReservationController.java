package com.example.phoviet.backend.controller;

import com.example.phoviet.backend.DTO.ReservationDTO;
import com.example.phoviet.backend.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Done
@RestController
@RequestMapping("api/v1/reservation")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ReservationController {

    private final ReservationService reservationService;

    @PostMapping()
    public ResponseEntity<ReservationDTO> createReservation(@RequestBody ReservationDTO reservationDTO){
        return reservationService.makeReservation(reservationDTO);
    }

}
