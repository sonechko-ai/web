function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function animateCircle() {
    let circle = document.querySelector('.circle');
    setInterval(() => {
        circle.style.backgroundColor = getRandomColor();
    }, 1900); // 19 * 100ms
}
