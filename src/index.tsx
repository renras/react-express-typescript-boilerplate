import "./index.html";
import "./style.css";
import ReactDom from "react-dom";
import TestComponent from "./TestComponent";

function App() {
  return (
    <div>
      <TestComponent />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
