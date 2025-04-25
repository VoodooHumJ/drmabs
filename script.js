document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const countdown = document.getElementById('countdown');
    const menuBtn = document.getElementById('menu-btn');
    const navOverlay = document.getElementById('nav-overlay');
    
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

    
});