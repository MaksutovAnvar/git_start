const inputTask = document.querySelector(".task-input input");
const allEl = document.querySelector("#all");
const pendingEl = document.querySelector("#pending");
const completedEl = document.querySelector("#completed");
const buttonEl = document.querySelector("button");

const tasksList = document.querySelector(".tasks-list");

const makeTask = (el) => {
    let htmlMarkup = `<li class="task">
                <input type="checkbox" class="complete">
                <div class="task-text">${el}</div>
                <div class="menu">
                    <img src="./dots.png" alt="" class="dots">
                    <ul class="menuList">
                        <li id="edit">Edit</li>
                        <li id="delete">Delete</li>
                    </ul>
                </div>
            </li>`

    tasksList.innerHTML += htmlMarkup;
}


buttonEl.addEventListener("click", () => {
    tasksList.innerHTML = 'No task'
})

inputTask.addEventListener("keyup", (e) => {
    let userTask = inputTask.value;

    if (e.key == "Enter") {
        makeTask(userTask)
    }
})