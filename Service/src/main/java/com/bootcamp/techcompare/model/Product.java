package com.bootcamp.techcompare.model;

import java.net.URL;

public class Product {
    private int id;
    private String title;
    private double price;
    private String description;
    private String category;
    private URL image;
    private Review review;

    public Product(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory(){
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public URL getImage() {
        return image;
    }

    public void setImage(URL image) {
        this.image = image;
    }

    public Review getRating() {
        return review;
    }

    public void setRating(Review review) {
        this.review = review;
    }
}
