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