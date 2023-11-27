import { Link, useNavigate } from "react-router-dom";
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

import { Title, Input, BackButton, ButtonNext, BoxBottom } from "./styled";
import { useStep, StepActions } from "../../context/StepContext";
import { ChangeEvent, useEffect, useState } from "react";
// import { DateField } from "@mui/x-date-pickers";

export function Step2() {
  const [inputContinuousMedication, setInputContinuousMedication] =
    useState(false);
  const [inputHormonalDysfunction, setInputHormonalDysfunction] =
    useState(false);
  const [inputPhysicalActivity, setInputPhysicalActivity] = useState(false);
  useState(false);
  const [inputGestation, setInputGestation] = useState(false);
  const [inputUrinary, setInputUrinary] = useState(false);
  useState(false);
  const [inputColumn, setInputColumn] = useState(false);
  useState(false);

  const navigate = useNavigate();
  const { state, dispatch } = useStep();

  const [validateFields, setValidateFields] = useState(false);

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
      payload: 2,
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
      state.column.length >= 3
    ) {
      navigate("/step3");
    } else {
      setValidateFields(true);
    }
  };

  return (
    <Container>
      <Title>Como anda seu fisico? :</Title>
      <Grid container spacing={4}>
        <Grid item xs={5}>
          <FormLabel>Uso de algum medicamento contínuo?</FormLabel>
          <RadioGroup
            row
            value={state.continuousMedication}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setContinuousMedication,
                payload: e.target.value,
              });
              setInputContinuousMedication(e.target.value === "");
            }}
          >
            <FormControlLabel label="Sim" control={<Radio value="" />} />
            <FormControlLabel label="Não" control={<Radio value="nao" />} />
          </RadioGroup>
          {inputContinuousMedication && (
            <Input
              label="Qual?"
              variant="outlined"
              autoComplete="off"
              value={state.continuousMedication}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: StepActions.setContinuousMedication,
                  payload: e.target.value,
                });
              }}
            />
          )}
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Possui alguma disfunção hormonal diagnosticada?</FormLabel>
          <RadioGroup
            row
            value={state.hormonalDysfunction}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setHormonalDysfunction,
                payload: e.target.value,
              });
              setInputHormonalDysfunction(e.target.value === "");
            }}
          >
            <FormControlLabel label="Sim" control={<Radio value="" />} />
            <FormControlLabel label="Não" control={<Radio value="nao" />} />
          </RadioGroup>
          {inputHormonalDysfunction && (
            <Input
              label="Qual?"
              variant="outlined"
              autoComplete="off"
              value={state.hormonalDysfunction}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: StepActions.setHormonalDysfunction,
                  payload: e.target.value,
                });
              }}
            />
          )}
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Funcionamento do intestino:</FormLabel>
          <RadioGroup
            row
            value={state.intestine}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setIntestine,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel
              label="Normal."
              control={<Radio value="normal" />}
            />
            <FormControlLabel
              label="Constipação."
              control={<Radio value="constipação" />}
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Atividade física?</FormLabel>
          <RadioGroup
            row
            value={state.physicalActivity}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setPhysicalActivity,
                payload: e.target.value,
              });
              setInputPhysicalActivity(e.target.value === "");
            }}
          >
            <FormControlLabel label="Sim" control={<Radio value="" />} />
            <FormControlLabel label="Não" control={<Radio value="nao" />} />
          </RadioGroup>
          {inputPhysicalActivity && (
            <Input
              label="Qual?"
              variant="outlined"
              autoComplete="off"
              value={state.physicalActivity}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: StepActions.setPhysicalActivity,
                  payload: e.target.value,
                });
              }}
            />
          )}
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Alguma gestação?</FormLabel>
          <RadioGroup
            row
            value={state.gestation}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setGestation,
                payload: e.target.value,
              });
              setInputGestation(e.target.value === "");
            }}
          >
            <FormControlLabel label="Sim" control={<Radio value="" />} />
            <FormControlLabel label="Não" control={<Radio value="nao" />} />
          </RadioGroup>
          {inputGestation && (
            <Input
              label="Tempo da útima?"
              variant="outlined"
              autoComplete="off"
              value={state.gestation}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: StepActions.setGestation,
                  payload: e.target.value,
                });
              }}
            />
          )}
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Algum problema de saúde crônico?</FormLabel>
          <RadioGroup
            row
            value={state.chronicHealth}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setChronicHealth,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel label="Sim." control={<Radio value="sim" />} />
            <FormControlLabel label="Não." control={<Radio value="nao" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Já teve alguma hérnia abdominal e corrigiu?</FormLabel>
          <RadioGroup
            row
            value={state.hernia}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setHernia,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel label="Sim." control={<Radio value="sim" />} />
            <FormControlLabel label="Não." control={<Radio value="nao" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Hipertensão?</FormLabel>
          <RadioGroup
            row
            value={state.hypertension}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setHypertension,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel label="Sim." control={<Radio value="sim" />} />
            <FormControlLabel label="Não." control={<Radio value="nao" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Cardiaco?</FormLabel>
          <RadioGroup
            row
            value={state.cardiac}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setCardiac,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel label="Sim." control={<Radio value="sim" />} />
            <FormControlLabel label="Não." control={<Radio value="nao" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Alguma queixa de perca urinária:</FormLabel>
          <RadioGroup
            row
            value={state.urinary}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setUrinary,
                payload: e.target.value,
              });
              setInputUrinary(e.target.value === "");
            }}
          >
            <FormControlLabel label="Sim" control={<Radio value="" />} />
            <FormControlLabel label="Não" control={<Radio value="nao" />} />
          </RadioGroup>
          {inputUrinary && (
            <Input
              label="Em que momento?"
              variant="outlined"
              autoComplete="off"
              value={state.urinary}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: StepActions.setUrinary,
                  payload: e.target.value,
                });
              }}
            />
          )}
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Cólicas menstruais?</FormLabel>
          <RadioGroup
            row
            value={state.cramps}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setCramps,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel label="Sim." control={<Radio value="sim" />} />
            <FormControlLabel label="Não." control={<Radio value="nao" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Alguma cirurgia recente?</FormLabel>
          <RadioGroup
            row
            value={state.surgery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setSurgery,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel label="Sim." control={<Radio value="sim" />} />
            <FormControlLabel label="Não." control={<Radio value="nao" />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Dores na coluna?</FormLabel>
          <RadioGroup
            row
            value={state.column}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setColumn,
                payload: e.target.value,
              });
              setInputColumn(e.target.value === "");
            }}
          >
            <FormControlLabel label="Sim" control={<Radio value="" />} />
            <FormControlLabel label="Não" control={<Radio value="nao" />} />
          </RadioGroup>
          {inputColumn && (
            <Input
              label="EVA:"
              variant="outlined"
              autoComplete="off"
              value={state.column}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                  type: StepActions.setColumn,
                  payload: e.target.value,
                });
              }}
            />
          )}
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Hábitos alimentares:</FormLabel>
          <RadioGroup
            row
            value={state.eatingHabits}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setEatingHabits,
                payload: e.target.value,
              });
            }}
          >
            <FormControlLabel
              label="Livre."
              control={<Radio value="livre" />}
            />
            <FormControlLabel
              label="Balanceada."
              control={<Radio value="balanceada" />}
            />
            <FormControlLabel
              label="Acompanhada de um nutricionista"
              control={<Radio value="acompanhada de um nutricionista" />}
            />
          </RadioGroup>
        </Grid>
      </Grid>
      {validateFields && (
        <Alert severity="error">Preencha todos os dados!</Alert>
      )}
      <BoxBottom>
        <BackButton to="/">volta</BackButton>
        <ButtonNext onClick={handleNextStep}>Proximo</ButtonNext>
      </BoxBottom>
    </Container>
  );
}
