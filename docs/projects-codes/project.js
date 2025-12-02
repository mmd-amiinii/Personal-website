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

// project 2

const circels = document.querySelectorAll(".project-2-cicle-side");
const texts = document.querySelector(".project-2-right-side");
const search_icon = document.querySelector(".magnify-icon");
const search_box = document.querySelector(".project-2-search-box");
const icon = document.querySelector(".project-2-icon");
const title = document.querySelector(".project-2-title");
const card = document.querySelector(".project-2-card");
const menu = document.querySelector(".project-2-menu");
// hover text and change it's color
circels.forEach((elem, index) =>{
    elem.addEventListener("mouseenter", ()=> {
        texts.children[index].style.color = "#6098cd"
    })
})

circels.forEach((elem, index) =>{
    elem.addEventListener("mouseleave", ()=> {
        texts.children[index].style.color = "#666666"
    })
})

// function make input visable 
function visable_input () {
    title.classList.toggle("hidden");
    icon.classList.toggle("hidden");
    search_box.classList.toggle("opacity-0")
    search_box.classList.toggle("opacity-100");
    if(+(search_box.style.right.slice(0,2)) < 65){
        search_box.style.right = "65px";
    }
    else {
        search_box.style.right = "-20px";
    }
}
search_icon.addEventListener("click", visable_input)

// function make menu visable 
function visable_menu () {
    card.classList.toggle("poject-7-come-left-animation");
}

icon.addEventListener("click", visable_menu)

const input_label = $.querySelector(".project-10-input-label");
const upload_input = $.getElementById("upload-input");
const images = $.querySelectorAll(".project-10-input-label img");
const image_name = $.querySelector(".project-10-img-name");
const upload_btn = $.querySelector(".project-10-upload-btn");
const loading_bar = $.querySelector(".project-10-loading-bar");

upload_input.addEventListener("change", ()=>{
    images[0].classList.add("hidden");
    image_name.textContent = upload_input.value;
});

upload_btn.addEventListener("click", ()=>{
    if(image_name.textContent){
        loading_bar.classList.add("loading")
        image_name.classList.add("hidden");
        images[1].classList.remove("opacity-0");
        images[1].classList.add("rotate");
        setTimeout(()=>{
            images[1].classList.add("opacity-0");
            images[2].classList.remove("opacity-0");
            upload_btn.textContent = "Done"
        },3000)  
    }
    
})


const word = $.querySelector(".project-7-word");
const word_card = $.querySelector(".project-7-word-card")
word.addEventListener("mouseenter", ()=> {
    word_card.classList.remove("opacity-0");
    word_card.style.top = "-143px";
    
})

word.addEventListener("mouseleave", ()=> {
    word_card.style.top = "-155px";
    setTimeout(()=> {
    word_card.classList.add("opacity-0")
    },40)
})

// project 3
const images_container = $.querySelector(".project-3-images-container");
const overlay = $.querySelector(".project-3-overlay");
const plus_container = $.querySelector(".project-3-plus-container");
const plus = $.querySelector(".project-3-plus");
const profile = $.querySelector(".project-3-profile");
const top_section = $.querySelector(".project-3-top-section");
const bottom_section = $.querySelector(".project-3-bottom-section");
const close_icon = $.querySelector(".project-3-close");
const close_after = $.querySelector(".project-3-close::after");
images_container.removeChild(overlay);

images_container.childNodes.forEach(img => {
    img.addEventListener("mouseenter", ()=>{
        console.log(overlay);
        img.appendChild(overlay);
        overlay.classList.remove("opacity-0");
        plus_container.classList.add("project-3-zoom-in");
        plus_container.classList.remove("project-3-zoom-out");
    })

    img.addEventListener("mouseleave", ()=> {
        plus_container.classList.remove("project-3-zoom-in");
        plus_container.classList.add("project-3-zoom-out");
    })
})

plus_container.addEventListener("click", ()=>{
    // top section come down
    top_section.style.top = "0px";
    bottom_section.style.bottom = "0px";
    profile.style.bottom = "-50px";
    close_icon.style.top = "10px"
    profile.classList.remove("invisible");
    top_section.classList.remove("invisible");
    bottom_section.classList.remove("invisible");
    // changing profile image
    const element_class = plus_container.parentElement.parentElement.classList;
    let element_bg_img;
    element_class.forEach((elem_class)=>{
        if(elem_class.slice(0,3) == "bg-"){
            element_bg_img = elem_class;            
        }
    }) 
    profile.style.backgroundImage = element_bg_img.slice(4,element_bg_img.length-1);    
})

// close overlay when close icon is clicked
close_icon.addEventListener("click", close_overlay)

function close_overlay (){
    close_icon.style.top = "-80px"
    setTimeout(()=>{
        profile.style.bottom = "200px";
            setTimeout(()=>{
                top_section.style.top = "-180px";
                bottom_section.style.bottom = "-220px";
                top_section.classList.add("invisible");
                bottom_section.classList.add("invisible");
                profile.classList.add("invisible");
            },200)
    },200)
}

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


// project 20
const mail_icon = document.querySelector(".project-6-icon-mail")
const send_btn = document.querySelector(".project-6-send");
const reset_btn = document.querySelector(".project-6-reset");
const plane_icon = document.querySelector(".project-6-icon-plane");
const circle = document.querySelector(".project-6-circle");
const circle_border = document.querySelector(".project-6-circle-border");

send_btn.addEventListener("click", ()=>{
    circle.classList.add("circle-animation");
    circle_border.classList.add("circle-border-animation")
    mail_icon.classList.add("project-6-vanish-mail");
    setTimeout(() => {
        plane_icon.classList.add("project-6-appear-plane")
    }, 900);
    // send mail text disapear
    setTimeout(()=>{
        send_btn.firstElementChild.style.opacity = 0;
        send_btn.style.width = '40px';
        setTimeout(()=>{
            // reset button appear
            reset_btn.style.display = "block";
            setTimeout(() => {
                reset_btn.style.width = "200px";
                reset_btn.firstElementChild.style.opacity = 1;
            }, 500);
            
        },1000)
    }, 800);
})

reset_btn.addEventListener("click", ()=>{
    circle.classList.remove("project-6-circle-animation");
    circle_border.classList.remove("project-6-circle-border-animation");
    mail_icon.classList.remove("project-6-vanish-mail");
    plane_icon.classList.remove("project-6-appear-plane");
    reset_btn.firstElementChild.style.opacity = 0;
    setTimeout(() => {
        reset_btn.style.width = "40px";
    }, 500);
    setTimeout(()=>{
        reset_btn.style.display = "none";
    },800)
    
    setTimeout(() => {
        send_btn.style.width = "200px";
        setTimeout(() => {
            send_btn.firstElementChild.style.opacity = 1;
        }, 500);
    }, 900);
    

})

// project-23
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


// project 26
let current_index = 0;
const cards = document.querySelector(".project-9-cards-container").children;
const buttons = document.querySelectorAll(".project-9-btn");
buttons.forEach(btn =>{
    btn.addEventListener("click", card_swiper)
})

function card_swiper(){
    cards[current_index].classList.remove("project-9-enter-fade");
    cards[current_index].classList.add("project-9-exit-fade");
    setTimeout(()=>{
        cards[current_index].classList.add("hidden");
        current_index = (current_index == 2) ? 0 : current_index + 1;
        console.log(current_index);
        setTimeout(()=>{
            cards[current_index].classList.remove("hidden");
            cards[current_index].classList.add("project-9-enter-fade");
        },400)
        
    },500)
    
}


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
