// project 4
const project_4_checkboxes = document.querySelectorAll(".project-4-checkbox-container [class^='project-4-checkbox-']");
const project_4_pointer = document.querySelector(".project-4-pointer");
const project_4_container = document.querySelector(".project-4-checkbox-container");
const project_4_container_position = project_4_container.getBoundingClientRect();
const project_4_sliders = document.querySelectorAll("div[class ^= 'project-4-slider-']");

project_4_pointer.style.left = project_4_checkboxes[0].getBoundingClientRect().x - project_4_container_position.x + 5 + "px";

project_4_checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", ()=> { 
        // pointer position
        checkbox_position_left = checkbox.getBoundingClientRect().x - project_4_container_position.x;
        project_4_pointer.style.left = checkbox_position_left + 5 + "px";  
        // slider positon
        switch (index) {
            case 1:
                project_4_sliders[0].classList.remove("left-full");
                project_4_sliders[1].classList.add("left-full");
                break;
            case 2:
                project_4_sliders[0].classList.add("left-full");
                project_4_sliders[1].classList.remove("left-full");
                break;
            default:
                project_4_sliders[0].classList.add("left-full");
                project_4_sliders[1].classList.add("left-full");
                break;
        }
    })
})