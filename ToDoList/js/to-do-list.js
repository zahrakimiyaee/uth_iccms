const tasks = [] ;
let id =0
let form = document.getElementById("task_form");
let title = document.getElementById("title");
let status = document.getElementById("status");
let deadline = document.getElementById("deadline");
let date = document.getElementById("date");
let parent_tag = document.getElementById("parent_tag");
let doing_task_0 = document.getElementById("doing_task_0");
let doing_task_1 = document.getElementById("doing_task_1");
let doing_task_2 = document.getElementById("doing_task_2");
let doing_task_3 = document.getElementById("doing_task_3");
let title_output_0 = document.getElementById("title_output_0");
let title_output_1 = document.getElementById("title_output_1");
let title_output_2 = document.getElementById("title_output_2");
let title_output_3 = document.getElementById("title_output_3");
let hour_output_0 = document.getElementById("hour_output_0");
let hour_output_1 = document.getElementById("hour_output_1");
let hour_output_2 = document.getElementById("hour_output_2");
let hour_output_3 = document.getElementById("hour_output_3");
let date_output_0 = document.getElementById("date_output_0");
let date_output_1 = document.getElementById("date_output_1");
let date_output_2 = document.getElementById("date_output_2");
let date_output_3 = document.getElementById("date_output_3");
let finished_parent_tag = document.getElementById("finished_parent_tag");
let finished_task_0 = document.getElementById("finished_task_0");
let finished_task_1 = document.getElementById("finished_task_1");
let finished_task_2 = document.getElementById("finished_task_2");
let finished_task_3 = document.getElementById("finished_task_3");
let finished_title_output_0 = document.getElementById("finished_title_output_0");
let finished_title_output_1 = document.getElementById("finished_title_output_1");
let finished_title_output_2 = document.getElementById("finished_title_output_2");
let finished_title_output_3 = document.getElementById("finished_title_output_3");
let finished_hour_output_0 = document.getElementById("finished_hour_output_0");
let finished_hour_output_1 = document.getElementById("finished_hour_output_1");
let finished_hour_output_2 = document.getElementById("finished_hour_output_2");
let finished_hour_output_3 = document.getElementById("finished_hour_output_3");
let finished_date_output_0 = document.getElementById("finished_date_output_0");
let finished_date_output_1 = document.getElementById("finished_date_output_1");
let finished_date_output_2 = document.getElementById("finished_date_output_2");
let finished_date_output_3 = document.getElementById("finished_date_output_3");

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

function add_task(click) {

    if(click){ if(title.value ===""|| deadline.value==="" || date.value===""){
        alert("لطفا همه فیلد هارا پر کنید"); 
    }else{
        let task ={
            id : id++,
            a_title : title.value,
            a_deadline : deadline.value,
            a_date : date.value 
            };
            if (task.id==0) {
                tasks.push(task);
                title_output_0.innerText = task.a_title; 
                hour_output_0.innerText = task.a_deadline;
                date_output_0.innerText = task.a_date;
                form.classList.add("d-none"); 
                document.getElementById("title").value = "" ;
                document.getElementById("deadline").value = "" ;
                document.getElementById("date").value = "" ;
                parent_tag.classList.remove("d-none");
                doing_task_0.classList.remove("d-none");  
            }
            if (task.id==1) {
                tasks.push(task);
                title_output_1.innerText= task.a_title; 
                hour_output_1.innerText = task.a_deadline;
                date_output_1.innerText= task.a_date;
                form.classList.add("d-none"); 
                document.getElementById("title").value = "" ;
                document.getElementById("deadline").value = "" ;
                document.getElementById("date").value = "" ;
                parent_tag.classList.remove("d-none");
                doing_task_1.classList.remove("d-none");  
            }
            if (task.id==2) {
                tasks.push(task);
                title_output_2.innerText= task.a_title; 
                hour_output_2.innerText = task.a_deadline;
                date_output_2.innerText= task.a_date;
                form.classList.add("d-none"); 
                document.getElementById("title").value = "" ;
                document.getElementById("deadline").value = "" ;
                document.getElementById("date").value = "" ;
                parent_tag.classList.remove("d-none");
                doing_task_2.classList.remove("d-none");  
            }
            if (task.id==3) {
                tasks.push(task);
                title_output_3.innerText= task.a_title; 
                hour_output_3.innerText = task.a_deadline;
                date_output_3.innerText= task.a_date;
                form.classList.add("d-none"); 
                document.getElementById("title").value = "" ;
                document.getElementById("deadline").value = "" ;
                document.getElementById("date").value = "" ;
                parent_tag.classList.remove("d-none");
                doing_task_3.classList.remove("d-none");  
            }
            if (task.id > 3) {
                alert("همه تسک ها پر است!!! \n برای ایجاد تسک جدید یکی از تسک های موجود را حذف کنید.");
            }   
        } 
    }
}


