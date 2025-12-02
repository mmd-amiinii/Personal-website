const project_8_play_button = getElementByQuerySeclector(".project-8-btn-container");
const project_8_circle = getElementByQuerySeclector(".project-8-circle");
const project_8_left_line = getElementByQuerySeclector(".project-8-left-line");
const project_8_right_line = getElementByQuerySeclector(".project-8-right-line");
const project_8_strigth_line = getElementByQuerySeclector(".project-8-straigth-line");
const project_8_left_bracket_after = getElementByQuerySeclector(".project-8-left-bracket-after")
const project_8_left_bracket_before = getElementByQuerySeclector(".project-8-left-bracket-before");
const project_8_right_bracket_after = getElementByQuerySeclector(".project-8-right-bracket-after");
const project_8_rigth_bracket_before = getElementByQuerySeclector(".project-8-right-bracket-before");
const project_8_left_right_bracket_before_after = [project_8_left_bracket_before, project_8_left_bracket_after, project_8_rigth_bracket_before, project_8_right_bracket_after]
const project_8_left_brtacket = getElementByQuerySeclector(".project-8-left-bracket");
const project_8_right_bracket = getElementByQuerySeclector(".project-8-right-bracket");
const project_8_collect = getElementByQuerySeclector(".project-8-collect");
const project_8_moments = getElementByQuerySeclector(".project-8-moments");
const project_8_nothing = getElementByQuerySeclector(".project-8-nothing");

project_8_play_button.addEventListener("click", ()=> {
    project_8_circle.classList.toggle("project-8-circle-animation");
    project_8_left_line.classList.toggle("project-8-lines-animation");
    project_8_right_line.classList.toggle("project-8-lines-animation");
    project_8_strigth_line.classList.toggle("project-8-straigth-line-animation");
    project_8_left_right_bracket_before_after.forEach(element => {
        element.classList.toggle("project-8-brackets-after_before_aniamtion")
    })
    project_8_left_brtacket.classList.toggle("project-8-left-right-animation");
    project_8_right_bracket.classList.toggle("project-8-left-right-animation");
    project_8_collect.classList.toggle("project-8-collect-animation");
    project_8_moments.classList.toggle("project-8-moments-animation");
    project_8_nothing.classList.toggle("project-8-nothing-animation");
    if(project_8_play_button.firstElementChild.textContent === "Play"){
        setTimeout(()=> {
            project_8_play_button.firstElementChild.textContent = "Reset"
        },3000)
    }
    else {
        setTimeout(()=> {
            project_8_play_button.firstElementChild.textContent = "Play"
        },500)
    }
    
    

})


function getElementByQuerySeclector (element_class) {
    return document.querySelector(element_class)
}