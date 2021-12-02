import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormGroup, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useUsers } from "../../context/Users.Context";

function NewRepartidorForm(props) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEMail] = useState("");
  const [cuit, setCuit] = useState("");
  const navigate = useNavigate();
  const { addRepartidor } = useUsers();

  function onSubmit(e) {
    e.preventDefault();

    if (nombre !== '' && apellido !== '' && email !== '' && cuit !== '') {
      addRepartidor({
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
        });
    }
  }

  return (
    <Container maxWidth="sm">
      <Box>
        <FormGroup>
          <TextField
            required
            label="Nombre"
            variant="outlined"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            required
            label="Apellido"
            variant="outlined"
            value={apellido}
            onChange={(e) => {
              setApellido(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            required
            label="E-Mail"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEMail(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            required
            type="number"
            label="CUIT"
            variant="outlined"
            value={cuit}
            onChange={(e) => {
              setCuit(e.target.value);
            }}
          />
        </FormGroup>
        <Button variant="outlined" onClick={(e) => onSubmit(e)}>
          Registrar
        </Button>
      </Box>
    </Container>
  );
}

export default NewRepartidorForm;
