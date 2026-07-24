import { useState, useEffect } from 'react';
import { TextField, Button, Paper, Stack } from '@mui/material';

function SiparisForm({ onSubmit, editingSiparis, onCancel }) {
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
    setForm({ isim: '', email: '', siparis: '', tarih: '' });
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} elevation={0}
      sx={{ p: 3, mb: 3, border: '1px solid', borderColor: 'divider' }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
        <TextField name="isim" label="İsim" value={form.isim} onChange={handleChange} required fullWidth size="small" />
        <TextField name="email" type="email" label="Email" value={form.email} onChange={handleChange} required fullWidth size="small" />
        <TextField name="siparis" label="Sipariş" value={form.siparis} onChange={handleChange} fullWidth size="small" />
        <TextField name="tarih" type="date" value={form.tarih} onChange={handleChange} fullWidth size="small" InputLabelProps={{ shrink: true }} />
        <Button type="submit" variant="contained" sx={{ whiteSpace: 'nowrap', px: 3 }}>
          {editingSiparis ? 'Güncelle' : 'Ekle'}
        </Button>
        {editingSiparis && (
          <Button type="button" onClick={onCancel} color="inherit">İptal</Button>
        )}
      </Stack>
    </Paper>
  );
}

export default SiparisForm;