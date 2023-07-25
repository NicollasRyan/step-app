import { useNavigate } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";

import { BoxForm, Title, Input } from "./styled";
// import { DateField } from "@mui/x-date-pickers";

export function Step1() {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate("/step2");
    // console.log("SIIIU");
  };

  return (
    <Container>
      <Title>Indentficação:</Title>
      <BoxForm onSubmit={handleNextStep}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Input label="Nome" variant="standard" />
          </Grid>
          <Grid item xs={7}>
            <Input label="Data de Nacimento" variant="standard" />
          </Grid>
          <Grid item xs={7}>
            <Input label="Profissão" variant="standard" />
          </Grid>
          <Grid item xs={7}>
            <Input label="Email ou telefone" variant="standard" />
          </Grid>
        </Grid>
        <Button type="submit">Proximo</Button>
      </BoxForm>
    </Container>
  );
}
