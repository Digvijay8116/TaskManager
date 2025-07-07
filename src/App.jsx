import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskForm from "./pages/TaskForm";
import TaskBoard from "./pages/TaskBoard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addTask" element={<TaskForm />} />
      <Route path="/board" element={<TaskBoard />} />
    </Routes>
  );
}
