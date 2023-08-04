import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import { Step1 } from "./pages/Step1";
import { StepProvider } from "./context/StepContext";
import { Step2 } from "./pages/Step2";
import { Step3 } from "./pages/Step3";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StepProvider>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
          </Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </StepProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
