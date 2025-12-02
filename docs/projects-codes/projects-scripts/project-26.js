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