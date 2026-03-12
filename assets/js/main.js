document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Animations
    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // If it's a skill bar, trigger width
                const bar = entry.target.querySelector('.skill-progress');
                if (bar) bar.style.width = bar.getAttribute('data-progress') + '%';
            }
        });
    }, observerOptions);

    // Apply to all elements with animation classes
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});
