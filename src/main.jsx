import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/home";
import WorkPage from "./pages/workpage";
import ProjectsPage from "./pages/project";
import ProjectDetail from "./pages/ProjectDetail";
import WorkDetail from "./pages/WorkDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/work/:workId" element={<WorkDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
