document.getElementById('check').addEventListener('click', function() {
    let email = document.getElementById('email').value;
    let result = document.getElementById('result');

    if (email.includes('@') && (email.endsWith('.com'))) {
        result.textContent = "Email hợp lệ";
        result.className = "hople";
    } else {
        result.textContent = "Email không hợp lệ";
        result.className = "khonghople";
    }
});