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
      <BoxStep active={state.currentStep === 1}>
        <LinkBox to="/">
          <BoxIcon>
            <PersonIcon />
          </BoxIcon>
          <BoxTitle>
            <Title>Indetificação</Title>
          </BoxTitle>
        </LinkBox>
      </BoxStep>
      <BoxStep active={state.currentStep === 2}>
        <LinkBox to="/step2">
          <BoxIcon>
            <SettingsAccessibilityIcon />
          </BoxIcon>
          <BoxTitle>
            <Title>Informe</Title>
          </BoxTitle>
        </LinkBox>
      </BoxStep>
      <BoxStep active={state.currentStep === 3}>
        <LinkBox to="/step3">
          <BoxIcon>
            <SendIcon />
          </BoxIcon>
          <BoxTitle>
            <Title>Envio</Title>
          </BoxTitle>
        </LinkBox>
      </BoxStep>
    </ContainerStep>
  );
}
