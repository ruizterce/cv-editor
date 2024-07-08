import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import "./styles/App.css";

function App() {
  return (
    <>
      <GeneralInfo />
      <Education />
    </>
  );
}

export default App;
