// // Function to allow dropping an item
// function allowDrop(event) {
//     event.preventDefault();
//   }

//   // Function to handle the drop event  
//   function drop(event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("text");
//     var draggedItem = document.getElementById(data);
//     event.target.appendChild(draggedItem);
//     // Add any custom code for handling the drop event
//     console.log("Item dropped!");
//   }

//   // Function to handle the drag start event
//   function drag(event) {
//     event.dataTransfer.setData("text", event.target.id);
//   }

let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });


    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}

// Function to reset the containers
function resetContainers() {
  var leftContainer = document.querySelector(".left-container");
  var rightContainer = document.querySelector(".right-container");
  leftContainer=''
    
  rightContainer.innerHTML = `
       <div class="item" draggable="true" ondragstart="drag(event)"></div>
       <div class="item" draggable="true" ondragstart="drag(event)"></div>
       <div class="item" draggable="true" ondragstart="drag(event)"></div>
    `;
    
}

// document.write("successfull drag")
var resetButton = document.querySelector("button");
resetButton.addEventListener("click", resetContainers);


let popup =document.getElementById("popup")

function openPopup(){
popup.classList.add("open-popup");
}


function closePopup(){
  popup.classList.add("close-popup");
  }
  
// Add event listeners to draggable items
// var draggableItems = document.querySelectorAll(".list");
// draggableItems.forEach(function (item) {
//   item.addEventListener("dragstart", drag);
// });

