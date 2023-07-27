import { useNavigate } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";

import { BoxForm, Title, Input } from "./styled";
import { useStep, StepActions } from "../../context/StepContext";
import { ChangeEvent, useEffect } from "react";
// import { DateField } from "@mui/x-date-pickers";

export function Step1() {
  const navigate = useNavigate();
  const { state, dispatch } = useStep();

  useEffect(() => {
    dispatch({
      type: StepActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Preencha todos os dados!");
    }
  };

  return (
    <Container>
      <Title>Indentficação:</Title>
      <BoxForm onSubmit={handleNextStep}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Input
              label="Nome"
              variant="standard"
              value={state.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: StepActions.setName,
                  payload: e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <Input
              label="Data de Nacimento"
              variant="standard"
              value={state.birthday}
            />
          </Grid>
          <Grid item xs={7}>
            <Input
              label="Profissão"
              variant="standard"
              value={state.profession}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: StepActions.setProfession,
                  payload: e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <Input
              label="Email ou telefone"
              variant="standard"
              value={state.contacts}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: StepActions.setContacts,
                  payload: e.target.value,
                });
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit">Proximo</Button>
      </BoxForm>
    </Container>
  );
}
