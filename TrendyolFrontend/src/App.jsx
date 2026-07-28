import { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { getAllSiparisler, createSiparis, updateSiparis, deleteSiparis, searchSiparisler } from './api/siparisApi';
import SiparisForm from './components/SiparisForm';
import SiparisList from './components/SiparisList';
import AramaKutusu from './components/AramaKutusu';

function App() {
  const [siparisler, setSiparisler] = useState([]);
  const [editingSiparis, setEditingSiparis] = useState(null);
  const [aramaMetni, setAramaMetni] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const fetchSiparisler = async () => {
    const response = await getAllSiparisler();
    setSiparisler(response.data);
  };

  useEffect(() => {
    fetchSiparisler();
  }, []);

  useEffect(() => {
    const gecikme = setTimeout(async () => {
      if (aramaMetni.trim() === '') {
        fetchSiparisler();
      } else {
        const response = await searchSiparisler(aramaMetni);
        setSiparisler(response.data);
      }
    }, 400);

    return () => clearTimeout(gecikme);
  }, [aramaMetni]);

  const handleSubmit = async (form) => {
    try {
      if (editingSiparis) {
        await updateSiparis(editingSiparis.id, form);
        setEditingSiparis(null);
      } else {
        await createSiparis(form);
      }
      setFormErrors({});
      fetchSiparisler();
    } catch (error) {
      if (error.response && error.response.data) {
        setFormErrors(error.response.data);
      }
    }
  };

  const handleDelete = async (id) => {
    await deleteSiparis(id);
    fetchSiparisler();
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{
        position: 'absolute', width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,110,143,0.4), transparent 70%)',
        filter: 'blur(90px)', top: -160, left: -120, pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(169,126,224,0.35), transparent 70%)',
        filter: 'blur(90px)', top: 40, right: -140, pointerEvents: 'none',
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', pt: 8, pb: 6 }}>
        <Typography variant="h4" sx={{
          background: 'linear-gradient(135deg, #B5285A, #E86E8F)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 0.5,
        }}>
          Trendyol Sipariş Yönetimi
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
          Siparişlerini tek yerden ekle, düzenle ve takip et
        </Typography>

        <SiparisForm
          onSubmit={handleSubmit}
          editingSiparis={editingSiparis}
          onCancel={() => { setEditingSiparis(null); setFormErrors({}); }}
          errors={formErrors}
        />

        <AramaKutusu value={aramaMetni} onChange={setAramaMetni} />

        <SiparisList
          siparisler={siparisler}
          onEdit={setEditingSiparis}
          onDelete={handleDelete}
        />
      </Container>
    </Box>
  );
}

export default App;