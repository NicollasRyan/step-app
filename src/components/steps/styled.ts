import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ContainerStep = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  margin-bottom: 25px;
`;

export const LinkBox = styled(Link)`
  text-decoration: none;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BoxStep = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#89F7FF" : "#FFF")};
  border-radius: 10px;
  border: gray solid 1px;
  width: 80px;
  height: 80px;
  padding: 15px;
`;

export const BoxIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 5px;
`;

export const BoxTitle = styled.div``;

export const Title = styled.div``;
