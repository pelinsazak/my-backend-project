package com.isdemir.Trendyol.mapper;

import com.isdemir.Trendyol.dto.TrendyolRequestDto;
import com.isdemir.Trendyol.dto.TrendyolResponseDto;
import com.isdemir.Trendyol.entity.Trendyol;
import org.springframework.stereotype.Component;

@Component
public class TrendyolMapper {

  public Trendyol toEntity(TrendyolRequestDto dto) {
    return new Trendyol(dto.getIsim(), dto.getEmail(), dto.getTarih(), dto.getSiparis());
  }

  public TrendyolResponseDto toResponseDto(Trendyol entity) {
    return new TrendyolResponseDto(
        entity.getId(),
        entity.getIsim(),
        entity.getSiparis(),
        entity.getTarih()
      );
  }

  public Trendyol updateEntityFromDto(TrendyolRequestDto dto, Trendyol mevcut) {
    return new Trendyol(mevcut.getId(), dto.getIsim(), dto.getEmail(), dto.getTarih(), dto.getSiparis());
  }
}