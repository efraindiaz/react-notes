import { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";
export default function Notes() {
  const { notes, setEditMode } = useContext(TaskContext);
  return (
    <div>
      <ul>
        {notes.map((note, index) => (
          <li key={`note_${index}`}>{note} - <button onClick={()=>setEditMode(true)}>edit</button></li>
        ))}
      </ul>
    </div>
  );
}
