import { useState } from "react";
import data from "../data/data.js";
import { v4 as uuidv4 } from "uuid";
import EditBtn from "./EditBtn.jsx";
import "../styles/Experience.css";

export default function Experience() {
  const [experience, setExperience] = useState(data.experience);
  const [editMode, setEditMode] = useState(false);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function saveEdit(e) {
    e.preventDefault();
    data.experience = experience;
    toggleEdit();
  }

  function cancelEdit() {
    setExperience(data.experience);
    toggleEdit();
  }

  const handleUnitChange = (id, key, newValue) => {
    const updatedExperience = experience.map((experienceUnit) => {
      if (experienceUnit.id === id) {
        return { ...experienceUnit, [key]: newValue };
      }
      return experienceUnit;
    });
    setExperience(updatedExperience);
  };

  const handleRemoveExperience = (id) => {
    const updatedExperience = experience.filter(
      (experienceUnit) => experienceUnit.id !== id
    );
    setExperience(updatedExperience);
  };

  const handleAddExperience = () => {
    const newExperienceUnit = {
      company: "Some Company",
      position: "Some Position",
      date: "Some Dates",
      responsibilities: ["Clock", "Work"],
      id: uuidv4(),
    };
    const updatedExperience = [...experience, newExperienceUnit];
    setExperience(updatedExperience);
  };

  const handleResponsibilityChange = (expId, resIndex, newValue) => {
    const updatedExperience = experience.map((experienceUnit) => {
      if (experienceUnit.id === expId) {
        const updatedResponsibilities = experienceUnit.responsibilities.map(
          (res, index) => (index === resIndex ? newValue : res)
        );
        return {
          ...experienceUnit,
          responsibilities: updatedResponsibilities,
        };
      }
      return experienceUnit;
    });
    setExperience(updatedExperience);
  };

  const handleAddResponsibility = (expId) => {
    const updatedExperience = experience.map((experienceUnit) => {
      if (experienceUnit.id === expId) {
        return {
          ...experienceUnit,
          responsibilities: [...experienceUnit.responsibilities, ""],
        };
      }
      return experienceUnit;
    });
    setExperience(updatedExperience);
  };

  const handleRemoveResponsibility = (expId, resIndex) => {
    const updatedExperience = experience.map((experienceUnit) => {
      if (experienceUnit.id === expId) {
        const updatedResponsibilities = experienceUnit.responsibilities.filter(
          (res, index) => index !== resIndex
        );
        return {
          ...experienceUnit,
          responsibilities: updatedResponsibilities,
        };
      }
      return experienceUnit;
    });
    setExperience(updatedExperience);
  };

  if (!editMode) {
    return (
      <section className="experience">
        <EditBtn editFunction={toggleEdit} />
        <ul>
          {experience.map((experienceUnit) => {
            return (
              <li key={experienceUnit.id}>
                <h2>{experienceUnit.position}</h2>
                <h4>
                  <span>{experienceUnit.company}</span>
                  <span>{experienceUnit.date}</span>
                </h4>
                <ul>
                  {experienceUnit.responsibilities.map(
                    (responsibility, index) => {
                      return <li key={index}>{responsibility}</li>;
                    }
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    return (
      <section className="experience edit-mode">
        <form onSubmit={saveEdit}>
          <button type="Submit">Save</button>
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
          <p>Edit Mode</p>

          <ul>
            {experience.map((experienceUnit) => {
              return (
                <li key={experienceUnit.id}>
                  <input
                    key={`position_${experienceUnit.id}`}
                    className="position"
                    value={experienceUnit.position}
                    onChange={(e) =>
                      handleUnitChange(
                        experienceUnit.id,
                        "position",
                        e.target.value
                      )
                    }
                  />
                  <input
                    key={`company_${experienceUnit.id}`}
                    className="company"
                    value={experienceUnit.company}
                    onChange={(e) =>
                      handleUnitChange(
                        experienceUnit.id,
                        "company",
                        e.target.value
                      )
                    }
                  />

                  {experienceUnit.responsibilities.map(
                    (responsibility, index) => {
                      return (
                        <div key={`${experienceUnit.id}_${index}`}>
                          <input
                            value={responsibility}
                            onChange={(e) => {
                              handleResponsibilityChange(
                                experienceUnit.id,
                                index,
                                e.target.value
                              );
                            }}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveResponsibility(
                                experienceUnit.id,
                                index
                              )
                            }
                          >
                            Remove Responsibility
                          </button>
                        </div>
                      );
                    }
                  )}
                  <button
                    type="button"
                    onClick={() => handleAddResponsibility(experienceUnit.id)}
                  >
                    Add Responsibility
                  </button>
                  <input
                    key={`date_${experienceUnit.id}`}
                    className="date"
                    value={experienceUnit.date}
                    onChange={(e) =>
                      handleUnitChange(
                        experienceUnit.id,
                        "date",
                        e.target.value
                      )
                    }
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveExperience(experienceUnit.id)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={() => handleAddExperience()}>
            Add experience
          </button>
        </form>
      </section>
    );
  }
}
