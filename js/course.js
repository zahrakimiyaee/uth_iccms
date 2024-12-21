// function master (click) {
//     let master_page = document.getElementById("master-page");
//     let master_button = document.getElementById("master-button");
//     let student_page = document.getElementById("student-page");
//     let student_button =  document.getElementById("student-button");
    
//     if(master_page){
//         // student_page.classList.add("d-none");
//         // student_button.classList.add("student");
//         if(!master_page.classList.contains("master-class")){
//             master_page.classList.add("master-class");
//             master_button.classList.add("master-select");
//         }
//         else{
//             console.log("im in");
//             if(click){
//                 master_page.classList.add("d-none");
//                 master_page.classList.remove("master-class");
//                 master_button.classList.remove("master-select");
//                 student_page.classList.remove("d-none");
//                 student_button.classList.add("student-select");
//             }
//         }      
//     }
//     if(student_page){
//         // master_page.classList.remove("master-class");
//         // master_button.classList.add("master");
//         if(!student_page.classList.contains("student-class")){
//             master_page.classList.remove("master-class");
//             student_page.classList.add("studnet-class");
//             student_button.classList.add("student-select");
//         }else
//             if(click){
//                 student_page.classList.remove("student-class");
//                 student_button.classList.remove("student-select");
//                 master_page.classList.add("master-class");
//                 // master_page.classList.remove("d-none");
//             }
//     }
// }


function master (click) {
    let master_page = document.getElementById("master-page");
    let master_button = document.getElementById("master-button");
    let student_page = document.getElementById("student-page");
    let student_button =  document.getElementById("student-button");
    if(click){
        if(master_page){
            if(master_page.classList.contains("master-class")){
                master_page.classList.remove("master-class");
                master_button.classList.remove("master-select");
                student_page.classList.remove("d-none");
                student_button.classList.remove("student");
                // student_button.classList.add("student-select");
                // console.log("im in");
            }else{
                if(!master_page.classList.contains("master-class")){
                    master_page.classList.add("master-class");
                    master_button.classList.add("master-select");
                    student_page.classList.add("d-none");
                    student_button.classList.add("student");
                }else{
                    if(student_page){
                        if(student_page.classList.contains("d-none")){
                            student_page.classList.remove("d-none");
                            student_button.classList.remove("student");
                            master_page.classList.add("master-class");
                            master_button.classList.add("master-select");
                        }else{
                            if(!student_page.classList.contains("d-none")){
                                student_page.classList.add("d-none");
                                student_button.classList.add("student");
                                master_page.classList.remove("master-class");
                                master_button.classList.remove("master-select");        
                            }
                        }
                    }
                }
            }
        }
    }
}

function with_degree (select){
    let display_y = document.getElementById("display_y");
    if(select){
        if(!display_y.classList.contains("course-file")){
            display_y.classList.add("course-file");
            without_degree(1);
        }
        else{
            if(select===1){
                display_y.classList.remove("course-file");
                select=0;
            }
        }
    }
}

function without_degree (select){
    let display_n = document.getElementById("display_n");
    if(select){
        if(display_n.classList.contains("course-text-d-none")){
            display_n.classList.remove("course-text-d-none");
            with_degree(1);
        }else{
            if(select===1){
                display_n.classList.add("course-text-d-none");
                select=0;
            }
        }
    }
}

function write_more (click){
    let textarea = document.getElementById("textarea");
    if(click){
        if(!textarea.classList.contains("d-none")){
            textarea.classList.add("d-none");
        }else{
            if(textarea.classList.contains("d-none")){
                textarea.classList.remove("d-none");
            }
        }
    }
}


