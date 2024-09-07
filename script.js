var defaultID = 110;
const foodNamesold = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Tacos",
  "Salad",
  "Noodles",
  "Dosa",
  "Sandwich",
  "Biryani",
  "Paneer",
  "Chowmein",
];

let foodNames = [
  {
    id: 1,
    name: "Veg Burrito Mini",
    type: "food",
    nonVeg: "0",
    price: "109",
  },
  {
    id: 2,
    name: "Veg Burrito Reg",
    type: "food",
    nonVeg: "0",
    price: "129",
  },
  {
    id: 3,
    name: "Non Veg Burrito Mini",
    type: "food",
    nonVeg: "1",
    price: "129",
  },
  {
    id: 4,
    name: "Non Veg Burrito Reg",
    type: "food",
    nonVeg: "1",
    price: "189",
  },
  {
    id: 5,
    name: "Veg Rice Mini",
    type: "food",
    nonVeg: "0",
    price: "109",
  },
  {
    id: 6,
    name: "Veg Rice Reg",
    type: "food",
    nonVeg: "0",
    price: "129",
  },
  {
    id: 7,
    name: "Non Veg Rice Mini",
    type: "food",
    nonVeg: "1",
    price: "129",
  },
  {
    id: 8,
    name: "Non Veg Rice Reg",
    type: "food",
    nonVeg: "1",
    price: "189",
  },
  {
    id: 9,
    name: "Veg Taco Mini",
    type: "food",
    nonVeg: "0",
    price: "109",
  },
  {
    id: 10,
    name: "Veg Taco Reg",
    type: "food",
    nonVeg: "0",
    price: "129",
  },
  {
    id: 11,
    name: "Non Veg Taco Mini",
    type: "food",
    nonVeg: "1",
    price: "129",
  },
  {
    id: 12,
    name: "Non Veg Taco Reg",
    type: "food",
    nonVeg: "1",
    price: "189",
  },
  {
    id: 13,
    name: "Veg Salad Mini",
    type: "food",
    nonVeg: "0",
    price: "109",
  },
  {
    id: 14,
    name: "Veg Salad Reg",
    type: "food",
    nonVeg: "0",
    price: "129",
  },
  {
    id: 15,
    name: "Non Veg Salad Mini",
    type: "food",
    nonVeg: "1",
    price: "129",
  },
  {
    id: 16,
    name: "Non Veg Salad Reg",
    type: "food",
    nonVeg: "1",
    price: "189",
  },
  {
    id: 17,
    name: "Coconut Lemon",
    type: "beverage",
    nonVeg: "0",
    price: "89",
  },
  {
    id: 18,
    name: "Mint Mojita",
    type: "beverage",
    nonVeg: "0",
    price: "79",
  },
  {
    id: 19,
    name: "Coke/Sprite",
    type: "beverage",
    nonVeg: "1",
    price: "19",
  },
  {
    id: 20,
    name: "Water",
    type: "beverage",
    nonVeg: "1",
    price: "9",
  },
];

let total = 0;
let selectedItems = {};

// Function to generate grid items dynamically with food names
function generateGridItems() {
  const gridContainer = document.getElementById("grid-container");

  for (let i = 0; i < foodNames.length; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.setAttribute("data-id", foodNames[i]["id"]);
    gridItem.setAttribute("data-value", foodNames[i]["price"]);
    gridItem.setAttribute("data-type", foodNames[i]["type"]);
    gridItem.setAttribute("data-name", foodNames[i]["name"]);
    gridItem.setAttribute("onclick", "incrementCounter(this)");
    gridItem.innerHTML = `${foodNames[i]["name"]}: ${foodNames[i]["price"]}<span class="counter">0</span>`;
    gridContainer.appendChild(gridItem);
  }
}

// Function to increment counter and update selected items display
function incrementCounter(gridItem) {
  const counter = gridItem.querySelector(".counter");
  let count = parseInt(counter.innerText);
  count += 1;
  counter.innerText = count;

  // Show counter on first click
  if (count === 1) {
    counter.style.display = "flex";
  }

  // Update total
  const value = parseInt(gridItem.getAttribute("data-value"));
  total += value;
  document.getElementById("total-display").innerText = `Total: ${total}`;

  // Track selected items
  const itemName = gridItem.getAttribute("data-name");
  selectedItems[itemName] = count;

  updateSelectedItemsDisplay();
}

// Function to update the selected items display and add event listener for removal
function updateSelectedItemsDisplay() {
  let selectedItemsContainer = document.getElementById("selected-items");
  selectedItemsContainer.innerHTML = "";

  for (let item in selectedItems) {
    const itemBox = document.createElement("div");
    itemBox.classList.add("item-box");
    itemBox.innerText = `${item}: ${selectedItems[item]}`;
    itemBox.setAttribute("data-item", item); // Add item name as data attribute
    itemBox.addEventListener("click", function () {
      removeSelectedItem(item);
    });
    selectedItemsContainer.appendChild(itemBox);
  }

  // If no items selected, display "None"
  if (Object.keys(selectedItems).length === 0) {
    selectedItemsContainer.innerHTML = "None";
  }
}

