//your JS code here. If required.
let currentCircle = 1;
const totalCircles = 5;
const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function updateProgress() {
    // Remove active class from all circles
    circles.forEach((circle, index) => {
        if (index < currentCircle) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Enable or disable buttons based on current progress
    if (currentCircle === 1) {
        prevButton.disabled = true;
    } else if (currentCircle === totalCircles) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}

// Next button functionality
nextButton.addEventListener('click', () => {
    if (currentCircle < totalCircles) {
        currentCircle++;
        updateProgress();
    }
});

// Previous button functionality
prevButton.addEventListener('click', () => {
    if (currentCircle > 1) {
        currentCircle--;
        updateProgress();
    }
});

// Initialize progress bar on load
updateProgress();
