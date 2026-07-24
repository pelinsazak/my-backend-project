import { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { getAllSiparisler, createSiparis, updateSiparis, deleteSiparis } from './api/siparisApi';
import SiparisForm from './components/SiparisForm';
import SiparisList from './components/SiparisList';

function App() {
  const [siparisler, setSiparisler] = useState([]);
  const [editingSiparis, setEditingSiparis] = useState(null);

  const fetchSiparisler = async () => {
    const response = await getAllSiparisler();
    setSiparisler(response.data);
  };

  useEffect(() => {
    fetchSiparisler();
  }, []);

  const handleSubmit = async (form) => {
    if (editingSiparis) {
      await updateSiparis(editingSiparis.id, form);
      setEditingSiparis(null);
    } else {
      await createSiparis(form);
    }
    fetchSiparisler();
  };

  const handleDelete = async (id) => {
    await deleteSiparis(id);
    fetchSiparisler();
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Sipariş Yönetimi
        </Typography>
        <SiparisForm
          onSubmit={handleSubmit}
          editingSiparis={editingSiparis}
          onCancel={() => setEditingSiparis(null)}
        />
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