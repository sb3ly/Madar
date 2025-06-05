document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const mainNav = document.getElementById('main-nav');
    let overlay = document.querySelector('.overlay');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
    }

    if (burgerIcon && mainNav) {
        function toggleMenu() {
            mainNav.classList.toggle('active');
            overlay.classList.toggle('active');
            // هذا السطر هو مفتاح تطبيق الـ blur
            document.body.classList.toggle('menu-active');

            const icon = burgerIcon.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }

        burgerIcon.addEventListener('click', toggleMenu);

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        overlay.addEventListener('click', toggleMenu);
    }
});