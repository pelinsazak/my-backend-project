package com.isdemir.Trendyol.repository;

import com.isdemir.Trendyol.entity.Trendyol;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class TrendyolRepository {

    private final DataSource dataSource;

    public TrendyolRepository(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public List<Trendyol> findAll() {
        String sql = "SELECT id, musteri_adi, email, siparis, tarih FROM siparisler";
        List<Trendyol> sonuc = new ArrayList<>();

        try (Connection conn = dataSource.getConnection();
                PreparedStatement ps = conn.prepareStatement(sql);
                ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                sonuc.add(mapRow(rs));
            }

        } catch (SQLException e) {
            throw new RuntimeException("Kayitlar getirilirken hata oluştu", e);
        }
        return sonuc;
    }

    public Trendyol findById(Long id) {
        String sql = "SELECT id, musteri_adi, email, siparis, tarih FROM siparisler WHERE id = ?";

        try (Connection conn = dataSource.getConnection();
                PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setLong(1, id);

            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return mapRow(rs);
                }
                return null;
            }

        } catch (SQLException e) {
            throw new RuntimeException("Kayıt getirilirken hata oluştu", e);
        }
    }

    public List<Trendyol> findByIsim(String isim) {
    String sql = "SELECT id, musteri_adi, email, siparis, tarih FROM siparisler WHERE musteri_adi LIKE ?";
    List<Trendyol> sonuc = new ArrayList<>();

    try (Connection conn = dataSource.getConnection();
         PreparedStatement ps = conn.prepareStatement(sql)) {

        ps.setString(1, "%" + isim + "%");

        try (ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                sonuc.add(mapRow(rs));
            }
        }

    } catch (SQLException e) {
        throw new RuntimeException("Arama yapılırken hata oluştu", e);
    }
    return sonuc;
}

    public Trendyol insert(Trendyol kayit) {
        String sql = "INSERT INTO siparisler (musteri_adi, email, siparis, tarih) VALUES (?, ?, ?, ?)";

        try (Connection conn = dataSource.getConnection();
                PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            ps.setString(1, kayit.getIsim());
            ps.setString(2, kayit.getEmail());
            ps.setString(3, kayit.getSiparis());
            ps.setDate(4, kayit.getTarih() != null ? Date.valueOf(kayit.getTarih()) : null);

            ps.executeUpdate();

            Long yeniId;
            try (ResultSet keys = ps.getGeneratedKeys()) {
                keys.next();
                yeniId = keys.getLong(1);
            }

            return new Trendyol(yeniId, kayit.getIsim(), kayit.getEmail(), kayit.getTarih(), kayit.getSiparis());

        } catch (SQLException e) {
            throw new RuntimeException("Kayıt eklenirken hata oluştu", e);
        }
    }

    public Trendyol update(Trendyol kayit) {
        String sql = "UPDATE siparisler SET musteri_adi = ?, email = ?, siparis = ?, tarih = ? WHERE id = ?";

        try (Connection conn = dataSource.getConnection();
                PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, kayit.getIsim());
            ps.setString(2, kayit.getEmail());
            ps.setString(3, kayit.getSiparis());
            ps.setDate(4, kayit.getTarih() != null ? Date.valueOf(kayit.getTarih()) : null);
            ps.setLong(5, kayit.getId());

            ps.executeUpdate();
            return kayit;

        } catch (SQLException e) {
            throw new RuntimeException("Kayıt güncellenirken hata oluştu", e);
        }
    }

    public void deleteById(Long id) {
        String sql = "DELETE FROM siparisler WHERE id = ?";

        try (Connection conn = dataSource.getConnection();
                PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setLong(1, id);
            ps.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException("Kayıt silinirken hata oluştu", e);
        }
    }

    private Trendyol mapRow(ResultSet rs) throws SQLException {
        Long id = rs.getLong("id");
        String isim = rs.getString("musteri_adi");
        String email = rs.getString("email");
        String siparis = rs.getString("siparis");
        Date tarihSql = rs.getDate("tarih");
        LocalDate tarih = tarihSql != null ? tarihSql.toLocalDate() : null;

        return new Trendyol(id, isim, email, tarih, siparis);
    }
}