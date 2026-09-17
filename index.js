
// Select required elements
const addButton = document.querySelector("#push");
const taskInput = document.querySelector("#taskInput");
const tasksContainer = document.querySelector("#tasks");
const taskLeft = document.querySelector("#taskLeft");


// ================= ADD TASK =================

addButton.onclick = function () {

    // Get input value and remove extra spaces
    const taskValue = taskInput.value.trim();

    // Check if input is empty
    if (taskValue.length === 0) {
        alert("Please Enter a Task!");
        return;
    }


    // Create a new task
    tasksContainer.innerHTML += `
        <div class="task">

            <span class="taskname">

                <input
                    type="checkbox"
                    class="checkbox"
                >

                ${taskValue}

            </span>

            <button class="delete" type="button">
                <i
                    class="fa-regular fa-trash-can fa-xl"
                    style="color: #f75d02;"
                ></i>
            </button>

        </div>
    `;


    // Clear input field
    taskInput.value = "";


    // Update task count
    updateTaskCount();
};


// ================= TASK EVENTS =================

// Event Delegation
tasksContainer.addEventListener("click", function (event) {

    // Find clicked delete button
    const deleteButton = event.target.closest(".delete");

    if (deleteButton) {

        // Find the task containing the delete button
        const task = deleteButton.closest(".task");

        // Remove task
        task.remove();

        // Update count
        updateTaskCount();

        return;
    }


    // Find clicked checkbox
    const checkbox = event.target.closest(".checkbox");

    if (checkbox) {

        // Find task name
        const taskName = checkbox.closest(".taskname");

        // Add/remove line-through
        if (checkbox.checked) {
            taskName.style.textDecoration = "line-through";
        } else {
            taskName.style.textDecoration = "none";
        }

        // Update count
        updateTaskCount();
    }

});


// ================= TASK COUNT =================

function updateTaskCount() {

    // Select all checkboxes
    const checkboxes = document.querySelectorAll(".checkbox");

    // Count unchecked tasks
    let remainingTasks = 0;

    checkboxes.forEach(function (checkbox) {

        if (!checkbox.checked) {
            remainingTasks++;
        }

    });

    // Display remaining task count
    taskLeft.textContent = remainingTasks;
}
