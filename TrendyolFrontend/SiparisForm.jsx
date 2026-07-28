import { useState, useEffect } from 'react';
import { TextField, Button, Paper, Stack } from '@mui/material';

const glassInput = {
  '& .MuiOutlinedInput-root': {
    color: '#3A2029',
    '& fieldset': { borderColor: 'rgba(232,110,143,0.3)' },
    '&:hover fieldset': { borderColor: 'rgba(232,110,143,0.6)' },
    '&.Mui-focused fieldset': { borderColor: '#E86E8F' },
  },
  '& .MuiInputLabel-root': { color: '#8F6E7E' },
};

function SiparisForm({ onSubmit, editingSiparis, onCancel, errors = {} }) {
  const [form, setForm] = useState({ isim: '', email: '', siparis: '', tarih: '' });

  useEffect(() => {
    if (editingSiparis) {
      setForm(editingSiparis);
    }
  }, [editingSiparis]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} elevation={0}
      sx={{
        p: 3, mb: 4,
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(232,110,143,0.25)',
        boxShadow: '0 8px 32px rgba(232,110,143,0.18)',
      }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
        <TextField
          name="isim" label="İsim" value={form.isim} onChange={handleChange}
          required fullWidth size="small" sx={glassInput}
          error={!!errors.isim} helperText={errors.isim}
        />
        <TextField
          name="email" type="email" label="Email" value={form.email} onChange={handleChange}
          required fullWidth size="small" sx={glassInput}
          error={!!errors.email} helperText={errors.email}
        />
        <TextField name="siparis" label="Sipariş" value={form.siparis} onChange={handleChange} fullWidth size="small" sx={glassInput} />
        <TextField name="tarih" type="date" value={form.tarih} onChange={handleChange} fullWidth size="small" InputLabelProps={{ shrink: true }} sx={glassInput} />
        <Button type="submit" sx={{
          whiteSpace: 'nowrap', px: 3, py: 1,
          background: 'linear-gradient(135deg, #E86E8F, #A97EE0)',
          color: '#FFFFFF', fontWeight: 600,
          boxShadow: '0 4px 20px rgba(232,110,143,0.45)',
          transition: 'all 0.25s ease',
          '&:hover': {
            boxShadow: '0 6px 28px rgba(232,110,143,0.65)',
            transform: 'translateY(-2px)',
          },
        }}>
          {editingSiparis ? 'Güncelle' : 'Ekle'}
        </Button>
        {editingSiparis && (
          <Button type="button" onClick={onCancel} sx={{ color: '#8F6E7E' }}>İptal</Button>
        )}
      </Stack>
    </Paper>
  );
}

export default SiparisForm;