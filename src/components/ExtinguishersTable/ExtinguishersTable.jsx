import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { useExtinguishers } from '../../context/Extinguishers.Context';
import { format_date } from '../../utils/format_date';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function ExtinguishersTable(props) {
  const { extinguishersState, getAllExtinguishers } = useExtinguishers();

  useEffect(() => {
    if (extinguishersState.extinguishers.length === 0) {
      getAllExtinguishers();
    }
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom mt={4} mb={4}>
        Lista de matafuegos
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Codigo</StyledTableCell>
              <StyledTableCell align="right">Fecha Adquisicion</StyledTableCell>
              <StyledTableCell align="right">Fecha para Mantenimiento</StyledTableCell>
              <StyledTableCell align="right">Fecha Caducidad</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {extinguishersState.extinguishers.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.codigo}
                </StyledTableCell>
                <StyledTableCell align="right">{format_date(row.fecha_adquisicion)}</StyledTableCell>
                <StyledTableCell align="right">{format_date(row.fecha_vencimiento_mantenimiento)}</StyledTableCell>
                <StyledTableCell align="right">{format_date(row.fecha_caducidad_total)}</StyledTableCell>
                <StyledTableCell align="right">
                  <Link className="makepedido-link" to={`/nuevo-pedido/${row._id}`}>Realizar Pedido &gt;</Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default ExtinguishersTable;
