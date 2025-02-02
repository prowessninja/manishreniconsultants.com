document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    // Smooth fade-in effect for text content
    const textBlocks = document.querySelectorAll(".text-content p, .text-content h2, .text-content h3");
    textBlocks.forEach((block, index) => {
        block.style.opacity = "0";
        block.style.transform = "translateY(20px)";
        setTimeout(() => {
            block.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
        }, 500 + index * 300);
    });

    // Smooth zoom-in effect for the graphic
    const graphic = document.querySelector(".full-size-image");
    if (graphic) {
        graphic.style.opacity = "0";
        graphic.style.transform = "scale(0.9)";
        setTimeout(() => {
            graphic.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
            graphic.style.opacity = "1";
            graphic.style.transform = "scale(1)";
        }, 800);
    }
});
