const todoBox = document.querySelector("#todoBox")

let checkbox = document.querySelector(".checkboxinput")
let date = document.querySelector(".date")
let submit = document.querySelector(".submit")
let textinput = document.querySelector(".textinput")

let todos = []

// localStorage.getItem("content")

function setlocal() {
  localStorage.setItem("content", JSON.stringify(todos))
}

function todoList(event) {
  event.preventdefault();



}

submit.addEventListener("submit", todoList)


// 흑흑,,,,,,,,