document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MENU MOBILE ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Ícone vira X
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Fechar menu ao clicar no link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- 2. SMOOTH SCROLL (Rolagem Suave) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 3. SPOTIFY FLUTUANTE ---
    const spotifyBtn = document.getElementById('toggle-spotify');
    const spotifyBox = document.getElementById('spotify-box');
    const minimizeBtn = document.getElementById('minimize-spotify');

    if (spotifyBtn && spotifyBox) {

        function togglePlayer() {
            spotifyBox.classList.toggle('active');

            // Troca o ícone do botão
            const icon = spotifyBtn.querySelector('i');
            if (spotifyBox.classList.contains('active')) {
                icon.classList.remove('fa-spotify');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-spotify');
            }
        }

        spotifyBtn.addEventListener('click', togglePlayer);

        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => {
                spotifyBox.classList.remove('active');
                const icon = spotifyBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-spotify');
            });
        }
    }
});