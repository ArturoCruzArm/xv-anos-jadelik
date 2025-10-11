// ========================================
// BACKGROUND MUSIC
// ========================================
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
let musicPlaying = false;
let musicStarted = false;

// Función para iniciar la música
function playBackgroundMusic() {
    if (backgroundMusic && !musicStarted) {
        backgroundMusic.play()
            .then(() => {
                musicPlaying = true;
                musicStarted = true;
                updateMusicButton();
                console.log('Música reproduciendo');
            })
            .catch(error => {
                console.log('Esperando interacción del usuario para reproducir música');
                musicPlaying = false;
                updateMusicButton();
            });
    }
}

// Actualizar apariencia del botón
function updateMusicButton() {
    if (!musicToggle) return;

    if (musicPlaying) {
        musicToggle.classList.remove('paused');
        musicToggle.setAttribute('aria-label', 'Pausar música');
    } else {
        musicToggle.classList.add('paused');
        musicToggle.setAttribute('aria-label', 'Reproducir música');
    }
}

// Iniciar música con el primer clic en la página
document.addEventListener('click', function startMusicOnFirstClick() {
    if (!musicStarted && backgroundMusic) {
        backgroundMusic.play()
            .then(() => {
                musicPlaying = true;
                musicStarted = true;
                updateMusicButton();
                console.log('Música iniciada con interacción del usuario');
            })
            .catch(e => console.log('Error al reproducir:', e));

        // Remover el listener después del primer clic
        document.removeEventListener('click', startMusicOnFirstClick);
    }
}, true);

// Toggle música con el botón
if (musicToggle) {
    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar que se propague al listener del documento

        if (!backgroundMusic) return;

        if (musicPlaying) {
            backgroundMusic.pause();
            musicPlaying = false;
            console.log('Música pausada');
        } else {
            backgroundMusic.play()
                .then(() => {
                    musicPlaying = true;
                    musicStarted = true;
                    console.log('Música reanudada');
                })
                .catch(e => console.log('Error al reproducir:', e));
        }
        updateMusicButton();
    });
}

// ========================================
// PHOTOS ARRAY - Se cargarán desde el JSON
// ========================================
let photos = [];
let invitationPhotos = [];

// Cargar fotos desde el archivo JSON
async function loadPhotosFromJSON() {
    try {
        const response = await fetch('seleccion-fotos-jadelik-2025-10-08.json');
        const data = await response.json();

        // Filtrar solo fotos para invitación
        const fotosInvitacion = data.selecciones
            .filter(foto => foto.invitacion === true)
            .map(foto => foto.archivo);

        // Usar las fotos de invitación para todo
        photos = fotosInvitacion;
        invitationPhotos = fotosInvitacion;

        console.log(`Fotos cargadas desde JSON: ${photos.length} fotos con invitacion: true`);

        // Inicializar las galerías después de cargar las fotos
        initAllGalleries();
    } catch (error) {
        console.error('Error al cargar el JSON:', error);
        // Fallback a fotos por defecto si hay error
        photos = [
            'images/foto7_0001.jpg', 'images/foto7_0002.jpg', 'images/foto7_0003.jpg',
            'images/foto7_0004.jpg', 'images/foto7_0005.jpg', 'images/foto7_0006.jpg',
            'images/foto7_0007.jpg', 'images/foto7_0008.jpg', 'images/foto7_0009.jpg',
            'images/foto7_0011.jpg', 'images/foto7_0012.jpg', 'images/foto7_0013.jpg',
            'images/foto7_0014.jpg', 'images/foto7_0015.jpg', 'images/foto7_0016.jpg',
            'images/foto7_0017.jpg', 'images/foto7_0018.jpg', 'images/foto7_0019.jpg',
            'images/foto7_0020.jpg', 'images/foto7_0021.jpg', 'images/foto7_0023.jpg',
            'images/foto7_0024.jpg', 'images/foto7_0025.jpg', 'images/foto7_0026.jpg',
            'images/foto7_0027.jpg', 'images/foto7_0028.jpg', 'images/foto7_0029.jpg',
            'images/foto7_0030.jpg', 'images/foto7_0031.jpg', 'images/foto7_0032.jpg',
            'images/foto7_0034.jpg', 'images/foto7_0035.jpg', 'images/foto7_0036.jpg',
            'images/foto7_0037.jpg', 'images/foto7_0038.jpg', 'images/foto7_0039.jpg',
            'images/foto7_0040.jpg', 'images/foto7_0041.jpg', 'images/foto7_0042.jpg',
            'images/foto7_0043.jpg', 'images/foto7_0044.jpg', 'images/foto7_0045.jpg',
            'images/foto7_0046.jpg', 'images/foto7_0047.jpg', 'images/foto7_0048.jpg',
            'images/foto7_0050.jpg', 'images/foto7_0051.jpg', 'images/foto7_0053.jpg',
            'images/foto7_0055.jpg', 'images/foto7_0056.jpg'
        ];
        invitationPhotos = [
            'images/foto7_0003.jpg',
            'images/foto7_0012.jpg',
            'images/foto7_0014.jpg',
            'images/foto7_0038.jpg',
            'images/foto7_0046.jpg'
        ];
        initAllGalleries();
    }
}

