const btn = document.querySelector('.btn1');

btn.addEventListener('click', toggleHumberger);

function toggleHumberger() {
    btn.classList.toggle('active');
} 