import { useState, createContext } from "react";
export const TaskContext = createContext(null);
export default function TaskProvider({ children }) {
  const [notes, setNotes] = useState(["nota 01"]);
  const [editMode, setEditMode] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  return (
    <TaskContext.Provider
      value={{
        notes,
        setNotes,
        editMode,
        setEditMode,
        currentNote,
        setCurrentNote,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
