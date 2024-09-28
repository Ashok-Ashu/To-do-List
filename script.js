

const inputBox = document.querySelector("#input");
const lists = document.querySelector(".lists");

// Function to add a new note
const addNote = () => {
  if (inputBox.value.trim() === "") {
    alert("You should write something!!");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    lists.appendChild(li);

    let span = document.createElement("span");
    span.innerText = "\u00d7"; // Unicode for multiplication sign
    span.className = "delete"; // Added class for potential styling
    li.appendChild(span);
    
    inputBox.value = ""; // Clear the input box
    storeData(); // Save list to local storage
  }
};

// Event listener for handling clicks on list items and delete buttons
lists.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    storeData(); // Save list to local storage
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    storeData(); // Save list to local storage
  }
});

// Function to store list data in local storage
const storeData = () => {
  localStorage.setItem("data", lists.innerHTML);
};

// Function to display stored notes from local storage
const displayNote = () => {
  const storedData = localStorage.getItem("data");
  if (storedData) {
    lists.innerHTML = storedData;
  }
};

// Call displayNote on page load
document.addEventListener("DOMContentLoaded", displayNote);
