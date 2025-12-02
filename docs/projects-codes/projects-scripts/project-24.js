// project 24
const finish_btn = $.querySelector(".project-11-finish-btn");
const project_10_circle = $.querySelector(".project-11-circle");
const check_icon = $.querySelector(".project-11-check-icon");
const border_animation = $.querySelector(".project-11-border-animation");
const circle_container = $.querySelector(".project-11-circle-container");

let flag = true;

finish_btn.addEventListener("click", function (){
    if(flag){
        finish_btn.classList.add("project-11-finish-button");
        finish_btn.style.borderColor = "rgba(0,0,0,0.1)";
        circle_container.style.visibility = 'visible';
        project_10_circle.classList.add("project-11-fill-circle");
        border_animation.classList.add("project-11-border-scale-animation")
        check_icon.style.visibility = "visible";
        check_icon.classList.add("project-11-check-appear");
        finish_btn.firstElementChild.style.opacity = 0;
        flag = !flag;
    }
    else {
        finish_btn.classList.remove("project-11-finish-button");
        finish_btn.style.borderColor = "white";
        project_10_circle.classList.remove("project-11-fill-circle");
        border_animation.classList.remove("project-11-border-scale-animation");
        check_icon.style.visibility = "hidden"
        check_icon.classList.remove("project-11-check-appear");
        finish_btn.firstElementChild.style.opacity = 1;
        flag = !flag
    }
    
})