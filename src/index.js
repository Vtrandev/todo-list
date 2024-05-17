import "./style.css";
import Icon from "./image.jpg";
import Header from "./Components/header";

const toDoList = {}

const btn = document.querySelector(".btn__add");
const btnNew = document.querySelector(".btn__new");

btn.addEventListener("click", (e) => component(e))
btnNew.addEventListener("click", () => createToDo())

function createToDo(e) {
  const list = new ToDo("New", "This is a description", "Tomorrow", "Low", "Notes are here")

  console.log(list)
}

function component(e) {
  e.preventDefault();
  let id = Math.floor(Math.random()*10)
  const value = e.target.form[0].value
  toDoList.id = {id, value}

  console.log(toDoList);
}

function ToDo(title, description, dueDate, priority, notes) {
  // this.title = title;
  // this.description = description;
  // this.dueDate = dueDate;
  // this.priority = priority;
  // this.notes = notes;
  return { title, description, dueDate, priority, notes }
}


// document.body.appendChild(component());
