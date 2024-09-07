var defaultID = 110;

let foodNames = [
  {
    id: 1,
    name: "Veg Burrito Mini",
    type: "food",
    nonVeg: "0",
    price: "109",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/800px-Burrito.JPG",
  },
  {
    id: 2,
    name: "Veg Burrito Reg",
    type: "food",
    nonVeg: "0",
    price: "129",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/800px-Burrito.JPG",
  },
  {
    id: 3,
    name: "Non Veg Burrito Mini",
    type: "food",
    nonVeg: "1",
    price: "129",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/800px-Burrito.JPG",
  },
  {
    id: 4,
    name: "Non Veg Burrito Reg",
    type: "food",
    nonVeg: "1",
    price: "189",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/800px-Burrito.JPG",
  },
  {
    id: 5,
    name: "Veg Rice Mini",
    type: "food",
    nonVeg: "0",
    price: "109",
    image:
      "https://www.traderjoes.com/content/dam/trjo/recipes/308MainImage.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
  },
  {
    id: 6,
    name: "Veg Rice Reg",
    type: "food",
    nonVeg: "0",
    price: "129",
    image:
      "https://www.traderjoes.com/content/dam/trjo/recipes/308MainImage.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
  },
  {
    id: 7,
    name: "Non Veg Rice Mini",
    type: "food",
    nonVeg: "1",
    price: "129",
    image:
      "https://www.traderjoes.com/content/dam/trjo/recipes/308MainImage.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
  },
  {
    id: 8,
    name: "Non Veg Rice Reg",
    type: "food",
    nonVeg: "1",
    price: "189",
    image:
      "https://www.traderjoes.com/content/dam/trjo/recipes/308MainImage.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
  },
  {
    id: 9,
    name: "Veg Taco Mini",
    type: "food",
    nonVeg: "0",
    price: "109",
    image:
      "https://mojo.generalmills.com/api/public/content/GmHhoT5mr0Sue2oMxdyEig_webp_base.webp?v=868009f1&t=e724eca7b3c24a8aaa6e089ed9e611fd",
  },
  {
    id: 10,
    name: "Veg Taco Reg",
    type: "food",
    nonVeg: "0",
    price: "129",
    image:
      "https://mojo.generalmills.com/api/public/content/GmHhoT5mr0Sue2oMxdyEig_webp_base.webp?v=868009f1&t=e724eca7b3c24a8aaa6e089ed9e611fd",
  },
  {
    id: 11,
    name: "Non Veg Taco Mini",
    type: "food",
    nonVeg: "1",
    price: "129",
    image:
      "https://mojo.generalmills.com/api/public/content/GmHhoT5mr0Sue2oMxdyEig_webp_base.webp?v=868009f1&t=e724eca7b3c24a8aaa6e089ed9e611fd",
  },
  {
    id: 12,
    name: "Non Veg Taco Reg",
    type: "food",
    nonVeg: "1",
    price: "189",
    image:
      "https://mojo.generalmills.com/api/public/content/GmHhoT5mr0Sue2oMxdyEig_webp_base.webp?v=868009f1&t=e724eca7b3c24a8aaa6e089ed9e611fd",
  },
  {
    id: 13,
    name: "Veg Salad Mini",
    type: "food",
    nonVeg: "0",
    price: "109",
    image:
      "https://veganheaven.org/wp-content/uploads/2020/05/Mexican-Salad-9.jpg",
  },
  {
    id: 14,
    name: "Veg Salad Reg",
    type: "food",
    nonVeg: "0",
    price: "129",
    image:
      "https://veganheaven.org/wp-content/uploads/2020/05/Mexican-Salad-9.jpg",
  },
  {
    id: 15,
    name: "Non Veg Salad Mini",
    type: "food",
    nonVeg: "1",
    price: "129",
    image:
      "https://veganheaven.org/wp-content/uploads/2020/05/Mexican-Salad-9.jpg",
  },
  {
    id: 16,
    name: "Non Veg Salad Reg",
    type: "food",
    nonVeg: "1",
    price: "189",
    image:
      "https://veganheaven.org/wp-content/uploads/2020/05/Mexican-Salad-9.jpg",
  },
  {
    id: 17,
    name: "Coconut Lemon",
    type: "beverage",
    nonVeg: "0",
    price: "89",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vfjdM_NLn-yO-fwnlFTMiNNVMQUKUo_t7g&s",
  },
  {
    id: 18,
    name: "Mint Mojita",
    type: "beverage",
    nonVeg: "0",
    price: "79",
    image:
      "https://www.foodandwine.com/thmb/e8AvEfBBfwjg3xmt6E__rRvSZlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mojito-FT-RECIPE1022-2000-85cdb1eb59454847b713713e32e365c0.jpg",
  },
  {
    id: 19,
    name: "Coke/Sprite",
    type: "beverage",
    nonVeg: "1",
    price: "19",
    image:
      "https://www.beveragedaily.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/beveragedaily.com/article/2019/07/12/diet-coke-helps-boost-coca-cola-s-brand-value-brand-finance-rankings/9912727-1-eng-GB/Diet-Coke-helps-boost-Coca-Cola-s-brand-value-Brand-Finance-rankings.jpg",
  },
  {
    id: 20,
    name: "Water",
    type: "beverage",
    nonVeg: "1",
    price: "9",
    image:
      "https://www.telegraph.co.uk/content/dam/health-fitness/2024/03/04/TELEMMGLPICT000369263018_17095822374330_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?imwidth=680",
  },
  {
    id: 21,
    name: "Chicken",
    type: "topping",
    nonVeg: "0",
    price: "39",
  },
  {
    id: 22,
    name: "Paneer",
    type: "topping",
    nonVeg: "0",
    price: "29",
  },
  {
    id: 23,
    name: "Potato",
    type: "topping",
    nonVeg: "1",
    price: "29",
  },
  {
    id: 24,
    name: "Guacamole",
    type: "topping",
    nonVeg: "1",
    price: "59",
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

    gridItem.classList.add("blur-overlay"); // Use the class defined in CSS

    gridItem.style.backgroundImage = "url('" + foodNames[i]["image"] + "')";

    gridItem.style.backgroundSize = "cover"; // Ensure the image covers the gridItem
    gridItem.style.background =
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.581),rgba(0, 0, 0, 0.297));"; // Center the image

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
  scrollItem.setAttribute("saved", "0");

  scrollItem.innerHTML = "Order #" + uniqueNumber;

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
function openPopup(scrollItem) {
  const popup = document.getElementById("popup");
  const popupData = document.getElementById("popup-data");

  (dataValue = scrollItem.getAttribute("data-value")),
    (dataItems = scrollItem.getAttribute("data-items")),
    (saved = scrollItem.getAttribute("saved"));

  popupData.innerText = `<br> Total AMT: ${dataValue} </br>`;

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

  if (saved == "0") {
    const button1 = document.createElement("button");
    button1.innerText = "Cash Pay";

    // Create the second button
    const button2 = document.createElement("button");
    button2.innerText = "Online Pay";

    // Append both buttons to the div
    popupData.appendChild(button1);
    popupData.appendChild(button2);

    // Add an onclick event to Button 1
    button1.onclick = function () {
      addDataToExcel(scrollItem, "cash");
    };
    // Add an onclick event to Button 1
    button2.onclick = function () {
      addDataToExcel(scrollItem, "online");
    };
  }

  popup.classList.add("active");
}

