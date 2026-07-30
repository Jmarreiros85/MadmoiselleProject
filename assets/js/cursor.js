// ==========================================
// CUSTOM CURSOR
// ==========================================

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

// Se não existir cursor (ex.: mobile)
if (cursor && cursorDot) {

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    // Atualiza posição do rato
    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";

    });

    // Movimento suave do círculo
    function animateCursor() {

        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;

        cursor.style.left = currentX + "px";
        cursor.style.top = currentY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    // Elementos interativos
    const interactiveElements = document.querySelectorAll(
        "a, button, .btn, .project-card, .service-card, .gallery-item"
    );

    interactiveElements.forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.style.width = "60px";
            cursor.style.height = "60px";
            cursor.style.borderColor = "#BF6F89";

        });

        item.addEventListener("mouseleave", () => {

            cursor.style.width = "34px";
            cursor.style.height = "34px";
            cursor.style.borderColor = "#D98AA3";

        });

    });

    // Cursor sai da janela
    document.addEventListener("mouseleave", () => {

        cursor.style.opacity = "0";
        cursorDot.style.opacity = "0";

    });

    document.addEventListener("mouseenter", () => {

        cursor.style.opacity = "1";
        cursorDot.style.opacity = "1";

    });

}