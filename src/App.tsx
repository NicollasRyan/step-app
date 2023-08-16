import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Steps } from "./components/steps";

function App() {
  return (
    <>
      <Navbar />
      <Steps />
      <Outlet />
    </>
  );
}

export default App;
