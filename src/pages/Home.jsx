import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function Home() {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager Home</h1>
      <nav>
        <button
          onClick={() => navigate("/addTask")}
          style={{ marginRight: "10px" }}
        >
          Add Task
        </button>
        <button
          onClick={() => navigate("/board")}
          style={{ marginRight: "10px" }}
        >
          View Board
        </button>
        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </nav>
    </div>
  );
}
