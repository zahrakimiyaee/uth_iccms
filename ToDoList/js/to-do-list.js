let tasks = [] ;
let form = document.getElementById("task_form");
let title = document.getElementById("title");
let status = document.getElementById("status");
let deadline = document.getElementById("deadline");
let date = document.getElementById("date");
let title_output = document.getElementById("title-output");
let hour_output = document.getElementById("hour-output");
let date_output = document.getElementById("date-output");
const doing_task = document.getElementById("doing_tasl");
const doing_task2 =" < div class='row align-items-center task-border' id='doing_task'><div class='col-3'><p class='fs-6' id='title-output'></p></div><div class='col-2'><div class='row g-1 mb-2 border-bottom border-success'><span class='fs-6'>زمان باقیمانده :</span></div><p class='fs-6' id='hour-output'>2 ساعت</p></div><div class='col-2'><div class='row g-1 mb-2 border-bottom border-success'><span class='fs-6'></span></div><p class='fs-6' id='date-output'></p></div><div class='col col-3 btn-group ms-auto' role='group'><i class='fa-regular fa-circle-check btn btn-success'></i><i class='fa-regular fa-pen-to-square btn btn-secondary'></i><i class='fa-regular fa-trash btn btn-danger'></i></div></>"
let parent_tag = document.getElementById("parent_tag");

function add_task(click) {

    if(click){ 
            let task ={
                a_title : title.value,
                a_deadline : deadline.value,
                a_date : date.value 
            };   
            tasks.push(task);
            title_output.innerText= task.a_title; 
            hour_output.innerText = task.a_deadline;
            date_output.innerText= task.a_date;
            form.classList.add("d-none"); 
            // console.log(doing_task);
            // Document.body.appendChild("doing_task2");
            // parent_tag.appendChild("doing_task");
            document.getElementById("title").value = "" ;
            document.getElementById("deadline").value = "" ;
            document.getElementById("date").value = "" ;
        
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
