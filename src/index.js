import "./style.css";
import Icon from "./image.jpg";
import Header from "./Components/header";

let toDoList = {}

const btn = document.querySelector(".btn__add");
const btnNew = document.querySelector(".btn__new");

btn.addEventListener("click", (e) => component(e))
btnNew.addEventListener("click", () => createToDo())

function createToDo() {
  // Create and initialize a list
  const list = new ToDo("New Title", "This is a description", "Tomorrow", "Low", "Notes are here", {})
  console.log(list)
  toDoList = list
}

function component(e) {
  e.preventDefault();
  let id = 0
  
  while (toDoList.list[id]){
    id = Math.floor(Math.random()*10)
  }
  
  const value = e.target.form[0].value
  toDoList.list[id] = {id, value}

  for (let object in toDoList.list) {
    console.log(toDoList.list[object])
  }
  // console.log(toDoList);
}

function ToDo(title, description, dueDate, priority, notes, list) {
  return { title, description, dueDate, priority, notes, list }
}


// document.body.appendChild(component());
