package com.example.phoviet.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	// Next combine the orderDTO and the OrderRequestDTO because it's basically repeating
	//
	//
	// {
	//  "customerName": "Jane Smith",
	//  "email": "jane.smith@example.com",
	//  "phoneNumber": 9876543210,
	//  "items": [
	//    { "menuItemId": 1, "quantity": 2 },
	//    { "menuItemId": 2, "quantity": 1 }
	//  ],
	//  "deliveryDTO": {
	//    "address": "456 Elm Street",
	//    "city": "Los Angeles",
	//    "zipcode": 90001
	//  }
	//}


}
