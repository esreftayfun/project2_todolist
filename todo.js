//Selection
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addTodo);
}
function addTodo(e){
  const newTodo = todoInput.value.trim();
     if (newTodo === "") {
         showAlert();
         else {

         }
         addTodoToUI(newTodo);
  
     }




    e.preventDefoult();
}

function addTodoToUI(newTodo){

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newToDo));
    listItem.appendChild(link);


    todoList.appendChild(listItem);
    todoInput.value = "";
}
