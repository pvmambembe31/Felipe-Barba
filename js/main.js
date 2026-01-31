document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Dica: Adicione estilos CSS para '.nav-links.active' para mostrar o menu no mobile
        });
    }

    // 2. Smooth Scroll para Links Internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Efeito Parallax simples na imagem Hero (Opcional - Extra "Pro")
    const heroImg = document.querySelector('.hero-image img');
    
    document.addEventListener('mousemove', (e) => {
        if(window.innerWidth > 768) {
            const x = (window.innerWidth - e.pageX * 2) / 90;
            const y = (window.innerHeight - e.pageY * 2) / 90;
            
            if(heroImg) {
                heroImg.style.transform = `translateX(${x}px) translateY(${y}px)`;
            }
        }
    });
});