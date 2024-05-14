import "./style.css";
import Icon from "./image.jpg";
import Header from "./Components/header";

function component() {
  // Lodash, currently included via a script, is required for this line to work
  const element = document.createElement("div");
  element.innerHTML = "Hello Webpack"
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.classList.add("image")
  myIcon.src = Icon;

  element.appendChild(myIcon);
  Header();
  return element
}

document.body.appendChild(component());
