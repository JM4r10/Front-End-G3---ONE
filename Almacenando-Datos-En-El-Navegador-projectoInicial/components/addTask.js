import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    
    if (value == '' | date == ''){
        return
    }

    input.value = '';
    calendar.value ='';

    const complete = false;


    const taskObject = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }
    /*equivale a {
        value:value,
        dateFormat:dateFormat}*/
    
    list.innerHTML = '';
    
        const taskList = JSON.parse(localStorage.getItem('tasks')) || []; /* pipe ||: En caso que el primer valor sea NULL se formatea, es decir se pasa el segundo valor por defecto (short circuit evaluation) */     
    taskList.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(taskList)); /*localStorage and sessionStorage toman dos parametros llave,valor, ambos en formato string*/
    
    displayTasks();
}

/* const no permite cambiar el TIPO de la variable pero si su CONTENIDO, por eso es posible modifiar el array */
export const createTask = ({value, dateFormat, complete, id}) => {    
/* Deestructuración del objeto taskObject: indicamos que propiedades del objeto queremos utilizar */
    const task = document.createElement('li');
    task.classList.add('card');  
    const taskContent = document.createElement('div');

    const check = checkComplete(id);

    if(complete){
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);
    
    const dateElement = document.createElement('span');
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));

    return task
};

