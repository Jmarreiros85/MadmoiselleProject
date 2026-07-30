// ==========================
// CUSTOM CURSOR
// ==========================

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

// Desativa em dispositivos táteis
if (window.matchMedia("(pointer: fine)").matches && cursor && cursorDot) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";

    });

    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    // Efeito hover
    const hoverElements = document.querySelectorAll(
        "a, button, .btn, .gallery-img, .projects article, .service"
    );

    hoverElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursor.style.width = "70px";
            cursor.style.height = "70px";
            cursor.style.borderColor = "#b58c5a";
            cursor.style.background = "rgba(181,140,90,0.15)";

        });

        element.addEventListener("mouseleave", () => {

            cursor.style.width = "35px";
            cursor.style.height = "35px";
            cursor.style.borderColor = "#222";
            cursor.style.background = "transparent";

        });

    });

} else {

    // Esconde o cursor personalizado em dispositivos táteis
    if (cursor) cursor.style.display = "none";
    if (cursorDot) cursorDot.style.display = "none";

}