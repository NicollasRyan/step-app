import { useNavigate } from "react-router-dom";
import { Container, FormLabel, Grid, Button } from "@mui/material";

import { Title, Input, ButtonNext, Input2 } from "./styled";
import { useStep, StepActions } from "../../context/StepContext";
import { ChangeEvent, useEffect, useState } from "react";
// import { DateField } from "@mui/x-date-pickers";

type State = {
  name: string;
  birthday: string;
  profession: string;
  contacts: string;
};

export function Step1() {
  const navigate = useNavigate();
  const { state, dispatch } = useStep();

  const [validateFields, setValidateFields] = useState(false);

  useEffect(() => {
    dispatch({
      type: StepActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    setValidateFields(true);

    if (
      state.name !== "" &&
      state.birthday !== "" &&
      state.profession !== "" &&
      state.contacts !== ""
    ) {
      navigate("/step2");
    }
  };

  const isEmpty = (field: keyof State) => {
    return validateFields && state[field].trim() === "";
  };

  return (
    <Container>
      <Title>Indentficação:</Title>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Input
            error={isEmpty("name")}
            label="Nome"
            variant="outlined"
            autoComplete="off"
            helperText={isEmpty("name") ? "Seu nome é obrigatório." : ""}
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
            error={isEmpty("contacts")}
            label="Email ou telefone"
            variant="outlined"
            autoComplete="off"
            helperText={isEmpty("contacts") ? "email obrigadorio " : ""}
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
            error={isEmpty("profession")}
            label="Profissão"
            variant="outlined"
            autoComplete="off"
            helperText={
              isEmpty("profession") ? "Qual é sua profissão mesmo?" : ""
            }
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
            error={isEmpty("birthday")}
            type="date"
            variant="outlined"
            helperText={
              isEmpty("birthday")
                ? "Coloque sua data de nacimento por favor"
                : ""
            }
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