// ========================================
// HERO SLIDER
// ========================================
let heroSliderIndex = 0;
const heroSlider = document.getElementById('heroSlider');

function initHeroSlider() {
    // Usar las fotos seleccionadas para invitación
    let currentIndex = 0;

    function changeHeroBackground() {
        heroSlider.style.backgroundImage = `url('${invitationPhotos[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % invitationPhotos.length;
    }

    changeHeroBackground();
    setInterval(changeHeroBackground, 5000);
}

// ========================================
// GALLERY GRID
// ========================================
function initGalleryGrid() {
    const galleryGrid = document.getElementById('galleryGrid');

    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${photo}" alt="Foto ${index + 1} de Jadelik" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(item);
    });
}

// ========================================
// CAROUSEL - DESHABILITADO
// ========================================
// La sección del carousel "Mis Recuerdos" fue eliminada del HTML
/*
let carouselPosition = 0;
const carouselTrack = document.getElementById('carouselTrack');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');

function initCarousel() {
    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `<img src="${photo}" alt="Foto ${index + 1} de Jadelik" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(index));
        carouselTrack.appendChild(item);
    });

    carouselPrev.addEventListener('click', () => moveCarousel(-1));
    carouselNext.addEventListener('click', () => moveCarousel(1));
}

function moveCarousel(direction) {
    const itemWidth = carouselTrack.querySelector('.carousel-item').offsetWidth + 20;
    const maxPosition = -(carouselTrack.scrollWidth - carouselTrack.parentElement.offsetWidth);

    carouselPosition += direction * itemWidth * -1;
    carouselPosition = Math.max(maxPosition, Math.min(0, carouselPosition));

    carouselTrack.style.transform = `translateX(${carouselPosition}px)`;
}
*/

// ========================================
// MASONRY GALLERY - DESHABILITADO
// ========================================
// La sección Masonry "Galería de Fotos" fue eliminada del HTML
/*
function initMasonryGallery() {
    const masonryGrid = document.getElementById('masonryGrid');

    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'masonry-item';
        item.innerHTML = `<img src="${photo}" alt="Foto ${index + 1} de Jadelik" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(index));
        masonryGrid.appendChild(item);
    });
}
*/

// ========================================
// SLIDESHOW - DESHABILITADO
// ========================================
// La sección Slideshow "Presentación Especial" fue eliminada del HTML
/*
let slideshowIndex = 0;
let slideshowInterval = null;
const slideshowWrapper = document.getElementById('slideshowWrapper');
const slideshowPrev = document.getElementById('slideshowPrev');
const slideshowNext = document.getElementById('slideshowNext');
const slideshowPlay = document.getElementById('slideshowPlay');
const slideshowCounter = document.getElementById('slideshowCounter');

function initSlideshow() {
    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = `slideshow-item ${index === 0 ? 'active' : ''}`;
        item.innerHTML = `<img src="${photo}" alt="Foto ${index + 1} de Jadelik" loading="lazy">`;
        slideshowWrapper.appendChild(item);
    });

    updateSlideshowCounter();

    slideshowPrev.addEventListener('click', () => changeSlide(-1));
    slideshowNext.addEventListener('click', () => changeSlide(1));
    slideshowPlay.addEventListener('click', toggleSlideshowPlay);
}

function changeSlide(direction) {
    const items = slideshowWrapper.querySelectorAll('.slideshow-item');
    items[slideshowIndex].classList.remove('active');

    slideshowIndex = (slideshowIndex + direction + items.length) % items.length;

    items[slideshowIndex].classList.add('active');
    updateSlideshowCounter();
}

function toggleSlideshowPlay() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        slideshowPlay.textContent = '▶ Reproducir';
    } else {
        slideshowInterval = setInterval(() => changeSlide(1), 3000);
        slideshowPlay.textContent = '⏸ Pausar';
    }
}

function updateSlideshowCounter() {
    slideshowCounter.textContent = `${slideshowIndex + 1} / ${photos.length}`;
}
*/

