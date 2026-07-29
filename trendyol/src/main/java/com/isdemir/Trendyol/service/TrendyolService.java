package com.isdemir.Trendyol.service;

import com.isdemir.Trendyol.entity.Trendyol;
import com.isdemir.Trendyol.repository.TrendyolRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TrendyolService {

    private final TrendyolRepository repository;

    public TrendyolService(TrendyolRepository repository) {
        this.repository = repository;
    }

    public Trendyol kaydet(Trendyol kayit) {
        return repository.insert(kayit);
    }

    public List<Trendyol> hepsiniGetir() {
        return repository.findAll();
    }

    public Trendyol birTaneGetir(Long id) {
        return repository.findById(id);
    }

    public Trendyol guncelle(Trendyol kayit) {
        return repository.update(kayit);
    }

    public void sil(Long id) {
        repository.deleteById(id);
    }

    public List<Trendyol> isimeGoreAra(String isim) {
        return repository.findByIsim(isim);
    }

    public List<Trendyol> sayfalamaliGetir(int sayfa, int boyut, String sirala, String yon) {
        return repository.findAllPaged(sayfa, boyut, sirala, yon);
    }

    public long toplamKayitSayisi() {
        return repository.countAll();
    }
}