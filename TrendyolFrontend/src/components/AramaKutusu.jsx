import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function AramaKutusu({ value, onChange }) {
  return (
    <TextField
      placeholder="İsme göre ara..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      size="small"
      sx={{
        mb: 3,
        '& .MuiOutlinedInput-root': {
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(20px)',
          color: '#3A2029',
          '& fieldset': { borderColor: 'rgba(232,110,143,0.25)' },
          '&:hover fieldset': { borderColor: 'rgba(232,110,143,0.6)' },
          '&.Mui-focused fieldset': { borderColor: '#E86E8F' },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: '#8F6E7E', fontSize: 20 }} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default AramaKutusu;