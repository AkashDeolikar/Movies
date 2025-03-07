package com.example.demo;


import org.apache.catalina.core.ApplicationContext;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
//		ApplicationContext context = (ApplicationContext) SpringApplication.run(DemoApplication.class, args);
//		var orderService = ((BeanFactory) context).getBean(OrderService.class);
		SpringApplication.run(DemoApplication.class, args);
//		var orderService = new OrderService(new StripePaymentService());
		
//		var orderService = new OrderService();
//		orderService.setPaymentService(new PayPalPaymentService());
//		orderService.placeOrder();
	}
	
	@GetMapping("/")
	public String home() {
		return "index";
	}

}
