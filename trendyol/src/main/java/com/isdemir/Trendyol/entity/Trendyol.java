package com.isdemir.Trendyol.entity;

import java.time.LocalDate;

public class Trendyol {

    private final Long id;
    private String isim;
    private String email;
    private String siparis;
    private LocalDate tarih;

    // Yeni kayıt oluştururken kullanılır (id henüz yok, veritabanı üretecek)
    public Trendyol(String isim, String email, LocalDate tarih, String siparis) {
        this.id = null;
        this.isim = isim;
        this.email = email;
        this.tarih = tarih;
        this.siparis = siparis;
    }

    // id'si belli olan kayıtlar için kullanılır (Repository içinde)
    public Trendyol(Long id, String isim, String email, LocalDate tarih, String siparis) {
        this.id = id;
        this.isim = isim;
        this.email = email;
        this.tarih = tarih;
        this.siparis = siparis;
    }

    public Long getId() {
        return id;
    }

    public String getIsim() {
        return isim;
    }

    public void setIsim(String isim) {
        this.isim = isim;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSiparis() {
        return siparis;
    }

    public void setSiparis(String siparis) {
        this.siparis = siparis;
    }

    public LocalDate getTarih() {
        return tarih;
    }

    public void setTarih(LocalDate tarih) {
        this.tarih = tarih;
    }
}