import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

const App = () => {
  const [sections, setSections] = useState([
    "GeneralInfo",
    "Skills",
    "Education",
    "Experience",
  ]);

  const componentMap = {
    GeneralInfo: GeneralInfo,
    Skills: Skills,
    Education: Education,
    Experience: Experience,
  };

  const upButton = (index, event) => {
    let updatedSections = [...sections];
    const temp = updatedSections[index];
    updatedSections[index] = updatedSections[index - 1];
    updatedSections[index - 1] = temp;
    setSections(updatedSections);
    event.target.blur();
  };

  const downButton = (index) => {
    let updatedSections = [...sections];
    const temp = updatedSections[index];
    updatedSections[index] = updatedSections[index + 1];
    updatedSections[index + 1] = temp;
    setSections(updatedSections);
    event.target.blur();
  };

  return (
    <div>
      {sections.map((section, index) => {
        const Component = componentMap[section];
        return (
          <div className="component" key={index}>
            {index > 1 ? (
              <div className="move-up-btn-container">
                <button
                  className="move-btn move-up-btn"
                  onClick={(event) => upButton(index, event)}
                >
                  ↥
                </button>
              </div>
            ) : null}
            {Component ? <Component /> : null}

            {index > 0 && index < sections.length - 1 ? (
              <div className="move-down-btn-container">
                <button
                  className="move-btn move-down-btn"
                  onClick={(event) => downButton(index, event)}
                >
                  ↧
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default App;
