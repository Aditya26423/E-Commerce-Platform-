package com.ecommerce.controller;

import com.ecommerce.model.Order;
import com.ecommerce.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<Order> placeOrder(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(orderService.placeOrder(userDetails.getUsername()));
    }

    @GetMapping
    public ResponseEntity<List<Order>> getUserOrders(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(orderService.getUserOrders(userDetails.getUsername()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id,
                                               @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(orderService.getOrderById(id, userDetails.getUsername()));
    }
}
