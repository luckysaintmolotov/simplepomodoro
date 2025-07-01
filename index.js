        let taskCounter = 2; // Start from 2 since we already have 1 item in the list
        // Add task to list functionality
        document.getElementById('TaskInputForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get the values from the input fields
            const taskName = document.getElementById('fTaskName').value;
            const taskDuration = document.getElementById('fTaskDuration').value;

            // Create a new list item
            const newListItem = document.createElement('li');
            const newCheckbox = document.createElement('input');
            newCheckbox.type = 'checkbox';
            newCheckbox.id = `item${taskCounter}`; // Use the counter for the ID
            const newLabel = document.createElement('label');
            newLabel.htmlFor = newCheckbox.id;
            newLabel.textContent = `${taskName} (Duration: ${taskDuration} min)`;

            // Append the checkbox and label to the list item
            newListItem.appendChild(newCheckbox);
            newListItem.appendChild(newLabel);

            // Append the new list item to the task list
            document.getElementById('taskList').appendChild(newListItem);

            // Increment the counter for the next task
            taskCounter++;

            // Clear the input fields
            document.getElementById('fTaskName').value = 'Think Of a Task';
            document.getElementById('fTaskDuration').value = 5; // Reset to default
        });

		// Clear List functionality
        document.getElementById('clearListBtn').addEventListener('click', function() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = ''; // Clear all tasks
            taskCounter = 1; // Reset counter if needed
        });
		