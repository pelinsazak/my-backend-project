package com.isdemir.Trendyol.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> hatalar = new HashMap<>();
        for (FieldError hata : ex.getBindingResult().getFieldErrors()) {
            hatalar.put(hata.getField(), hata.getDefaultMessage());
        }
        return ResponseEntity.badRequest().body(hatalar);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, String>> handleRuntimeException(RuntimeException ex) {
        Map<String, String> hata = new HashMap<>();
        hata.put("mesaj", "Bir hata oluştu: " + ex.getMessage());
        return ResponseEntity.internalServerError().body(hata);
    }
}