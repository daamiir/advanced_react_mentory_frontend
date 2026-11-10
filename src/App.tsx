import { HashRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Task1 } from "./Tasks/Task1/Task1";
import { Task2 } from "./Tasks/Task2/Task2";
import { Task3 } from "./Tasks/Task3/Tasks3";
import { Task4 } from "./Tasks/Task4/Task4";

export function App() {
  return (
    <HashRouter>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <NavLink
            to="/task1"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Таск 1
          </NavLink>
          <NavLink
            to="/task2"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Таск 2
          </NavLink>
          <NavLink
            to="/task3"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Таск 3
          </NavLink>
          <NavLink
            to="/task4"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Таск 4
          </NavLink>
        </nav>

        <hr />

        <main style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />

            <Route path="*" element={<Navigate to="/task1" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
