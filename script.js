document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const countdown = document.getElementById('countdown');
    const menuBtn = document.getElementById('menu-btn');
    const navOverlay = document.getElementById('nav-overlay');
    const heroVideo = document.getElementById('hero-video');
    const aboutSection = document.querySelector('.about-section');
    const blogSection = document.getElementById('blog-section');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    // Animación de intro inicial
    let count = 100;
    const duration = 2000; // 2 segundos en milisegundos
    const interval = duration / 99; // Intervalo para cada número (de 100 a 1)
    
    // Función para actualizar el contador
    const updateCounter = () => {
        countdown.textContent = count;
        count--;
        
        if (count < 1) {
            clearInterval(timer);
            // Cuando termina la cuenta regresiva, desvanecemos el número
            countdown.classList.add('fade');
            
            // Después de que se desvanece el número, subimos el fondo como cortina
            setTimeout(() => {
                intro.classList.add('hide');
                
                // Mostrar el botón de menú después de que termine la animación
                setTimeout(() => {
                    menuBtn.style.opacity = '1';
                    menuBtn.style.visibility = 'visible';
                }, 1000);
            }, 500);
        }
    };
    
    // Iniciar la cuenta regresiva
    updateCounter();
    const timer = setInterval(updateCounter, interval);
    
    // Funcionalidad del menú hamburguesa
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Prevenir scroll cuando el menú está abierto
        if (navOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Funcionalidad para cambiar imágenes al pasar el mouse por los elementos del menú
    const navLinks = document.querySelectorAll('.main-nav a');
    const menuImages = document.querySelectorAll('.menu-image');
    
    // Función para mostrar la imagen correspondiente
    const showImage = (imageId) => {
        // Ocultar todas las imágenes
        menuImages.forEach(img => {
            img.classList.remove('active');
        });
        
        // Mostrar la imagen correspondiente
        const targetImage = document.getElementById(`${imageId}-img`);
        if (targetImage) {
            targetImage.classList.add('active');
        }
    };
    
    // Asignar eventos de hover a los enlaces del menú
    navLinks.forEach(link => {
        // Al pasar el mouse por encima
        link.addEventListener('mouseenter', () => {
            const imageId = link.getAttribute('data-image');
            showImage(imageId);
        });
        
        // Al hacer clic en los enlaces (cerrar menú)
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Mostrar la imagen de inicio por defecto
    showImage('inicio');

    // Efecto de parallax y transición suave al hacer scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Efecto parallax en el video del hero
        if (scrollPosition < window.innerHeight) {
            heroVideo.style.transform = `translateX(-50%) translateY(calc(-50% + ${scrollPosition * 0.1}px))`;
            heroVideo.style.opacity = 1 - (scrollPosition / (window.innerHeight * 0.8));
        }
        
        // Mostrar/ocultar el botón de menú según la posición del scroll
        if (scrollPosition > 100) {
            menuBtn.style.opacity = '0.8';
        } else {
            menuBtn.style.opacity = '1';
        }
    });
    
    // Añadir enlaces de navegación para la sección about
    document.querySelector('.main-nav a[data-image="acerca"]').addEventListener('click', (e) => {
        e.preventDefault();
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Añadir enlace de navegación para la sección de blog
    document.querySelector('.main-nav a[data-image="blog"]').addEventListener('click', (e) => {
        e.preventDefault();
        blogSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Funcionalidad de filtrado para los artículos del blog
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Añadir clase active al botón clickeado
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Filtrar las tarjetas según la categoría
            blogCards.forEach(card => {
                if (filter === 'todos' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Funcionalidad de Leer más/menos para los artículos
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textContainer = btn.parentElement.querySelector('.blog-text');
            textContainer.classList.toggle('expanded');
            
            if (textContainer.classList.contains('expanded')) {
                btn.textContent = 'Leer menos';
            } else {
                btn.textContent = 'Leer más';
            }
        });
    });
});