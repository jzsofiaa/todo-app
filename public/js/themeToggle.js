const body = document.body;

document.getElementById('icon').addEventListener('click', () => {
    body.classList.toggle('theme-dark');

    if (body.classList.contains('theme-dark')) {
        localStorage.setItem('currentTheme', 'active');
    } else {
        localStorage.removeItem('currentTheme');
    }
})

if (localStorage.getItem('currentTheme')) {
    body.classList.add('theme-dark');
}

