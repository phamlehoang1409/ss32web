let progress = 0;

function company(value) {
    progress = Math.min(100, Math.max(0, progress + value));
    let progressBar = document.getElementById('progress-bar');
    progressBar.style.width = progress + '%';
    progressBar.style.backgroundColor = `rgba(76, 175, 80, ${progress / 100})`;
    progressBar.textContent = progress + '%';
}