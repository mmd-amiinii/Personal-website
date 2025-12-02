// project 27
const tasks = document.querySelectorAll(".project-12-task-name p");
const checkboxes = document.querySelectorAll(".project-12-task-checkbox");



tasks.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("project-12-task_checked");
        // access to the check box via element parent
        const first_elemetn_sibling = element.parentElement.nextElementSibling.firstElementChild;
        const second_element_sibling = element.parentElement.nextElementSibling.lastElementChild;
        first_elemetn_sibling.classList.toggle("project-12-checkbox_checked");
        second_element_sibling.classList.toggle("project-12-appear-icon");
    })
})

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        const element = checkbox.previousElementSibling.firstElementChild;
        element.classList.toggle("project-12-task_checked");
        // access to the check box via element parent
        const first_elemetn_sibling = element.parentElement.nextElementSibling.firstElementChild;
        const second_element_sibling = element.parentElement.nextElementSibling.lastElementChild;
        first_elemetn_sibling.classList.toggle("project-12-checkbox_checked");
        second_element_sibling.classList.toggle("project-12-appear-icon");
    })
})
