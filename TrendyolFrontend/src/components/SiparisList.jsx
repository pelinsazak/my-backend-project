import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, TableSortLabel,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function SiparisList({ siparisler, onEdit, onDelete, sirala, yon, onSort }) {
  return (
    <TableContainer component={Paper} elevation={0} sx={{
      background: 'rgba(255,255,255,0.55)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(232,110,143,0.25)',
      boxShadow: '0 8px 32px rgba(232,110,143,0.18)',
    }}>
      <Table>
        <TableHead>
          <TableRow sx={{
            '& th': {
              fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.06em',
              textTransform: 'uppercase', color: 'text.secondary',
              borderBottom: '1px solid rgba(232,110,143,0.25)',
            },
          }}>
            <TableCell>
              <TableSortLabel active={sirala === 'id'} direction={sirala === 'id' ? yon.toLowerCase() : 'asc'} onClick={() => onSort('id')}>
                Id
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel active={sirala === 'musteri_adi'} direction={sirala === 'musteri_adi' ? yon.toLowerCase() : 'asc'} onClick={() => onSort('musteri_adi')}>
                İsim
              </TableSortLabel>
            </TableCell>
            <TableCell>Sipariş</TableCell>
            <TableCell>
              <TableSortLabel active={sirala === 'tarih'} direction={sirala === 'tarih' ? yon.toLowerCase() : 'asc'} onClick={() => onSort('tarih')}>
                Tarih
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {siparisler.map((s) => (
            <TableRow key={s.id} sx={{
              transition: 'background 0.2s ease',
              '& td': { borderBottom: '1px solid rgba(232,110,143,0.15)' },
              '&:hover': { background: 'rgba(232,110,143,0.12)' },
            }}>
              <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'text.secondary' }}>{s.id}</TableCell>
              <TableCell sx={{ color: 'text.primary' }}>{s.isim}</TableCell>
              <TableCell sx={{ color: 'text.primary' }}>{s.siparis}</TableCell>
              <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'text.secondary' }}>{s.tarih}</TableCell>
              <TableCell align="right">
                <IconButton size="small" onClick={() => onEdit(s)} sx={{
                  color: '#8B6BE0', transition: 'transform 0.2s ease',
                  '&:hover': { transform: 'scale(1.15)' },
                }}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => onDelete(s.id)} sx={{
                  color: '#C93752', transition: 'transform 0.2s ease',
                  '&:hover': { transform: 'scale(1.15)' },
                }}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SiparisList;