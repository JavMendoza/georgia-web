import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormGroup, Container, Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { useNavigate } from "react-router-dom";

import extinguishersAPI from '../../api/extinguishers.api';
import ordersAPI from '../../api/orders.api';
import usersAPI from '../../api/users.api';


import { useExtinguishers } from "../../context/Extinguishers.Context";

function NewOrderForm(props) {
  const { extinguisherId } = useParams();
  // const { extinguishersState } = useExtinguishers();
  const [extinghuisher, setExtinguisher] = useState({});
  const [orderTypes, setOrderTypes] = useState([]);
  const [repartidores, setRepartidores] = useState([]);
  const [tipo, setTipo] = useState("");
  const [repartidor, setRepartidor] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    /* addRepartidor({
      nombre,
      apellido,
      email,
      cuit,
    })
      .then(function (data) {
        navigate("/usuarios");
      })
      .catch(function (err) {
        console.error(err);
      }); */
  }

  useEffect(() => {
    if (extinguisherId) {
      extinguishersAPI.getExtinguisherById(extinguisherId)
      .then((data) => {
        setExtinguisher(data);
      })
    }
  }, [extinguisherId]);

  useEffect(() => {
    ordersAPI.getAllOrderTypes()
      .then((data) => {
        setOrderTypes(data);
      });
    usersAPI.getAllRepartidores()
      .then((data) => {
        setRepartidores(data);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom mt={4} mb={4}>
        Nuevo Pedido
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Datos del dueño
              </Typography>
              <Typography variant="body2" gutterBottom>
                Nombre: {extinghuisher.usuario?.nombre}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Apellido: {extinghuisher.usuario?.apellido}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Email: {extinghuisher.usuario?.email}
              </Typography>
              <Typography variant="body2">
                CUIT: {extinghuisher.usuario?.cuit}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Matafuego {extinghuisher.codigo}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo de Pedido</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      value={tipo}
                      label="Tipo de pedido"
                      onChange={(e) => {
                        setTipo(e.target.value);
                      }}
                    >
                      {orderTypes && orderTypes.map((type, index) => (
                        <MenuItem key={index} value={type._id}>{type.nombre}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label2">Repartidor</InputLabel>
                    <Select
                      labelId="demo-simple-select-label2"
                      value={repartidor}
                      label="Repartidor"
                      onChange={(e) => {
                        setRepartidor(e.target.value);
                      }}
                    >
                      {repartidores && repartidores.map((type, index) => (
                        <MenuItem key={index} value={type._id}>{type.email}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" onClick={(e) => onSubmit(e)}>
                    Crear Pedido
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NewOrderForm;
