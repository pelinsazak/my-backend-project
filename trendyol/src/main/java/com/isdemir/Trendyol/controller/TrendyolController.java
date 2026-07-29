package com.isdemir.Trendyol.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.isdemir.Trendyol.dto.GuncellemeSonucuDto;
import com.isdemir.Trendyol.dto.SayfaliSonucDto;
import com.isdemir.Trendyol.dto.TrendyolRequestDto;
import com.isdemir.Trendyol.dto.TrendyolResponseDto;
import com.isdemir.Trendyol.entity.Trendyol;
import com.isdemir.Trendyol.mapper.TrendyolMapper;
import com.isdemir.Trendyol.service.TrendyolService;

import jakarta.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/siparisler")
public class TrendyolController {

    private final TrendyolService service;
    private final TrendyolMapper mapper;

    public TrendyolController(TrendyolService service, TrendyolMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

   
    @GetMapping
    public SayfaliSonucDto hepsiniGetir(
        @RequestParam(defaultValue = "0") int sayfa,
        @RequestParam(defaultValue = "5") int boyut,
        @RequestParam(defaultValue = "id") String sirala,
        @RequestParam(defaultValue = "ASC") String yon
) {
    List<TrendyolResponseDto> icerik = service.sayfalamaliGetir(sayfa, boyut, sirala, yon)
            .stream()
            .map(mapper::toResponseDto)
            .collect(Collectors.toList());

    long toplamKayit = service.toplamKayitSayisi();
    int toplamSayfa = (int) Math.ceil((double) toplamKayit / boyut);

    return new SayfaliSonucDto(icerik, toplamKayit, toplamSayfa, sayfa);
}
    @GetMapping("/{id}")
    public ResponseEntity<TrendyolResponseDto> birTaneGetir(@PathVariable Long id) {
        Trendyol kayit = service.birTaneGetir(id);
        if (kayit == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.toResponseDto(kayit));
    }
    @GetMapping("/ara")
    public List<TrendyolResponseDto> ara(@RequestParam String isim) {
    return service.isimeGoreAra(isim)
            .stream()
            .map(mapper::toResponseDto)
            .collect(Collectors.toList());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TrendyolResponseDto olustur(@Valid @RequestBody TrendyolRequestDto istek) {
        Trendyol yeniKayit = mapper.toEntity(istek);
        Trendyol kaydedilen = service.kaydet(yeniKayit);
        return mapper.toResponseDto(kaydedilen);
    }

    @PutMapping("/{id}")
    public ResponseEntity<GuncellemeSonucuDto> guncelle(@PathVariable Long id, @Valid @RequestBody TrendyolRequestDto istek) {

        Trendyol mevcutKayit = service.birTaneGetir(id);
        if (mevcutKayit == null) {
            return ResponseEntity.notFound().build();
        }

        List<String> degisenAlanlar =mapper.degisenAlanlariBul(istek,mevcutKayit);

        Trendyol guncellenmisHali=mapper.updateEntityFromDto(istek, mevcutKayit);
        Trendyol guncellenen = service.guncelle(guncellenmisHali);
        TrendyolResponseDto responseDto=mapper.toResponseDto(guncellenen);
        GuncellemeSonucuDto sonuc= new GuncellemeSonucuDto(responseDto, degisenAlanlar);

        return ResponseEntity.ok(sonuc);
    }

    @DeleteMapping("/{id}")
    public void sil(@PathVariable Long id) {
        service.sil(id);
    }
}