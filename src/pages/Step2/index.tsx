import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";

import { Title, Input } from "./styled";
import { useStep, StepActions } from "../../context/StepContext";
import { ChangeEvent, useEffect, useState } from "react";
// import { DateField } from "@mui/x-date-pickers";

export function Step2() {
  const [showInput, setShowInput] = useState(false);

  const navigate = useNavigate();
  const { state, dispatch } = useStep();

  useEffect(() => {
    dispatch({
      type: StepActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    if (
      state.continuousMedication !== ""
      // state.birthday !== "" &&
      // state.profession !== "" &&
      // state.contacts !== ""
    ) {
      navigate("/step3");
    } else {
      alert("Preencha todos os dados!");
    }
  };

  return (
    <Container>
      <Title>Indentficação:</Title>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <RadioGroup
            value={state.continuousMedication}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: StepActions.setContinuousMedication,
                payload: e.target.value,
              });
              setShowInput(e.target.value === "");
            }}
          >
            <FormControlLabel label="Sim" control={<Radio value="" />} />
            <FormControlLabel label="Não" control={<Radio value="não" />} />
          </RadioGroup>
          {showInput && (
            <Input
              label="Qual?"
              variant="standard"
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
      </Grid>
      <Button onClick={handleNextStep}>Proximo</Button>
    </Container>
  );
}
