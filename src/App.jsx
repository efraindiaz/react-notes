import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import TaskProvider from "./context/TaskProvider";
import Notes from "./components/Notes"
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <TaskProvider>
      <nav className="h-[80px] bg-slate-50 drop-shadow-lg">
        <p>Task Manager</p>
      </nav>
      <div className="container mx-auto">
        <div className="pt-8">
          <button
            className="float-right border rounded"
            onClick={() => setShowModal(true)}
          >
            Add Note
          </button>
        </div>
        <Notes />
      </div>
      <Modal show={showModal} setShow={setShowModal} />
    </TaskProvider>
  );
}

export default App;
