const openMenu = document.getElementById("openMenu");
const menuMobile = document.getElementById("menuMobile");
const pop_up = document.querySelector(".pop-up");
const pop_up_img = document.querySelector(".pop-up img");
const pop_up_span = document.querySelector(".pop-up span");
const menuItem = document.querySelectorAll(".header__link");
const image = document.querySelectorAll(".img-container img");

menuItem.forEach((li) => {
    li.onclick = () => {
        menuMobile.classList.remove("active")
        openMenu.classList.remove("active")
        document.body.classList.remove("lock")
    }
})

openMenu.onclick = () => {
    menuMobile.classList.toggle("active")
    openMenu.classList.toggle("active")
    document.body.classList.toggle("lock")
}

image.forEach(img => {
    img.onclick = () => {
        pop_up.style.display = "block";
        pop_up_img.src = img.getAttribute('src');
    }
});

pop_up_span.onclick = () => {
    pop_up.style.display = "none";
}