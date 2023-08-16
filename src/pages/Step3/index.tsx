import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";

import { Title, Input, ButtonNext } from "./styled";
import { useStep, StepActions } from "../../context/StepContext";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
// import { DateField } from "@mui/x-date-pickers";

export function Step3() {
  const navigate = useNavigate();
  const { state, dispatch } = useStep();

  useEffect(() => {
    dispatch({
      type: StepActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleNextStep = () => {
    if (
      state.competent !== "" &&
      state.dynamicTonicity !== "" &&
      state.tonicityRest !== "" &&
      state.dome !== "" &&
      state.diastasis !== ""
    ) {
      const current = new Date();
      const formattedDate = current.toDateString();
      state.formattedDate = formattedDate;

      console.log(state);
    } else {
      alert("Preencha todos os dados!");
    }
  };

  return (
    <Container>
      <Title>Abdômen:</Title>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <FormLabel>Avl.competência abdominal</FormLabel>
          <RadioGroup
            row
            value={state.competent}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setCompetent,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel
              label="Muito pouco"
              control={<Radio value="muito pouco" />}
            />
            <FormControlLabel label="Algum" control={<Radio value="algum" />} />
            <FormControlLabel
              label="Bastante"
              control={<Radio value="bastante" />}
            />
            <FormControlLabel label="Muito" control={<Radio value="muito" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={7}>
          <FormLabel>Avl tonicidade abdominal(dinâmica)</FormLabel>
          <RadioGroup
            row
            value={state.dynamicTonicity}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setDynamicTonicity,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel
              label="Muito pouco"
              control={<Radio value="muito pouco" />}
            />
            <FormControlLabel label="Algum" control={<Radio value="algum" />} />
            <FormControlLabel
              label="Bastante"
              control={<Radio value="bastante" />}
            />
            <FormControlLabel label="Muito" control={<Radio value="muito" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={7}>
          <FormLabel>Avl da tonicidade(repouso)</FormLabel>
          <RadioGroup
            row
            value={state.tonicityRest}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setTonicityRest,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel
              label="Muito pouco"
              control={<Radio value="muito pouco" />}
            />
            <FormControlLabel label="Algum" control={<Radio value="algum" />} />
            <FormControlLabel
              label="Bastante"
              control={<Radio value="bastante" />}
            />
            <FormControlLabel label="Muito" control={<Radio value="muito" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={7}>
          <FormLabel>Avaliação da cúpula diafragmática</FormLabel>
          <RadioGroup
            row
            value={state.dome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setDome,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel
              label="Hipotônico"
              control={<Radio value="hipotônico" />}
            />
            <FormControlLabel
              label="Hipertônico"
              control={<Radio value="hipertônico" />}
            />
            <FormControlLabel
              label="Normotônico"
              control={<Radio value="normotônico" />}
            />
            <FormControlLabel label="Muito" control={<Radio value="muito" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={7}>
          <FormLabel>Diástase</FormLabel>
          <RadioGroup
            row
            value={state.diastasis}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setDiastasis,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel label="Sim." control={<Radio value="sim" />} />
            <FormControlLabel label="Não." control={<Radio value="nao" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={7}>
          <Input
            label="Supra abdominal"
            variant="standard"
            value={state.supraAbdominal}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setSupraAbdominal,
                payload: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Input
            label="Cintura"
            variant="standard"
            value={state.waist}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setWaist,
                payload: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Input
            label="Umbigo"
            variant="standard"
            value={state.bellyButton}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setBellyButton,
                payload: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Input
            label="Infra abdominal"
            variant="standard"
            value={state.infraAbdomina}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setInfraAbdomina,
                payload: e.target.value,
              });
            }}
          />
        </Grid>
      </Grid>
      <ButtonNext onClick={handleNextStep}>Enviar</ButtonNext>
      <Link to="/step2">volta</Link>
    </Container>
  );
}
