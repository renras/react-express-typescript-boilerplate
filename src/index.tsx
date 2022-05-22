import "./style.css";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import TestComponent from "./TestComponent";

function App() {
  useEffect(() => {
    fetch("/api/potanginamo").then((response) =>
      response.json().then((data) => console.log(data))
    );
  });

  return (
    <div>
      <TestComponent />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
