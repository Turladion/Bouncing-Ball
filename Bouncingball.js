// Set up the canvas element
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Set up the context and ball
const ctx = canvas.getContext("2d");
const ball = {
  x: 50,
  y: 50,
  radius: 20,
  vx: 5,
  vy: 2,
};

// Define the animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Move the ball
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Bounce the ball off the borders
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.vx = -ball.vx;
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.vy = -ball.vy;
  }

  // Draw the ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();

  // Request the next frame of animation
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
