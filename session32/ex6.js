document.addEventListener('DOMContentLoaded', function() {
    let increaseBtn = document.getElementById('increase');
    let decreaseBtn = document.getElementById('decrease');
    let text = document.getElementById('text');
    let fontSize = 16;

    increaseBtn.addEventListener('click', function() {
        fontSize += 2;
        text.style.fontSize = fontSize + 'px';
    });

    decreaseBtn.addEventListener('click', function() {
        fontSize -= 2;
        text.style.fontSize = fontSize + 'px';
    });
});