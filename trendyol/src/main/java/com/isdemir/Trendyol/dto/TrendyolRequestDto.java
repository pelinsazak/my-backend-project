package com.isdemir.Trendyol.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;


public class TrendyolRequestDto {
    @NotBlank(message ="isim bos olamaz")
    private String isim;
    
    @NotBlank(message = "Email bos olamaz")
    @Email(message ="Gecerli bir email giriniz. ")
    private String email;

    private String siparis;
    private LocalDate tarih;

    public TrendyolRequestDto(){

    }
    public String getIsim(){
        return isim;
    }

    public void setIsim(String isim){
        this.isim=isim;

    }
    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email=email;
    }
    public  String getSiparis(){
        return siparis;
    }
    public void setSiparis(String siparis){
        this.siparis=siparis;

    }
    public LocalDate getTarih(){
        return tarih;
    }
    public void setTarih(LocalDate tarih){
        this.tarih=tarih;
    }
    
}
