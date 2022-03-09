var object = document.getElementById("object");

window.addEventListener("keydown", (e) => {
    var objectLeft = parseInt(getComputedStyle(object).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && objectLeft > 0)
        object.style.left = objectLeft - 30 + "px";
    if (e.key == "ArrowRight" && objectLeft < 900)
        object.style.left = objectLeft + 30 + "px";
})