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
        <div className="separator">
          <h3>Education</h3>
        </div>
        <ul>
          {education.map((educationalUnit) => {
            return (
              <li key={educationalUnit.id}>
                <h2>{educationalUnit.title}</h2>
                <h4>
                  <span>{educationalUnit.school}</span>
                  <span className="date-info">{educationalUnit.date}</span>
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
        <div className="separator">
          <h3>Education</h3>
        </div>
        <form onSubmit={saveEdit}>
          <ul>
            {education.map((educationalUnit) => {
              return (
                <li key={educationalUnit.id}>
                  <label htmlFor={`title_${educationalUnit.id}`}>Title</label>
                  <input
                    id={`title_${educationalUnit.id}`}
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

                  <label htmlFor={`school_${educationalUnit.id}`}>School</label>
                  <input
                    id={`school_${educationalUnit.id}`}
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

                  <label htmlFor={`date_${educationalUnit.id}`}>
                    Date Range
                  </label>
                  <input
                    id={`date_${educationalUnit.id}`}
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
                    className="remove-btn"
                    type="button"
                    onClick={() => handleRemoveEducation(educationalUnit.id)}
                  >
                    Remove Education
                  </button>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={handleAddEducation}>
            Add education
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
