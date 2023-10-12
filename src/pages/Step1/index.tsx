import { useNavigate } from "react-router-dom";
import { Container, FormLabel, Grid, Button } from "@mui/material";

import { Title, Input, ButtonNext, Input2 } from "./styled";
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
    // if (
    //   state.name !== "" &&
    //   state.birthday !== "" &&
    //   state.profession !== "" &&
    //   state.contacts !== ""
    // ) {
    //   navigate("/step2");
    // } else {
    //   alert("Preencha todos os dados!");
    // }
    navigate("/step2");
  };

  return (
    <Container>
      <Title>Indentficação:</Title>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Input
            label="Nome"
            variant="outlined"
            value={state.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setName,
                payload: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            label="Email ou telefone"
            variant="outlined"
            value={state.contacts}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setContacts,
                payload: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            label="Profissão"
            variant="outlined"
            value={state.profession}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setProfession,
                payload: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid style={{ display: "flex", flexDirection: "column" }} item xs={7}>
          <FormLabel>Data de nacimento</FormLabel>
          <Input2
            type="date"
            variant="outlined"
            value={state.birthday}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setBirthday,
                payload: e.target.value,
              });
            }}
          />
        </Grid>
      </Grid>

      <ButtonNext onClick={handleNextStep}>Proximo</ButtonNext>
    </Container>
  );
}
