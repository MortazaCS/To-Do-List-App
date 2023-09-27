// Get references to the input box and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector("button");

// Add an event listener to the button to call the addTask function
addButton.addEventListener("click", addTask);

function addTask() {
    // Get the value from the input box
    const taskText = inputBox.value;

    if (taskText === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Append the new list item to the list container
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Clear the input box
        inputBox.value = '';
        saveData();
    }
    saveData();
}

// Add a click event listener to the list container
listContainer.addEventListener("click", function (e) {
    // Check if the clicked element is an LI (list item)
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class to mark/unmark the task as done
        e.target.classList.toggle("checked");
        // Save the updated data to localStorage
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // If the clicked element is a SPAN (delete button),
        // remove the parent LI (list item)
        e.target.parentElement.remove();
        // Save the updated data to localStorage
        saveData();
    }
}, false);

// Function to save the current state of the list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display the tasks from localStorage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function to display tasks when the page loads
showTask();
