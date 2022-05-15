import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = "Hello Webpacks";
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    document.body.removeChild(document.body.children[0]);
  });
}
