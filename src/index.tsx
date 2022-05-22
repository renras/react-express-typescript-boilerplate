import "./style.css";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("/api/potanginamo").then((response) =>
      response.json().then((data) => setResponse(data.message))
    );
  }, []);

  return <div>{response}</div>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
