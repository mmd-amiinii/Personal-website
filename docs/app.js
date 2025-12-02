const $ = document;

function select_element_by_id(element_id){
    return $.getElementById(element_id)
}

function select_element_by_class (element_class){
    return $.querySelector(`.${element_class}`);
}

function select_all_elements_by_class (element_class){
    return $.querySelectorAll(`${element_class}`);
}

// select projec components
const main_container = select_element_by_class("container");
const menu_container = select_all_elements_by_class("menu-container");
const mobile_menu_container = select_element_by_class("mobile-menu-container");
const mobile_menu = select_element_by_class("mobile-menu");
const hero_header_container = select_element_by_class("hero-header-container");
const about_container = select_element_by_class("about-container");
const skill_container = select_element_by_class("skills-container");
const project_contaienr = select_element_by_class("projects-container");
const portfolio_container = select_element_by_class("portfolio-container");
const contact_container = select_element_by_class("contact-container");
const skills_nav = select_all_elements_by_class("[class *= 'nav-fill']");

// menu section codes
const sections = [hero_header_container, about_container, skill_container, portfolio_container, contact_container];
const menu_links = select_all_elements_by_class(".menu .menu-link");
const skills_nav_percentages = ["80%", "70%", "40%", "40%", "50%"];
// menu animation related to window scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const sectionId = entry.target.id;
            menu_links.forEach(link => {
                if(link.classList.contains(sectionId)){
                    link.firstElementChild.firstElementChild.classList.add("rect-animation");
                    if(sectionId === "skills"){
                        skills_nav.forEach((nav, index) => {
                            nav.style.width = skills_nav_percentages[index];
                        })
                    }
                    else {
                        skills_nav.forEach((nav, index) => {
                            nav.style.width = "0%";
                        })
                    }
                }
                else {
                    link.firstElementChild.firstElementChild.classList.remove("rect-animation")
                }
            })
        }
    });
}, {
    threshold: 0.3
});
sections.forEach(section => {
    observer.observe(section);
})


// menu links clicked
menu_links.forEach((link, link_index) => {
    link.addEventListener("click", ()=> {
        if(link_index === 0){
            main_container.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
        else if( link_index === 1){
            about_container.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
        else if( link_index === 2){
            skill_container.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
        else if( link_index === 3){
            project_contaienr.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
        else{
            contact_container.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
    })
})



// mobile menu
const mobile_menu_icon_container = select_element_by_class("mobile-menu-icon-container");
const mobile_menu_lines = select_all_elements_by_class(".mobile-menu-icon-container div[class ^= 'line-'");
const mobile_menu_links = select_all_elements_by_class(".mobile-menu li[class = 'mobile-menu-links']");
const device_height = document.documentElement.clientHeight;
mobile_menu_icon_container.addEventListener("click", ()=> {
    main_container.classList.toggle("device-height")
    mobile_menu_container.classList.toggle("hidden");
    mobile_menu_lines[2].classList.toggle("opacity-0");
    mobile_menu_lines[0].classList.toggle("y-center");
    mobile_menu_lines[0].classList.toggle("rotate-left");
    mobile_menu_lines[1].classList.toggle("rotate-right");
})

mobile_menu_links.forEach((link, link_index) => {
    link.addEventListener("click", ()=> {
        mobile_menu_icon_container.click()
        if(link_index === 0){
            main_container.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
        else if( link_index === 1){
            about_container.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
        else if( link_index === 2){
            skill_container.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
        else if( link_index === 3){
            project_contaienr.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
        else{
            contact_container.scrollIntoView({
                behavior : "smooth",
                block : "start"
            })
        }
    })
})



// header image animation
const header_image = select_element_by_class("hero-header-image");
header_image.classList.add("header-img-animation")



// load more project
const show_more_project_btn = select_element_by_class("show-more-project");
let setup = portfolio_container.offsetHeight;  
let current_height = setup;

portfolio_container.style.height = setup + "px";


function load_more_project() {
    const full_height = portfolio_container.scrollHeight;
    const isLessState = show_more_project_btn.firstElementChild.textContent === "Show Less";
    if (isLessState) {
        current_height = setup;
        portfolio_container.style.height = setup + "px";
        show_more_project_btn.firstElementChild.textContent = "Show More";
        return;
    }
    current_height += setup;

    // مقدار اختلاف برای جلوگیری از کلیک اضافه آخر
    const tolerance = 10; // 10px تلورانس

    if (current_height + tolerance >= full_height) {
        current_height = full_height;
        portfolio_container.style.height = full_height + "px";
        show_more_project_btn.firstElementChild.textContent = "Show Less";
    } 
    else {
        portfolio_container.style.height = current_height + "px";
    }
}

show_more_project_btn.addEventListener("click", load_more_project);

