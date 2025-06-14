document.addEventListener("DOMContentLoaded", function() {

console.log("hello")
const button = document.getElementById("btn");
const input = document.getElementById("input");
const warning = document.querySelector("#warning");
const lists_container = document.querySelector(".lists");


button.addEventListener("click", addtask);
function addtask(){
    console.log('click');
    let input_value = input.value ;
    if(input_value == '' || input_value.trim() == ''){
        warning.style.display = 'block';
    }
    else{
        warning.style.display = 'none';
        let task = document.createElement('li');
        task.textContent = input_value;
        lists_container.appendChild(task);
        let delete_btn = document.createElement('span');
        delete_btn.textContent = 'X';
        task.appendChild(delete_btn);
        input.value = '';
        savetasks()

    }
}
lists_container.addEventListener('click', addTaskAction);
function addTaskAction(event){
    console.log('task');
    if(event.target.tagName =='LI'){
        event.target.classList.toggle('checked');
        savetasks()

    }
    else if(event.target.tagName =='SPAN'){
        event.target.parentElement.remove();
        savetasks()
    }
}

function savetasks(){
    localStorage.setItem('tasks',lists_container.innerHTML);
}
function gettasks(){
    lists_container.innerHTML = localStorage.getItem('tasks')
}
gettasks()
});