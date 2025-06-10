const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

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
document.getElementById('menu-btn').addEventListener('click', function(e) {
    const button = e.target;
    const rect = button.getBoundingClientRect();
    // Spawn 20 particles at the button center
    for (let i = 0; i < 20; i++) {
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
function createParticles(event) {
    if (particlesArray.length > 100) particlesArray.splice(0, 10); // Prevent overflow
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle(event.clientX, event.clientY, Math.random() * 5 + 1, "white"));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.size <= 0.3) {
            particlesArray.splice(index, 1);
        }
    });
    requestAnimationFrame(animateParticles);
}

window.addEventListener("mousemove", createParticles);
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
