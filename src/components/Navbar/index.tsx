import { useEffect, useState } from "react";
import { useStep } from "../../context/StepContext";
import { Steps } from "../steps";
import { NavbarBox, Title, Paragraph } from "./styled";
import { Alert, AlertTitle } from "@mui/material";

export function Navbar() {
  const { state } = useStep();

  return (
    <NavbarBox>
      <Title>Denise Bonfim</Title>
      <Paragraph>Reabilitação Abdominal</Paragraph>
    </NavbarBox>
  );
}
