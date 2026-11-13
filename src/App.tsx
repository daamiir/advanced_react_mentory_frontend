import { HashRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Task1 } from "./Tasks/Task1/Task1";
import { Task2 } from "./Tasks/Task2/Task2";
import { Task3 } from "./Tasks/Task3/Tasks3";
import { Task4 } from "./Tasks/Task4/Task4";
import { Task5 } from "./Tasks/Task5/Task5";
import { Task6 } from "./Tasks/Task6/Task6";

const navList = [
  { path: "/task1", label: "Таск 1" },
  { path: "/task2", label: "Таск 2" },
  { path: "/task3", label: "Таск 3" },
  { path: "/task4", label: "Таск 4" },
  { path: "/task5", label: "Таск 5" },
  { path: "/task6", label: "Таск 6" },
];

export function App() {
  return (
    <HashRouter>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          {navList.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <hr />

        <main style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />
            <Route path="/task5" element={<Task5 />} />
            <Route path="/task6" element={<Task6 />} />

            <Route path="*" element={<Navigate to="/task1" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