// ========================================
// COLLAGE - DESHABILITADO
// ========================================
// La sección Collage "Collage de Momentos" fue eliminada del HTML
/*
function initCollage() {
    const collageContainer = document.getElementById('collageContainer');

    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'collage-item';
        item.innerHTML = `<img src="${photo}" alt="Foto ${index + 1} de Jadelik" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(index));
        collageContainer.appendChild(item);
    });
}
*/

// ========================================
// LIGHTBOX
// ========================================
let currentLightboxIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateLightbox() {
    lightboxImg.src = photos[currentLightboxIndex];
    lightboxCaption.textContent = `Foto ${currentLightboxIndex + 1} de ${photos.length}`;
}

function changeLightboxImage(direction) {
    currentLightboxIndex = (currentLightboxIndex + direction + photos.length) % photos.length;
    updateLightbox();
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => changeLightboxImage(-1));
lightboxNext.addEventListener('click', () => changeLightboxImage(1));

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            changeLightboxImage(-1);
            break;
        case 'ArrowRight':
            changeLightboxImage(1);
            break;
    }
});

// ========================================
// SMOOTH SCROLL
// ========================================
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

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.gallery-item, .carousel-item, .masonry-item, .collage-item, .detail-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// LAZY LOADING OPTIMIZATION
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    console.log('Native lazy loading supported');
} else {
    // Fallback for browsers that don't support lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
}

// ========================================
// RESPONSIVE CAROUSEL ADJUSTMENT - DESHABILITADO
// ========================================
// La sección del carousel "Mis Recuerdos" fue eliminada del HTML
/*
function adjustCarousel() {
    const width = window.innerWidth;
    const items = carouselTrack.querySelectorAll('.carousel-item');

    items.forEach(item => {
        if (width < 768) {
            item.style.flex = '0 0 calc(100% - 20px)';
        } else if (width < 1024) {
            item.style.flex = '0 0 calc(50% - 10px)';
        } else {
            item.style.flex = '0 0 calc(33.333% - 14px)';
        }
    });

    carouselPosition = 0;
    carouselTrack.style.transform = 'translateX(0)';
}

window.addEventListener('resize', adjustCarousel);
*/

// ========================================
// INITIALIZE ALL GALLERIES
// ========================================
function initAllGalleries() {
    initHeroSlider();
    initGalleryGrid();
    // initCarousel(); // Deshabilitado - sección eliminada
    // initMasonryGallery(); // Deshabilitado - sección eliminada
    // initSlideshow(); // Deshabilitado - sección eliminada
    // initCollage(); // Deshabilitado - sección eliminada
    initScrollAnimations();
    // adjustCarousel(); // Deshabilitado - sección eliminada

    console.log('Invitación de XV Años de Jade cargada correctamente');
    console.log(`Total de fotos: ${photos.length} fotos seleccionadas`);
}

// ========================================
// INITIALIZE ALL
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar música de fondo
    playBackgroundMusic();

    // Cargar fotos desde JSON y luego inicializar galerías
    loadPhotosFromJSON();
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Preload critical images
window.addEventListener('load', () => {
    const criticalImages = photos.slice(0, 10);
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (lightbox.classList.contains('active')) {
        if (touchEndX < touchStartX - 50) {
            changeLightboxImage(1);
        }
        if (touchEndX > touchStartX + 50) {
            changeLightboxImage(-1);
        }
    }
}
