import editIcon from "../assets/file-edit.svg";
import "../styles/EditBtn.css";

export default function EditBtn({ editFunction }) {
  return (
    <button onClick={editFunction} className="edit-btn">
      <img src={editIcon} alt="Edit" />
    </button>
  );
}
