import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LinkBox = styled(Link)`
  text-decoration: none;
  color: gray;
`;

export const ContainerStep = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 25px;
  background-color: #d1d1d1;

  /* background-color: black; */

  /* ::after {
    content: "";
    width: 50px;
    border-bottom: 1px solid #ccc;
    position: absolute;
    top: 25px; 
  }*/
`;

export const BoxStep = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => (props.active ? "#02E385" : "#FFF")};
  border-radius: 100px;
  border: gray solid 1px;
  width: 120px;
  padding: 15px;
`;

export const BoxIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 5px;
`;

export const BoxTitle = styled.div``;

export const Title = styled.div``;