// Function to remove selected item, update total, and reset grid counter
function removeSelectedItem(item) {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    const gridItemName = gridItem.innerText.split(" ")[0]; // Extract name from grid item
    if (gridItemName === item) {
      const counter = gridItem.querySelector(".counter");
      const count = parseInt(counter.innerText);
      const value = parseInt(gridItem.getAttribute("data-value"));

      // Subtract item's total value from overall total
      total -= value * count;
      document.getElementById("total-display").innerText = `Total: ${total}`;

      // Reset grid item's counter and hide it
      counter.innerText = "0";
      counter.style.display = "none";
    }
  });

  // Remove the item from selectedItems object
  delete selectedItems[item];

  // Update the display of selected items
  updateSelectedItemsDisplay();
}

// Function to reset all grid items, selected items, and total when total button is clicked
function resetAll() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    const counter = gridItem.querySelector(".counter");
    counter.innerText = "0";
    counter.style.display = "none";
  });

  // Clear selected items
  selectedItems = {};
  updateSelectedItemsDisplay();

  // Reset total
  total = 0;
  document.getElementById("total-display").innerText = `Total: ${total}`;
}

// Function to generate a random unique number
function generateUniqueNumber() {
  defaultID = defaultID + 1;
  return defaultID;
}
// Function to add a new scroll item with meta data and reset grid counters
function addScrollItem() {
  const scrollContainer = document.getElementById("scroll-container");
  const scrollItem = document.createElement("div");
  const uniqueNumber = generateUniqueNumber();

  scrollItem.classList.add("scroll-item");
  scrollItem.setAttribute("onclick", "handleScrollItemClick(this)");
  scrollItem.setAttribute("data-items", JSON.stringify(selectedItems));
  scrollItem.setAttribute("data-value", total); // Save the total value in data-value
  scrollItem.innerHTML = "Order #" + uniqueNumber;

  // Create and add an eye icon
  const eyeIcon = document.createElement("span");
  eyeIcon.classList.add("eye-icon");
  eyeIcon.innerHTML = "&#128065;"; // Eye icon using emoji
  eyeIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    openPopup(
      scrollItem.getAttribute("data-value"),
      scrollItem.getAttribute("data-items")
    );
  });

  scrollItem.appendChild(eyeIcon);
  scrollContainer.appendChild(scrollItem);

  // Reset total, selected items, and grid counters
  total = 0;
  selectedItems = {};
  document.getElementById("total-display").innerText = "Total: 0";
  updateSelectedItemsDisplay();
  resetGridCounters();
  resetAll();
}

// Function to open popup and display the data-value
function openPopup(dataValue, dataItems) {
  const popup = document.getElementById("popup");
  const popupData = document.getElementById("popup-data");
  popupData.innerText = ` Total AMT: ${dataValue}`;

  // Parse the JSON string
  const data = JSON.parse(dataItems);

  // Get the table element
  const table = document.getElementById("jsonTable");

  // Create table headers and rows
  let tableContent = "";
  for (let key in data) {
    tableContent += `<tr><th>${key}</th><td>${data[key]}</td></tr>`;
  }

  // Add the content to the table
  table.innerHTML = tableContent;

  popup.classList.add("active");
}

// Function to close popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("active");
}

function addDataToExcel(formData) {
  // Send the data to Google Apps Script Web App
  console.log(formData);
  fetch(
    "https://script.google.com/macros/s/AKfycbxpnquT6t9q82TAr_yMmYeTkFTXncm-B3CzN4KAcrq_Roj9AQbI6gvdIo6NvGeLKJzt/exec",
    {
      // Replace with your Web App URL
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    }
  )
    .then((response) => response.text())
    .then((data) => {
      if (data === "Success") {
        messageDiv.textContent = "Data successfully added to Google Sheets!";
      } else {
        messageDiv.textContent = "Something went wrong. Please try again.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      messageDiv.textContent = "Error submitting data. Please try again.";
    });
}
// Function to handle scroll item click
function handleScrollItemClick(scrollItem) {
  scrollItem.classList.add("clicked");
  const scrollContainer = document.getElementById("scroll-container");
  scrollContainer.appendChild(scrollItem);

  addDataToExcel(scrollItem.getAttribute("data-items"));
}

// Function to filter grid items based on multiples
function filterGridItems(type) {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    const value = gridItem.getAttribute("data-type");
    if (value == type) {
      gridItem.classList.remove("hidden");
    } else {
      gridItem.classList.add("hidden");
    }
  });
}

// Function to reset grid item counters
function resetGridCounters() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    const counter = gridItem.querySelector(".counter");
    counter.innerText = "0";
    counter.style.display = "none";
  });
}

// Initialize the grid items
generateGridItems();
filterGridItems("food");
