// project 6
const circle_1 = $.querySelector(".project-1-circle-1");
const circle_2 = $.querySelector(".project-1-circle-2");
const picture = $.querySelector(".project-1-picture");

function add_rotate () {
    circle_1.classList.add("project-1-rotate-right");
    circle_2.classList.add("project-1-rotate-left");
} 

function remove_rotate (){  
    circle_1.classList.remove("project-1-rotate-right");
    circle_2.classList.remove("project-1-rotate-left");
}

picture.addEventListener("mouseenter", add_rotate)
picture.addEventListener("mouseleave", remove_rotate)