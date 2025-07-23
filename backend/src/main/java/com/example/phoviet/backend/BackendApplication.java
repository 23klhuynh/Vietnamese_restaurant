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

	// next will create a order_items section in the db
	//
	// in the order_items service, under the order_id, set it equal to order id
	//
	// make only one service layer so on the orders either add the order_items to it or some other ways

}