// Function to close popup
function closePopup(scrollItem) {
  const popup = document.getElementById("popup");
  popup.classList.remove("active");
}

function addDataToExcel(scrollItem, type) {
  // Send the data to Google Apps Script Web App

  formData = scrollItem.getAttribute("data-items");

  formData = JSON.parse(formData);

  formData2 = { transcType: type, order: formData };

  formData3 = JSON.stringify(formData2);

  console.log(formData3);
  fetch(
    "https://script.google.com/macros/s/AKfycbxpnquT6t9q82TAr_yMmYeTkFTXncm-B3CzN4KAcrq_Roj9AQbI6gvdIo6NvGeLKJzt/exec",
    {
      // Replace with your Web App URL
      method: "POST",
      body: formData3,
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    }
  )
    .then((response) => response.text())
    .then((data) => {
      if (data === "Success") {
        console.log("move here");
        scrollItem.classList.add("clicked");
        const scrollContainer = document.getElementById("scroll-container");
        scrollContainer.appendChild(scrollItem);
        closePopup(scrollItem);
        scrollItem.setAttribute("saved", "1");
      } else {
        console.log("move falied");

        scrollItem.classList.add("clicked");
        const scrollContainer = document.getElementById("scroll-container");
        scrollContainer.appendChild(scrollItem);
        closePopup(scrollItem);

        scrollItem.setAttribute("saved", "1");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      messageDiv.textContent = "Error submitting data. Please try again.";
    });
}
// Function to handle scroll item click
function handleScrollItemClick(scrollItem) {
  openPopup(scrollItem);
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
