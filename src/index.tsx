import "./index.html";
import "./style.css";
import { createRoot } from "react-dom/client";
import TestComponent from "./TestComponent";

function App() {
  return (
    <div>
      <TestComponent />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