function task_0_finished (click) {
    if(click){
        finished_title_output_0.innerText = tasks[0].a_title;           
        finished_hour_output_0.innerText = tasks[0].a_deadline;           
        finished_date_output_0.innerText = tasks[0].a_date;
        finished_parent_tag.classList.remove("d-none");
        finished_task_0.classList.remove("d-none");
        doing_task_0.classList.add("d-none");
        if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
            parent_tag.classList.add("d-none");
        }
    }
}

function task_1_finished(click) {
    if (click) {
        finished_title_output_1.innerText = tasks[1].a_title;           
        finished_hour_output_1.innerText = tasks[1].a_deadline;           
        finished_date_output_1.innerText = tasks[1].a_date;
        finished_parent_tag.classList.remove("d-none");
        finished_task_1.classList.remove("d-none");
        doing_task_1.classList.add("d-none");
        if(doing_task_0.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
            parent_tag.classList.add("d-none");
        }
    }
}

function task_2_finished (click) {
    if (click) {
        finished_title_output_2.innerText = tasks[2].a_title;           
        finished_hour_output_2.innerText = tasks[2].a_deadline;           
        finished_date_output_2.innerText = tasks[2].a_date;
        finished_parent_tag.classList.remove("d-none");
        finished_task_2.classList.remove("d-none");
        doing_task_2.classList.add("d-none");
        if(doing_task_1.classList.contains("d-none") && doing_task_0.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
            parent_tag.classList.add("d-none");
        }
    }
}

function task_3_finished(click) {
    if (click) {
        finished_title_output_3.innerText = tasks[3].a_title;           
        finished_hour_output_3.innerText = tasks[3].a_deadline;           
        finished_date_output_3.innerText = tasks[3].a_date;
        finished_parent_tag.classList.remove("d-none");
        finished_task_3.classList.remove("d-none");
        doing_task_3.classList.add("d-none");
        if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_0.classList.contains("d-none")){
            parent_tag.classList.add("d-none");
        }
    }
}

function task_0_delete(click) {
    if (click) {
        tasks.splice(0, 1);
        doing_task_0.classList.add("d-none"); 
        if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
            parent_tag.classList.add("d-none");
        }   
    }
}

function task_1_delete(click) {
    if (click) {
        tasks.splice(1, 1);
        doing_task_1.classList.add("d-none"); 
        if(doing_task_0.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
            parent_tag.classList.add("d-none");
        }   
    }
}

function task_2_delete(click) {
    if (click) {
        tasks.splice(2, 1);
        doing_task_2.classList.add("d-none");
        if(doing_task_1.classList.contains("d-none") && doing_task_0.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
            parent_tag.classList.add("d-none");
        }    
    }
}

function task_3_delete(click) {
    if (click) {
        tasks.splice(3, 1);
        doing_task_3.classList.add("d-none");
        if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_0.classList.contains("d-none")){
            parent_tag.classList.add("d-none");
        }    
    }
}

function finished_task_0_delete(click) {
    if (click) {
        tasks.splice(0, 1);
        finished_task_0.classList.add("d-none");
        if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
            finished_parent_tag.classList.add("d-none");
        }    
    }    
}

function finished_task_1_delete(click) {
    if (click) {
        tasks.splice(1, 1);
        finished_task_1.classList.add("d-none");
        if(doing_task_0.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
            finished_parent_tag.classList.add("d-none");
        }    
    }    
}

function finished_task_2_delete(click) {
    if (click) {
        tasks.splice(2, 1);
        finished_task_2.classList.add("d-none");
        if(doing_task_1.classList.contains("d-none") && doing_task_0.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
            finished_parent_tag.classList.add("d-none");
        }    
    }    
}

function finished_task_0_delete(click) {
    if (click) {
        tasks.splice(3, 1);
        finished_task_3.classList.add("d-none");
        if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_0.classList.contains("d-none")){
            finished_parent_tag.classList.add("d-none");
        }    
    }    
}
