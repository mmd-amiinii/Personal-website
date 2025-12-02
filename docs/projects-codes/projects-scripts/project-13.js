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