import { ReactNode, createContext, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  birthday: string;
  profession: string;
  contacts: string;
  continuousMedication: string;
  hormonalDysfunction: string;
  eatingHabits: string;
  intestine: string;
  physicalActivity: string;
  gestation: string;
  chronicHealth: string;
  hernia: string;
  hypertension: string;
  cardiac: string;
  urinary: string;
  cramps: string;
  surgery: string;
  column: string;
  competent: string;
  dynamicTonicity: string;
  tonicityRest: string;
  dome: string;
  diastasis: string;
  supraAbdominal: number;
  waist: number;
  bellyButton: number;
  infraAbdomina: number;
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
  continuousMedication: " ",
  hormonalDysfunction: " ",
  eatingHabits: "",
  intestine: "",
  physicalActivity: " ",
  gestation: " ",
  chronicHealth: "",
  hernia: "",
  hypertension: "",
  cardiac: "",
  urinary: " ",
  cramps: "",
  surgery: "",
  column: " ",
  competent: "",
  dynamicTonicity: "",
  tonicityRest: "",
  dome: "",
  diastasis: "",
  supraAbdominal: 0,
  waist: 0,
  bellyButton: 0,
  infraAbdomina: 0,
};

const StepContext = createContext<ContextType | undefined>(undefined);

export enum StepActions {
  setCurrentStep,
  setName,
  setBirthday,
  setProfession,
  setContacts,
  setContinuousMedication,
  setHormonalDysfunction,
  setEatingHabits,
  setIntestine,
  setPhysicalActivity,
  setGestation,
  setChronicHealth,
  setHernia,
  setHypertension,
  setCardiac,
  setUrinary,
  setCramps,
  setSurgery,
  setColumn,
  setCompetent,
  setDynamicTonicity,
  setTonicityRest,
  setDome,
  setDiastasis,
  setSupraAbdominal,
  setWaist,
  setBellyButton,
  setInfraAbdomina,
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
    case StepActions.setContinuousMedication:
      return { ...state, continuousMedication: action.payload };
    case StepActions.setHormonalDysfunction:
      return { ...state, hormonalDysfunction: action.payload };
    case StepActions.setEatingHabits:
      return { ...state, eatingHabits: action.payload };
    case StepActions.setIntestine:
      return { ...state, intestine: action.payload };
    case StepActions.setPhysicalActivity:
      return { ...state, physicalActivity: action.payload };
    case StepActions.setGestation:
      return { ...state, gestation: action.payload };
    case StepActions.setChronicHealth:
      return { ...state, chronicHealth: action.payload };
    case StepActions.setHernia:
      return { ...state, hernia: action.payload };
    case StepActions.setHypertension:
      return { ...state, hypertension: action.payload };
    case StepActions.setCardiac:
      return { ...state, cardiac: action.payload };
    case StepActions.setUrinary:
      return { ...state, urinary: action.payload };
    case StepActions.setCramps:
      return { ...state, cramps: action.payload };
    case StepActions.setSurgery:
      return { ...state, surgery: action.payload };
    case StepActions.setColumn:
      return { ...state, column: action.payload };
    case StepActions.setCompetent:
      return { ...state, competnt: action.payload };
    case StepActions.setDynamicTonicity:
      return { ...state, dynamicTonicity: action.payload };
    case StepActions.setTonicityRest:
      return { ...state, tonicityRest: action.payload };
    case StepActions.setDome:
      return { ...state, dome: action.payload };
    case StepActions.setDiastasis:
      return { ...state, diastasis: action.payload };
    case StepActions.setSupraAbdominal:
      return { ...state, supraAbdominal: action.payload };
    case StepActions.setWaist:
      return { ...state, waist: action.payload };
    case StepActions.setBellyButton:
      return { ...state, bellybutton: action.payload };
    case StepActions.setInfraAbdomina:
      return { ...state, infraAbdomina: action.payload };
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
