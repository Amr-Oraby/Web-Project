
const links = document.querySelector("header .links");
const bars = document.querySelector(".bars");
bars.onclick = function () {
    if (!links.classList.contains("show")) {
        links.classList.add("show");
    } else {
        links.classList.remove("show");
    }
};

window.onresize = function () {
    if (window.innerWidth <= 992) {
        links.classList.remove("show");
    }
};

// Run once on load
window.onresize();




// form validation 

const msg1 = document.querySelector(".msg1");
const msg2 = document.querySelector(".msg2");
const form = document.querySelector(".discount form");
const userName = document.querySelector(".userName");
const userNumber = document.querySelector(".userNumber");

form.onsubmit = function (e) {
    e.preventDefault();
    if (userName.value.length < 3) { msg1.style.display = "block"; } else { msg1.style.display = "none"; }
    if (userNumber.value.length != 11) { msg2.style.display = "block"; } else { msg2.style.display = "none"; }
    if (!Number(userNumber.value)) { alert("enter a valid number"); }
}

