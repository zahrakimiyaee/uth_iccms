let task = [] ;

function add_task(click) {
    let title = document.getElementById("title").value;
    let status = document.getElementById("status").value;
    let deadline = document.getElementById("deadline").value;
    let date = document.getElementById("date").value;
    console.log("im in");
    
    if(click){             
        task.push({
            a_title : title,
            a_status : status,
            a_deadline : deadline,
            a_date : date 
        });    
        
           
    }
}

function create_task(click) {
    let form = document.getElementById("task_form");
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
