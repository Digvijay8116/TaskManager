import { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";
import TaskCard from "./TaskCard";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";

export default function TaskBoard() {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const statuses = ["To-Do", "In Progress", "Completed"];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {statuses.map((status) => (
        <div
          key={status}
          style={{
            flex: "1 1 300px",
            minWidth: "250px",
            backgroundColor: theme === "light" ? "#f0f0f0" : "#2d2d2d",
            color: theme === "light" ? "#000" : "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "all 0.3s",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginBottom: "10px",
              borderBottom:
                theme === "light" ? "2px solid #ddd" : "2px solid #444",
              paddingBottom: "5px",
            }}
          >
            {status}
          </h3>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
      ))}

      <div style={{ width: "100%", marginTop: "20px", textAlign: "center" }}>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}
