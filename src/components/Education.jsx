import { useState } from "react";
import data from "../data/data.js";
import EditBtn from "./EditBtn.jsx";
import { v4 as uuidv4 } from "uuid";
import "../styles/Education.css";

export default function Education() {
  const [education, setEducation] = useState(data.education);
  const [editMode, setEditMode] = useState(false);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function saveEdit(e) {
    e.preventDefault();
    data.education = education;
    toggleEdit();
  }

  function cancelEdit() {
    setEducation(data.education);
    toggleEdit();
  }

  if (!editMode) {
    return (
      <section className="education">
        <EditBtn editFunction={toggleEdit} />
        <ul>
          {education.map((educationalUnit) => {
            return (
              <li key={educationalUnit.id}>
                <h2>{educationalUnit.title}</h2>
                <h4>
                  <span>{educationalUnit.school}</span>
                  <span>{educationalUnit.date}</span>
                </h4>
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    const handleUnitChange = (id, key, newValue) => {
      const updatedEducation = education.map((educationalUnit) => {
        if (educationalUnit.id === id) {
          return { ...educationalUnit, [key]: newValue };
        }
        return educationalUnit;
      });
      setEducation(updatedEducation);
    };

    const handleRemoveEducation = (id) => {
      const updatedEducation = education.filter(
        (educationalUnit) => educationalUnit.id !== id
      );
      setEducation(updatedEducation);
    };

    const handleAddEducation = () => {
      const newEducationalUnit = {
        school: "Some University",
        title: "Some Title",
        date: "Some Dates",
        id: uuidv4(),
      };
      const updatedEducation = [...education, newEducationalUnit];
      setEducation(updatedEducation);
    };

    return (
      <section className="education edit-mode">
        <form onSubmit={saveEdit}>
          <button type="Submit">Save</button>
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
          <p>Edit Mode</p>

          <ul>
            {education.map((educationalUnit) => {
              return (
                <li key={educationalUnit.id}>
                  <input
                    key={`title_${educationalUnit.id}`}
                    className="title"
                    value={educationalUnit.title}
                    onChange={(e) =>
                      handleUnitChange(
                        educationalUnit.id,
                        "title",
                        e.target.value
                      )
                    }
                  />
                  <input
                    key={`school_${educationalUnit.id}`}
                    className="school"
                    value={educationalUnit.school}
                    onChange={(e) =>
                      handleUnitChange(
                        educationalUnit.id,
                        "school",
                        e.target.value
                      )
                    }
                  />
                  <input
                    key={`date_${educationalUnit.id}`}
                    className="date"
                    value={educationalUnit.date}
                    onChange={(e) =>
                      handleUnitChange(
                        educationalUnit.id,
                        "date",
                        e.target.value
                      )
                    }
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(educationalUnit.id)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={() => handleAddEducation()}>
            Add education
          </button>
        </form>
      </section>
    );
  }
}
