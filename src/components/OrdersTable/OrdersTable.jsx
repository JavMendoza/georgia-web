import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { useOrders } from '../../context/Orders.Context';

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

function OrdersTable(props) {
  const { ordersState, getAllOrders } = useOrders();

  useEffect(() => {
    if (ordersState.pendingOrders.length === 0) {
      getAllOrders();
    }
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom mt={4} mb={4}>
        Pedidos pendientes
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Codigo Matafuego</StyledTableCell>
              <StyledTableCell align="right">Tipo</StyledTableCell>
              <StyledTableCell align="right">Estado</StyledTableCell>
              <StyledTableCell align="right">Cliente</StyledTableCell>
              <StyledTableCell align="right">Repartidor</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersState.pendingOrders.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.matafuegos[0].codigo}
                </StyledTableCell>
                <StyledTableCell align="right">{row.tipo.nombre}</StyledTableCell>
                <StyledTableCell align="right">{row.estado.nombre}</StyledTableCell>
                <StyledTableCell align="right">{row.cliente.email}</StyledTableCell>
                <StyledTableCell align="right">{row.repartidor ? row.repartidor.email : 'Sin asignar'}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default OrdersTable;
