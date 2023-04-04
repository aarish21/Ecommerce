const wrapper = document.querySelector(".slider-wrapper")
const menuItems = document.querySelectorAll(".menu-items")

menuItems.forEach((item,index) => {
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100*index}vw)`;
    });
});