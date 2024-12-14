function mobileMenu (click) {
    let mobile_menu = document.getElementById("mobile");
    if (mobile_menu){
        if(mobile_menu){
            if(!mobile_menu.classList.contains("d-none")){
                mobile_menu.classList.add("d-none");
            } else{
                if(click){
                    mobile_menu.classList.remove("d-none");
                } 
            }
        }
    }
}
