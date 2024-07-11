import { useState } from "react";
import data from "../data/data.js";
import EditBtn from "./EditBtn.jsx";
import { v4 as uuidv4 } from "uuid";
import "../styles/Skills.css";

export default function Skills() {
  const [skills, setSkills] = useState(data.skills);
  const [editMode, setEditMode] = useState(false);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function saveEdit(e) {
    e.preventDefault();
    data.skills = skills;
    toggleEdit();
  }

  function cancelEdit() {
    setSkills(data.skills);
    toggleEdit();
  }

  if (!editMode) {
    return (
      <section className="skills">
        <EditBtn editFunction={toggleEdit} />
        <div className="separator">
          <h3>Skills</h3>
        </div>
        <ul>
          {skills.map((skill) => {
            const fillPercentage = skill.grade * 10;
            return (
              <li key={skill.id}>
                <h2>{skill.title}</h2>
                <div className="bar">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${fillPercentage}%`,
                    }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    const handleUnitChange = (id, key, newValue) => {
      const updatedSkills = skills.map((skill) => {
        if (skill.id === id) {
          return { ...skill, [key]: newValue };
        }
        return skill;
      });
      setSkills(updatedSkills);
    };

    const handleRemoveSkill = (id) => {
      const updatedSkills = skills.filter((skill) => skill.id !== id);
      setSkills(updatedSkills);
    };

    const handleAddSkill = () => {
      const newSkill = {
        title: "Product Management",
        grade: 8,
        id: uuidv4(),
      };
      const updatedSkills = [...skills, newSkill];
      setSkills(updatedSkills);
    };

    return (
      <section className="skills edit-mode">
        <div className="separator">
          <h3>Skills</h3>
        </div>
        <form onSubmit={saveEdit}>
          <ul>
            {skills.map((skill) => {
              return (
                <li key={skill.id}>
                  <label htmlFor={`title_${skill.id}`}>Title</label>
                  <input
                    id={`title_${skill.id}`}
                    className="title"
                    value={skill.title}
                    onChange={(e) =>
                      handleUnitChange(skill.id, "title", e.target.value)
                    }
                  />

                  <label htmlFor={`grade_${skill.id}`}>Grade (0-10)</label>
                  <input
                    id={`grade_${skill.id}`}
                    className="grade"
                    value={skill.grade}
                    onChange={(e) =>
                      handleUnitChange(skill.id, "grade", e.target.value)
                    }
                  />

                  <button
                    className="remove-btn"
                    type="button"
                    onClick={() => handleRemoveSkill(skill.id)}
                  >
                    Remove Skill
                  </button>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={handleAddSkill}>
            Add Skill
          </button>
          <button type="submit">Save</button>
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        </form>
      </section>
    );
  }
}
