function master (click) {
    let master_page = document.getElementById("master-page");
    let master_button = document.getElementById("master-button");
    let student_page = document.getElementById("student-page");
    if(master_page){
        if(!master_page.classList.contains("master-page")){
            // master_page.classList.add("d-none");
            master_page.style.zIndex= "1";
            student_page.style.zIndex="0";
        }
        // else
        //     if(click){
        //         master_page.classList.remove("d-none");
        //         if(master_page.classList.contains("d-none")){
        //             student_page.classList.add("d-none");
        //         }
        //     }
    }
    if(student_page){
        if(!student_page.classList.contains("d-none")){
            // student_page.classList.remove("d-none"); 
            master_page.classList.add("d-none");   
        }else
            if(click){
                student_page.classList.remove("d-none");                
                // student_page.classList.add("student-page");
            }
    }
}