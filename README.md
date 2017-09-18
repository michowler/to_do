# to_do

How to create a basic to do list?

1. First, make a folder in your Desktop or whichever folder you prefer.

``` mkdir to_do ```

2. Then, cd into the respective folder. What is cd? It's a command line for your terminal to change directory into the folder you want.

``` cd to_do ```

3. Once done, open your folder. Create a folder for js and css.

4. Add in your index.html file in the root of the app.

```

<!DOCTYPE html>
<html>
	<head>
		<title>My To-Do</title>
		<link rel="stylesheet" type="text/css" href="css/index.css">

	</head>

	<body>

		<div class="main-container">
		  <h1>To-Do List: </h1>

		  <div class="header">
		    <input id="newTask" class="newTask" type="text" placeholder="Add a task..." />
		    <button id="addTask" class="addTask" type="submit">+</button>
		  </div>
		  
		  <ol id="toDoList" class="listArea">
		  </ol>
		</div>

		<script src="js/index.js"></script>

	</body>

</html>
```

I'll explain each element.

Any questions? Let's move on! 

5. Now you have your skeleton done, you have to put some makeup on it to make it look good!

6. Create a file index.css in your css folder.

```

body {
  background: #8FBC8F;
  color: white;
  font-family: futura;
}

.main-container {
  margin: 0 auto;
  width: 80%;
  max-width: 700px;
}

.header {
  margin-bottom: 20px;
}
.header:after {
  content: "";
  display: table;
  clear: both;
}

.addTask {
  background: #DC143C;
  color: white;
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 30px;
  float: right;
}

.newTask {
  width: calc(100% - 100px);
  margin-top: 8px;
  padding: 15px;
  background: rgba(black, .2);  
  outline: none;
  &::-webkit-input-placeholder {
    color: #DC143C;
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: #DC143C;
  }

  &::-moz-placeholder {  /* Firefox 19+ */
    color: #DC143C;
  }

  &:-ms-input-placeholder {  
    color: #DC143C;
  }
  &:active, &:hover, &:focus {
    background: #DC143C;
  }
}

.listArea {  
  /*border: 1px solid #222;*/
  padding: 0;
  cursor: pointer;
  
  li {
    /*list-style: none;*/
    padding: 20px;
    line-height: 1;
    
    button {
      
      background: #DC143C;
      font-size: 10px;
      height: 25px;
      width: 25px;
      text-align: center;
      padding: 0;
      border-radius: 50%;
      line-height: 1.5;
      margin-top: -4px;
      &:hover {
        background: #FF7F50;
      }
    }
  }
}

.completeTask {
  background: #FF7F50;
}

.deleteTask {
  border: 1px solid;  
  border-radius: 50%;
  float:right;
}

```

Play around with the css elements! You can see what works for you.

6. Add in index.js in your js folder.

```
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
```


YOU ARE DONE! :D NOW YOU CAN SHARE IT WITH YOUR FRIENDS!
