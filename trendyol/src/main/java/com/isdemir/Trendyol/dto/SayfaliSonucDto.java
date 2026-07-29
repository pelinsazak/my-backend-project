package com.isdemir.Trendyol.dto;
import java.util.List;

public class SayfaliSonucDto {

    private final List<TrendyolResponseDto> icerik;
    private final long toplamKayit;
    private final int toplamSayfa;
    private final int suankiSayfa;

    public SayfaliSonucDto(List<TrendyolResponseDto> icerik, long toplamKayit, int toplamSayfa, int suankiSayfa) {
        this.icerik = icerik;
        this.toplamKayit = toplamKayit;
        this.toplamSayfa = toplamSayfa;
        this.suankiSayfa = suankiSayfa;
    }

    public List<TrendyolResponseDto> getIcerik() { return icerik; }
    public long getToplamKayit() { return toplamKayit; }
    public int getToplamSayfa() { return toplamSayfa; }
    public int getSuankiSayfa() { return suankiSayfa; }
}
    

