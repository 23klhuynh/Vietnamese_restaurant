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

	// next
	// make sure the frontend get the menu item id when check out so that it can be sent to the backend
	//	make sure the frontend send the menu items in an array
	//{
	//    "customerName": "John Doe",
	//    "items": [
	//        {
	//            "menuItemId": 1,
	//            "quantity": 2
	//        },
	//        {
	//            "menuItemId": 3,
	//            "quantity": 1
	//        },
	//        {
	//            "menuItemId": 5,
	//            "quantity": 3
	//        }
	//    ]
	//}


}
