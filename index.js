const scrollToTop = document.getElementById("scrollup")

scrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

const scrollToTop1 = document.getElementById("btn2")

scrollToTop1.addEventListener("click", function () {
    window.scrollTo({
        top: 325,
        left: 0,
        behavior: "smooth"
    })
})

const scrollToTop2 = document.getElementById("btn1")

scrollToTop2.addEventListener("click", function () {
    window.scrollTo({
        top: 1250,
        left: 0,
        behavior: "smooth"
    })
})

const scrollToTop3 = document.getElementById("btn4")

scrollToTop3.addEventListener("click", function () {
    window.scrollTo({
        top: 1250,
        left: 0,
        behavior: "smooth"
    })
})

// discord =>

document.getElementById("social1").onclick = function() {
    window.open(
     "https://discord.gg/d56XAWS8Tz", "_blank");
}

document.getElementById("social2").onclick = function() {
    window.open(
     "https://instagram.com/wolver_esports", "_blank");
}

document.getElementById("social4").onclick = function() {
    window.open(
     "https://twitter.com/wolver_esports", "_blank");
}

