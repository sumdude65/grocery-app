import React, { useState, useEffect } from "react";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import "./style.scss";

export const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  // checks if a list already exists in local storage
  useEffect(() => {
    const storageAvailable = JSON.parse(localStorage.getItem("list"));
    if (storageAvailable) {
      setList(storageAvailable);
    }
  }, []);
  // both functions handle editing phase
  const editing = (id) => {
    const newInput = list.find((item) => item.id === id);
    const inputIndex = list.indexOf(newInput);
    setInput(newInput);
    setIsEditing(true);
    setEditIndex(inputIndex);
  };
  const finishedEditing = (e) => {
    e.preventDefault();
    const newList = [...list].map((item, idx) => {
      if (idx === editIndex) {
        item.message = input.message;
      }
      return item;
    });
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
    setInput("");
    setIsEditing(false);
    setEditIndex(null);
  };
  //handles text input
  const handleChange = (e) => {
    if (isEditing) {
      setInput({ ...input, message: e.target.value });
    } else {
      setInput({
        id: Date.now(),
        message: e.target.value,
      });
    }
  };
  //updates list and local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.message) {
      setList([...list, input]);
      localStorage.setItem("list", JSON.stringify([...list, input]));
    } else {
      alert("Add item");
      return;
    }
    setInput("");
  };
  // remove item
  const remove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };
  return (
    <div className="app">
      <h1>Grocery App</h1>
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={input.message || ""}
        />
        {!isEditing ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={finishedEditing}>
            Save <BiSave />
          </button>
        )}
      </form>

      <div className="list">
        {list.map(({ id, message }) => {
          return (
            <li key={id}>
              <p>{message}</p>
              <div className="buttons">
                <button onClick={() => remove(id)}>
                  <BiTrash />
                </button>
                <button onClick={() => editing(id)}>
                  <BiEdit />
                </button>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};
