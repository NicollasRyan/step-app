import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1``;

export const Input = styled(TextField)`
  width: 300px;
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

export const BackButton = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  padding: 20px 40px;
`;
