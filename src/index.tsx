import "./index.html";
import "./style.css";
import { hot } from "react-hot-loader/root";
import ReactDom from "react-dom";

function App() {
  return <div>Hello Worlds</div>;
}

export default hot(App);

ReactDom.render(<App />, document.getElementById("root"));
