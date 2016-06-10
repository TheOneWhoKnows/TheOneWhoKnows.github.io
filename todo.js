var newInput = document.getElementById('new')
var addItemButton = document.getElementById('addItem')
var itemsToDoDiv = document.getElementById('itemsToDo')
var doneItems = document.getElementById('doneItems')

addItemButton.onclick = addItem

function addItem() {
    var item = newInput.value

    if (item) {
        itemsToDoDiv.innerHTML = itemsToDoDiv.innerHTML + '<div>' + item + '<button>Mark completed</button="markCompleted()"></div>'
    }
}

function markCompleted() {
    
}