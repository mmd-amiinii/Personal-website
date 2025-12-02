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