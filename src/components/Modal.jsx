import { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { TaskContext } from "../context/TaskProvider";
export default function Modal({ show, setShow }) {
  const { setNotes, editMode } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const handleNote = () => {
    console.log(title)
    setNotes((prev) => [...prev, title])
    setShow(false)
  };
  return (
    <>
      {show &&
        createPortal(
          <div className="inset-0 absolute bg-black/20 backdrop-blur-xs">
            <div className="m-8 bg-white p-4 rounded drop-shadow-xl">
              <div className="flex flex-col">
                <div className="w-auto">
                  <button
                    className="float-right border rounded-md p-2 hover:bg-indigo-400 hover:cursor-pointer"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </button>
                </div>
                {editMode && <p>Edicion</p>}
                <div className="p-4">
                  <div>
                    <label>Titulo:</label>
                    <input
                      className="border rounded-md"
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <p>{title}</p>
                </div>
                <div>
                  <button onClick={()=> (handleNote())} className="border rounded-md bg-indigo-700 text-white p-2">
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
