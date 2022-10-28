const btn = document.querySelector("[data-form-btn]");





console.log(btn);

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement("li");
    task.classList.add('card');
    //backticks: alt+96
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    input.value = "";
    task.innerHTML = content;
    list.appendChild(task);
    console.log(content);
}



//listener (click)
btn.addEventListener("click",createTask);