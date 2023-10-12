import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Input = styled(TextField)`
  width: 300px;
`;

export const BoxBottom = styled.div`
  margin-bottom: 20px;
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
  margin-left: 20px;

  &:hover {
    background-color: #e5e5e5;
    box-shadow: 0px 5px 10px 5px gray;
  }
`;

export const BackButton = styled(Link)`
  color: black;
  text-decoration: none;
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
