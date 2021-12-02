import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormGroup, Container, Box } from "@mui/material";

import { useAuth } from "../context/Auth.Context";

function Login() {
  const { logIn } = useAuth();
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    logIn(email, password);
  }

  return (
    <Container maxWidth="sm" className="container-login">
      <Box className="loginBox">
        <FormGroup>
          <TextField
            label="E-Mail"
            value={email}
            onChange={(e) => {
              setEMail(e.target.value);
            }}
            className="fieldLogin"
          />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="fieldLogin"
          />
        </FormGroup>

        <Button variant="outlined" onClick={(e) => onSubmit(e)}>
          Acceder
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
