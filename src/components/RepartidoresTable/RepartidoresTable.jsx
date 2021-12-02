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

import { useUsers } from '../../context/Users.Context';

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

function RepartidoresTable(props) {
  const { usersState, getAllUsers } = useUsers();

  useEffect(() => {
    console.log(usersState);
    if (usersState.repartidores.length === 0) {
      getAllUsers();
    }
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom mt={4} mb={4}>
        Usuarios Repartidores
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">Apellido</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">CUIT</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersState.repartidores.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.nombre}
                </StyledTableCell>
                <StyledTableCell align="right">{row.apellido}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.cuit}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default RepartidoresTable;
