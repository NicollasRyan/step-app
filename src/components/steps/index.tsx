import { useStep } from "../../context/StepContext";
import PersonIcon from "@mui/icons-material/Person";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import SendIcon from "@mui/icons-material/Send";
import {
  BoxIcon,
  BoxTitle,
  Title,
  ContainerStep,
  LinkBox,
  BoxStep,
} from "./styled";

export function Steps() {
  const { state } = useStep();

  return (
    <ContainerStep>
      <LinkBox to="/">
        <BoxStep active={state.currentStep === 1}>
          <BoxIcon>
            <PersonIcon />
          </BoxIcon>
          <BoxTitle>
            <Title>Indetificação</Title>
          </BoxTitle>
        </BoxStep>
      </LinkBox>
      <LinkBox to="/step2">
        <BoxStep active={state.currentStep === 2}>
          <BoxIcon>
            <SettingsAccessibilityIcon />
          </BoxIcon>
          <BoxTitle>
            <Title>Informe</Title>
          </BoxTitle>
        </BoxStep>
      </LinkBox>
      <LinkBox to="/step3">
        <BoxStep active={state.currentStep === 3}>
          <BoxIcon>
            <SendIcon />
          </BoxIcon>
          <BoxTitle>
            <Title>Envio</Title>
          </BoxTitle>
        </BoxStep>
      </LinkBox>
    </ContainerStep>
  );
}
