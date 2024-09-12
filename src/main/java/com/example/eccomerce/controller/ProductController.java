package com.example.eccomerce.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;

@RestController
public class ProductController {

    static ArrayList<Product> products = new ArrayList<Product>();

    @GetMapping("/products")
    public static String getProducts(String[] args) {
        if (products.isEmpty()) {
            System.out.println(" no products yet");
        }
        for (Product product : products) {
            return product.getProductName();
        }
        return null;
    }

    @GetMapping("/addProduct")
    public static String addProduct(@RequestBody NameRequest request) {
        Product product = new Product(request.getName(), request.getPrice());
        products.add(product);
        return "Product added";
    }
}

class Product{
    private final String name;
    private final Float price;

    public Product(String name, Float price){
        this.name = name;
        this.price = price;
    }

    public String getProductName(){
        return name;
    }

    public Float getProductPrice(){
        return price;
    }
}