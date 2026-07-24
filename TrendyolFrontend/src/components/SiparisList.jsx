import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function SiparisList({ siparisler, onEdit, onDelete }) {
  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ '& th': { fontWeight: 600, backgroundColor: 'background.default' } }}>
            <TableCell>Id</TableCell>
            <TableCell>İsim</TableCell>
            <TableCell>Sipariş</TableCell>
            <TableCell align="right">İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {siparisler.map((s) => (
            <TableRow key={s.id} hover>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.isim}</TableCell>
              <TableCell>{s.siparis}</TableCell>
              <TableCell align="right">
                <IconButton size="small" onClick={() => onEdit(s)} color="primary">
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => onDelete(s.id)} color="error">
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