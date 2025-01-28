let tasks = [] ;
let form = document.getElementById("task_form");
let title = document.getElementById("title");
let status = document.getElementById("status");
let deadline = document.getElementById("deadline");
let date = document.getElementById("date");
let title_output = document.getElementById("title-output");
let hour_output = document.getElementById("hour-output");
let date_output = document.getElementById("date-output");
let doing_task = document.getElementById("doing_task");
let finished_task = document.getElementById("finished_task");
let parent_tag = document.getElementById("parent_tag");

function add_task(click) {

    if(click){ if(title.value ===""|| deadline.value==="" || date.value===""){
        alert("لطفا همه فیلد هارا پر کنید"); 
    }else{
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
        document.getElementById("title").value = "" ;
        document.getElementById("deadline").value = "" ;
        document.getElementById("date").value = "" ;
        } 
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

function task_done(click) {
    if(click){
        console.log("im in");
        
        
    }
    
}
