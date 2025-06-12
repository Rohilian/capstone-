// Get the canvas and context
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Ensure canvas is always sized to the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Particle class for canvas-based mouse-following effect
class Particle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particlesArray = [];

// Create particles at the mouse position
function createParticles(event) {
    // Prevent overflow for performance
    if (particlesArray.length > 150) particlesArray.splice(0, 10);
    // event.clientX/Y may be undefined for some touch events
    // Only run if coordinates are valid
    if (typeof event.clientX === 'number' && typeof event.clientY === 'number') {
        for (let i = 0; i < 5; i++) {
            particlesArray.push(
                new Particle(event.clientX, event.clientY, Math.random() * 5 + 1, "white")
            );
        }
    }
}

// Animate and draw all particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particlesArray.length - 1; i >= 0; i--) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
        }
    }
    requestAnimationFrame(animateParticles);
}

// Listen for mouse movement
window.addEventListener("mousemove", createParticles);
// Optionally support touch events:
window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length > 0) {
        createParticles({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
    }
});

// Start animation
animateParticles();

// MENU BUTTON BURST EFFECT (yellow dots)
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) {
    menuBtn.addEventListener('click', function(e) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        // Spawn 20 particles at the button center
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            // Random direction and distance
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 60 + 20;
            particle.style.left = `${rect.left + rect.width / 2}px`;
            particle.style.top = `${rect.top + rect.height / 2}px`;
            particle.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
            particle.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 700);
        }
    });
}
