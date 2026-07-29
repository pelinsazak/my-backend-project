package com.isdemir.Trendyol.dto;
import java.util.List;

public class GuncellemeSonucuDto {
    private final TrendyolResponseDto guncellenenKayit;
    private final List<String> degisenAlanlar;

    public GuncellemeSonucuDto(TrendyolResponseDto guncellenenKayit,List<String> degisenAlanlar){
        this.guncellenenKayit=guncellenenKayit;
        this.degisenAlanlar=degisenAlanlar;

    }
    public TrendyolResponseDto getGuncellenenKayit(){
        return guncellenenKayit;
    }
    public List<String> getDegisenAlanlar(){return degisenAlanlar;}
}