import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Alert,
} from "@mui/material";

import { Title, Input, ButtonNext, BackButton, BoxBottom } from "./styled";
import { useStep, StepActions } from "../../context/StepContext";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Step3() {
  const navigate = useNavigate();
  const { state, dispatch } = useStep();

  const [validateFields, setValidateFields] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (
      state.name === "" &&
      state.birthday === "" &&
      state.profession === "" &&
      state.contacts === ""
    ) {
      navigate("/");
    }
    dispatch({
      type: StepActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleNextStep = () => {
    if (
      state.continuousMedication.length >= 3 &&
      state.hormonalDysfunction.length >= 3 &&
      state.eatingHabits !== "" &&
      state.intestine !== "" &&
      state.physicalActivity.length >= 3 &&
      state.gestation.length >= 3 &&
      state.chronicHealth !== "" &&
      state.hernia !== "" &&
      state.hypertension !== "" &&
      state.cardiac !== "" &&
      state.urinary.length >= 3 &&
      state.cramps !== "" &&
      state.surgery !== "" &&
      state.column.length >= 3 &&
      state.competent !== "" &&
      state.dynamicTonicity !== "" &&
      state.tonicityRest !== "" &&
      state.dome !== "" &&
      state.diastasis !== "" &&
      state.bellyButton >= 1 &&
      state.infraAbdomina >= 1 &&
      state.supraAbdominal >= 1 &&
      state.waist >= 1
    ) {
      const current = new Date();
      const formattedDate = current.toDateString();
      state.formattedDate = formattedDate;
      dispatch({
        type: StepActions.setCurrentStep,
        payload: 4,
      });
      setSuccess(true);
      setValidateFields(false);
    } else {
      setValidateFields(true);
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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

      {validateFields && (
        <Alert severity="error">Preencha todos os dados!</Alert>
      )}
      {success && <Alert>Pronto, suas informações foram enviadas!</Alert>}
      <BoxBottom>
        {success ? (
          <ButtonNext disabled={true}>Voltar</ButtonNext>
        ) : (
          <BackButton to="/step2">volta</BackButton>
        )}

        <ButtonNext onClick={handleNextStep} disabled={success ? true : false}>
          Enviar
        </ButtonNext>
      </BoxBottom>
    </Container>
  );
}
