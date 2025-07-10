package com.example.phoviet.backend.service;

import com.example.phoviet.backend.DTO.ReservationDTO;
import com.example.phoviet.backend.model.Reservation;
import com.example.phoviet.backend.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;

    public ResponseEntity<ReservationDTO> makeReservation(ReservationDTO reservationDTO){
        Reservation reservation = new Reservation();
        reservation.setCustomer_name(reservationDTO.getCustomer_name());
        reservation.setCustomer_email(reservationDTO.getCustomer_email());
        reservation.setNumber_of_people(reservationDTO.getNumber_of_people());
        reservation.setReservation_date(reservationDTO.getReservation_date());
        reservation.setReservation_time(reservationDTO.getReservation_time());

        Reservation newReservation = reservationRepository.save(reservation);

        ReservationDTO responseDTO = new ReservationDTO();
        responseDTO.setId(newReservation.getId());
        responseDTO.setCustomer_name(newReservation.getCustomer_name());
        responseDTO.setCustomer_email(newReservation.getCustomer_email());
        responseDTO.setNumber_of_people(newReservation.getNumber_of_people());
        responseDTO.setReservation_date(newReservation.getReservation_date());
        responseDTO.setReservation_time(newReservation.getReservation_time());

        return ResponseEntity.ok(responseDTO);

    }
}
