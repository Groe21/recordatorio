let currentIndex = 0;
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

function showImage(index) {
    currentIndex = index;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

document.getElementById('prevButton').addEventListener('click', () => {
    showImage(currentIndex - 1);
});

document.getElementById('nextButton').addEventListener('click', () => {
    showImage(currentIndex + 1);
});
