//package com.example.demo;
//
//import com.example.demo.Image;
//import com.example.demo.ImageRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/images")
//@CrossOrigin(origins = "http://localhost:3000")  // Allow React frontend to access
//public class ImageController {
//
//    @Autowired
//    private ImageRepository imageRepository;
//
//    @GetMapping
//    public List<Image> getAllImages() {
//        return imageRepository.findAll();
//    }
//
//    @PostMapping
//    public Image addImage(@RequestBody Image image) {
//        return imageRepository.save(image);
//    }
//}