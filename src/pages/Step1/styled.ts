import styled from "styled-components";
import { Button, Container, Grid, TextField } from "@mui/material";

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const GridBox = styled(Grid)`
  width: 500px;
`;

export const Input = styled(TextField)`
  width: 100%;
  min-width: 100px;
  max-width: 560px;
`;

export const Input2 = styled(TextField)`
  width: 100%;
  min-width: 100px;
  max-width: 560px;
`;

export const ButtonNext = styled.button`
  margin-top: 15px;
  font-size: 20px;
  padding: 15px;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0px 3px 7px 1.5px gray;
  transition: 1s;

  &:hover {
    background-color: #e5e5e5;
    box-shadow: 0px 5px 10px 5px gray;
  }
`;
