let tasks = [] ;
let form = document.getElementById("task_form");
let title = document.getElementById("title").value;
let status = document.getElementById("status").value;
let deadline = document.getElementById("deadline").value;
let date = document.getElementById("date").value;
let title_output = document.getElementById("title-output");
let hour_output = document.getElementById("hour-output");
let date_output = document.getElementById("date-output");

function add_task(click) {

    if(click){ 
        let task ={
            a_title : title,
            a_deadline : deadline,
            a_date : date 
        };   
        console.log(task);
        tasks.push(task);
        console.log(tasks);
        form.classList.add("d-none");   
        title_output.value= task.a_title; 
        hour_output.value = task.a_deadline;
        date_output.value= task.date_output;
    }
}

function create_task(click) {
    if(click){
        if(form.classList.contains("d-none")){
            form.classList.remove("d-none");
        }
    }
}

function close_task (click) {
    let form = document.getElementById("task_form");
    if(click){
        form.classList.add("d-none");
    }
}
