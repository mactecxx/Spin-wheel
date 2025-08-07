const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const segments = [0, 1, 2, 5, 10, 25, 50];
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#E67E22", "#2ECC71"];
const spinButton = document.getElementById("spin");
const resultText = document.getElementById("result");

const radius = 200;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const angleStep = (2 * Math.PI) / segments.length;

function drawWheel() {
    for (let i = 0; i < segments.length; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, i * angleStep, (i + 1) * angleStep);
        ctx.fillStyle = colors[i];
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(i * angleStep + angleStep / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 18px sans-serif";
        ctx.fillText(segments[i], radius - 10, 10);
        ctx.restore();
    }
}

let angle = 0;
let spinning = false;

function spinWheel() {
    if (spinning) return;
    spinning = true;
    const spinAngle = Math.random() * 360 + 720; // 2–3 full spins
    const duration = 3000; // 3 seconds
    const start = performance.now();

    function animate(time) {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);
        angle = spinAngle * progress;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.translate(-centerX, -centerY);
        drawWheel();
        ctx.restore();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            const finalAngle = (angle % 360) * (Math.PI / 180);
            const selected = segments.length - Math.floor((finalAngle % (2 * Math.PI)) / angleStep) - 1;
            resultText.textContent = "Result: " + segments[selected];
            spinning = false;
        }
    }

    requestAnimationFrame(animate);
}

spinButton.addEventListener("click", spinWheel);
drawWheel();
