import checkComplete from "./assets/components/checkComplete.js";
import deleteIcon from "./assets/components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement("li");
    task.classList.add('card');
    //backticks: alt+96    
    const taskContent = document.createElement("div");
    const tittleTask = document.createElement('span');
    tittleTask.classList.add('task');
    tittleTask.innerText= value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(tittleTask);
    
    input.value = "";
    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);    
}

console.log(btn);

//listener (click)
btn.addEventListener("click",createTask);

