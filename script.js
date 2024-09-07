    var defaultID=110
        const foodNames = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Salad", "Noodles", "Dosa", "Sandwich", "Biryani", "Paneer", "Chowmein"];
        let total = 0;
        let selectedItems = {};

        // Function to generate grid items dynamically with food names
        function generateGridItems() {
            const gridContainer = document.getElementById('grid-container');
            for (let i = 0; i < 12; i++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridItem.setAttribute('data-value', i + 1);
                gridItem.setAttribute('onclick', 'incrementCounter(this)');
                gridItem.innerHTML = `${foodNames[i]} ${i + 1}<span class="counter">0</span>`;
                gridContainer.appendChild(gridItem);
            }
        }

        // Function to increment counter and update selected items display
        function incrementCounter(gridItem) {
            const counter = gridItem.querySelector('.counter');
            let count = parseInt(counter.innerText);
            count += 1;
            counter.innerText = count;

            // Show counter on first click
            if (count === 1) {
                counter.style.display = 'flex';
            }

            // Update total
            const value = parseInt(gridItem.getAttribute('data-value'));
            total += value;
            document.getElementById('total-display').innerText = `Total: ${total}`;

            // Track selected items
            const itemName = gridItem.innerText.split(' ')[0];
            selectedItems[itemName] = count;

            updateSelectedItemsDisplay();
        }

        // Function to update the selected items display and add event listener for removal
        function updateSelectedItemsDisplay() {
            let selectedItemsContainer = document.getElementById('selected-items');
            selectedItemsContainer.innerHTML = '';

            for (let item in selectedItems) {
                const itemBox = document.createElement('div');
                itemBox.classList.add('item-box');
                itemBox.innerText = `${item}: ${selectedItems[item]}`;
                itemBox.setAttribute('data-item', item); // Add item name as data attribute
                itemBox.addEventListener('click', function () {
                    removeSelectedItem(item);
                });
                selectedItemsContainer.appendChild(itemBox);
            }

            // If no items selected, display "None"
            if (Object.keys(selectedItems).length === 0) {
                selectedItemsContainer.innerHTML = 'None';
            }
        }

        // Function to remove selected item, update total, and reset grid counter
        function removeSelectedItem(item) {
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach(gridItem => {
                const gridItemName = gridItem.innerText.split(' ')[0]; // Extract name from grid item
                if (gridItemName === item) {
                    const counter = gridItem.querySelector('.counter');
                    const count = parseInt(counter.innerText);
                    const value = parseInt(gridItem.getAttribute('data-value'));
                    
                    // Subtract item's total value from overall total
                    total -= value * count;
                    document.getElementById('total-display').innerText = `Total: ${total}`;

                    // Reset grid item's counter and hide it
                    counter.innerText = '0';
                    counter.style.display = 'none';
                }
            });

            // Remove the item from selectedItems object
            delete selectedItems[item];

            // Update the display of selected items
            updateSelectedItemsDisplay();
        }

        // Function to reset all grid items, selected items, and total when total button is clicked
        function resetAll() {
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach(gridItem => {
                const counter = gridItem.querySelector('.counter');
                counter.innerText = '0';
                counter.style.display = 'none';
            });

            // Clear selected items
            selectedItems = {};
            updateSelectedItemsDisplay();

            // Reset total
            total = 0;
            document.getElementById('total-display').innerText = `Total: ${total}`;
        }

// Function to generate a random unique number
        function generateUniqueNumber() {
        defaultID= defaultID+1
            return defaultID;
        }
				// Function to add a new scroll item with meta data and reset grid counters
        function addScrollItem() {
            const scrollContainer = document.getElementById('scroll-container');
            const scrollItem = document.createElement('div');
            const uniqueNumber = generateUniqueNumber();

            scrollItem.classList.add('scroll-item');
            scrollItem.setAttribute('onclick', 'handleScrollItemClick(this)');
            scrollItem.setAttribute('data-items', JSON.stringify(selectedItems));
            scrollItem.innerHTML = 'Order #'+uniqueNumber;

            scrollContainer.appendChild(scrollItem);

            // Reset total, selected items, and grid counters
            total = 0;
            selectedItems = {};
            document.getElementById('total-display').innerText = 'Total: 0';
            updateSelectedItemsDisplay();
            resetGridCounters();
            
            resetAll();
        }
        
        // Function to handle scroll item click
        function handleScrollItemClick(scrollItem) {
            scrollItem.classList.add('clicked');
            const scrollContainer = document.getElementById('scroll-container');
            scrollContainer.appendChild(scrollItem);
        }
        // Function to filter grid items based on multiples
        function filterGridItems(multiple) {
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach(gridItem => {
                const value = parseInt(gridItem.getAttribute('data-value'));
                if (value % multiple === 0) {
                    gridItem.classList.remove('hidden');
                } else {
                    gridItem.classList.add('hidden');
                }
            });
        }

// Function to reset grid item counters
        function resetGridCounters() {
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach(gridItem => {
                const counter = gridItem.querySelector('.counter');
                counter.innerText = '0';
                counter.style.display = 'none';
            });
        }
        // Initialize the grid items
        generateGridItems();
