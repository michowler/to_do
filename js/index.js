var addTask = document.getElementById('addTask'); // Button
var toDoList = document.getElementById('toDoList'); // List Area

function addToList() {
  // get value of input for new task
  var newTask = document.getElementById('newTask').value;
  
  // Check if input is blank
  if (newTask === "") {
    alert("please fill out the form first");
    return false;
  }
  
  // Create new list item & set attributes
  var newItem = document.createElement("li");
  var text = document.createTextNode(newTask);
  var deleteTaskBtn = document.createElement("BUTTON");
  deleteTaskBtn.setAttribute('class','deleteTask');
  deleteTaskBtn.innerHTML = "X";
  // deleteTaskBtn.addEventListener("click", deleteTask);
  
  // Add new item to list area
  newItem.appendChild(text);
  newItem.appendChild(deleteTaskBtn);
  toDoList.appendChild(newItem);
  
  // Reset input value
  newTask = document.getElementById('newTask').value = "";
}

addTask.addEventListener("click", addToList);

toDoList.addEventListener('click', function(e){
  // Check node type
  if(e.target.nodeName == "LI") {
    e.target.classList.toggle('completeTask');
  }
});

toDoList.addEventListener("click", function(e) {
  // e.target is the clicked element!
  // If it was a list item
  if (e.target && e.target.className == "deleteTask") {
    e.target.parentNode.remove();
  }
});

