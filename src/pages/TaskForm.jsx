import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskProvider";
import { ThemeContext } from "../context/ThemeProvider";

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      title,
      description,
      dueDate,
      priority,
      status: "To-Do",
    });
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
    navigate("/board");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#2d2d2d",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Add New Task</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}
