import styled from "styled-components";
import { Button, Grid, TextField } from "@mui/material";

export const Title = styled.h1``;

export const GridBox = styled(Grid)`
  width: 500px;
`;

export const Input = styled(TextField)`
  width: 100%;
  min-width: 100px;
`;

export const ButtonNext = styled.button`
  margin-top: 15px;
  font-size: 20px;
  padding: 15px;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  transition: 1s;

  &:hover {
    background-color: #e5e5e5;
  }
`;
