let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toogle")

menuToggle.addEventListener("click", () => {
    console.log("top");
    menuSection.classList.toggle("on", show)
    show = !show;
})