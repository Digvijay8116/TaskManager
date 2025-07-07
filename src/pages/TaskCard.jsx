import { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";

export default function TaskCard({ task }) {
  const { updateTask, deleteTask } = useContext(TaskContext);

  const nextStatus = {
    "To-Do": "In Progress",
    "In Progress": "Completed",
    Completed: "To-Do",
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "8px",
        borderRadius: "5px",
      }}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button
        onClick={() => updateTask(task.id, { status: nextStatus[task.status] })}
      >
        Move to {nextStatus[task.status]}
      </button>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "5px" }}>
        Delete
      </button>
    </div>
  );
}
