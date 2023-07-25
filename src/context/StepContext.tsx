import { ReactNode, createContext, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  birthday: string;
  profession: string;
  contacts: string;
};

type Action = {
  type: StepActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type StepProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: "",
  birthday: "",
  profession: "",
  contacts: "",
};

const StepContext = createContext<ContextType | undefined>(undefined);

export enum StepActions {
  setCurrentStep,
  setName,
  setBirthday,
  setProfession,
  setContacts,
  //   setContinuousMedication,
  //   setHormonalDysfunction,
  //   setEatingHabits,
  //   setIntestine,
  //   setPhysicalActivity,
}
const stepReducer = (state: State, action: Action) => {
  switch (action.type) {
    case StepActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case StepActions.setName:
      return { ...state, name: action.payload };
    case StepActions.setBirthday:
      return { ...state, birthday: action.payload };
    case StepActions.setProfession:
      return { ...state, profession: action.payload };
    case StepActions.setContacts:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};

export const StepProvider = ({ children }: StepProviderProps) => {
  const [state, dispatch] = useReducer(stepReducer, initialData);
  const value = { state, dispatch };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error("useStep precisa ser usado dentro do StepProvider");
  }
  return context;
};
