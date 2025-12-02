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