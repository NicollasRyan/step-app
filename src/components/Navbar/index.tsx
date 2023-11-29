import { useEffect, useState } from "react";
import { useStep } from "../../context/StepContext";
import { Steps } from "../steps";
import { NavbarBox, Title, Paragraph } from "./styled";
import { Alert, AlertTitle } from "@mui/material";

export function Navbar() {
  const { state } = useStep();

  const [success, setSuccess] = useState<boolean>();

  useEffect(() => {
    const checkSuccess = () => {
      setSuccess(false);
      if (state.currentStep > 3) {
        setSuccess(true);
      }
    };

    checkSuccess();
  }, [state]);

  return (
    <NavbarBox>
      <Title>Denise Bonfim</Title>
      <Paragraph>Reabilitação Abdominal</Paragraph>
      {success ? (
        <Alert severity="success">
          <AlertTitle>Concluido</AlertTitle>
          suas informações foram enviadas!
        </Alert>
      ) : (
        <Steps />
      )}
    </NavbarBox>
  );
}
