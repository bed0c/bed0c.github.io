// Get the canvas element
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Function to resize canvas to full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initial resize
resizeCanvas();

// Update canvas size on window resize
window.addEventListener('resize', resizeCanvas);

// Create an array of characters
const characters = "0123456789ABCDEF".split(''); // Hexadecimal characters

// Calculate number of columns based on canvas width
const columnWidth = 20;
const columns = Math.floor(canvas.width / columnWidth);

// Initialize the y positions of the columns
const yPositions = Array(columns).fill(0).map(() => Math.random() * canvas.height);

// Update the matrix animation
function updateMatrix() {
    // Set the background color with slight transparency
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color and font
    ctx.fillStyle = "green";
    ctx.font = "12px monospace"; // Changed to monospace for better alignment

    // Loop through each column
    for (let i = 0; i < columns; i++) {
        // Select a random character from the array
        const character = characters[Math.floor(Math.random() * characters.length)];

        // Set the y position of the current column
        const y = yPositions[i];

        // Draw the character at the current position
        ctx.fillText(character, i * columnWidth, y);

        // Move the column down by 20 units
        yPositions[i] += 20;

        // Reset the position if it reaches the bottom of the canvas
        if (yPositions[i] > canvas.height && Math.random() > 0.98) {
            yPositions[i] = 0;
        }
    }
}

// Render the matrix animation
function renderMatrix() {
    requestAnimationFrame(renderMatrix);
    updateMatrix();
}

// Start the animation
renderMatrix();
