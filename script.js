// ===== HOME SECTION FUNCTIONALITY =====
// Scroll effects and animations for home section

// ===== ABOUT SECTION FUNCTIONALITY =====
// Image hover effects and animations

// ===== SERVICES SECTION FUNCTIONALITY =====
// Service card hover effects

// ===== PROJECTS SECTION FUNCTIONALITY =====
// Projects filtering functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            projectCards.forEach(card => {
                card.style.display = 
                    category === 'all' || card.getAttribute('data-category') === category 
                        ? 'block' 
                        : 'none';
            });
        });
    });
});

// ===== CONTACT SECTION FUNCTIONALITY =====
// Contact form handling and validation

// ===== NAVIGATION FUNCTIONALITY =====
// Smooth scroll and active state for navigation
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
