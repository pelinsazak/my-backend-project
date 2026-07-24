package com.isdemir.Trendyol.dto;
import java.time.LocalDate;

public class TrendyolResponseDto {

    private  Long id;
    private  String isim;
    private  String siparis;
    private  LocalDate tarih;

    public TrendyolResponseDto(Long id, String isim,String siparis ,LocalDate tarih) {
        this.id=id;
        this.isim = isim;
        this.siparis = siparis;
        this.tarih = tarih;
        
    }

    public Long getId() {
         return id; 
        }

    public String getIsim() {
         return isim;
        }

    public String getSiparis() { 
        return siparis; 
    
    }
    
    public LocalDate getTarih() { 
        return tarih; 
    }
}