document.querySelector(".menu-btn").addEventListener("click", function(event) {
    const menuBtn = event.target;
    menuBtn.classList.add("break");

    for (let i = 0; i < 20; i++) { // Creates multiple particles
        const particle = document.createElement("div");
        particle.classList.add("particle");
        
        // Position particles at the button's location
        const x = event.clientX;
        const y = event.clientY;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Random explosion directions
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        particle.style.setProperty("--dx", `${dx}px`);
        particle.style.setProperty("--dy", `${dy}px`);
        
        document.body.appendChild(particle);

        // Remove particles after animation
        setTimeout(() => {
            particle.remove();
        }, 700);
    }

    // Reset the button after breaking
    setTimeout(() => {
        menuBtn.classList.remove("break");
    }, 800);
});
