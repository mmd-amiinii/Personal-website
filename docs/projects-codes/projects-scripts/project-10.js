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

