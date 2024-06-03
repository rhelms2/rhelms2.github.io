
/*
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    let x = 0;
    var radius = 10;
    var archHeight = 100;
    var speed = 5;
    var centerY = height / 2;

    const speedInput = document.getElementById('speed');
    const radiusInput = document.getElementById('radius');
    const arcHeightInput = document.getElementById("archeight");

    speedInput.addEventListener('input', (e) => {
        if (speed < 0) {
            speed = -parseInt(e.target.value, 10);
        }
        else {
            speed = parseInt(e.target.value, 10);
        }
    });

    radiusInput.addEventListener('input', (e) => {
        radius = parseInt(e.target.value, 10);
    });

    arcHeightInput.addEventListener('input', (e) => {
        archHeight = parseInt(e.target.value, 10);
    });


    function drawDot(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Calculate y position based on an arch function
        const y = centerY - archHeight * Math.sin((Math.PI * x) / width);

        drawDot(x, y);

        x += speed;

        if (x > width || x <= 0) {
            speed = -speed;
        }
       
        requestAnimationFrame(animate);
    }

    animate();
});
*/

class MetronomeAnimation {
    constructor(canvasId, speedInputId, radiusInputId, archHeightInputId) {
        console.log("Creating visualizer");
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.x = 0;
        this.speed = 2;
        this.radius = 10;
        this.archHeight = this.height - this.radius;
        this.centerY = this.height;

        this.speedInput = document.getElementById(speedInputId);
        this.radiusInput = document.getElementById(radiusInputId);
        this.archHeightInput = document.getElementById(archHeightInputId);

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.speedInput.addEventListener('input', (e) => {
            if (this.speed < 0) {
                this.speed = -parseInt(e.target.value, 10);
            }
            else {
                this.speed = parseInt(e.target.value, 10);
            }
        });

        this.radiusInput.addEventListener('input', (e) => {
            this.radius = parseInt(e.target.value, 10);
        });
        
        this.archHeightInput.addEventListener('input', (e) => {
            this.archHeight = parseInt(e.target.value, 10);
        });
    }

    drawDot(x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.ctx.closePath();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Calculate y position based on an arch function
        const y = this.centerY - this.archHeight * Math.sin((Math.PI * this.x) / this.width);

        this.drawDot(this.x, y);

        this.x += this.speed;
        if (this.x > this.width || this.x <= 0) {
            this.speed = -this.speed;
        }

        requestAnimationFrame(() => this.animate());
    }

    start() {
        this.animate();
    }

    reset() {
        this.x = this.width / 2;
    }
}

// animation = new MetronomeAnimation('canvas', 'speed', 'radius', 'archeight');
// animation.start();