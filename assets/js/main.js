import DATA from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Skills Automatically
    const skillContainer = document.getElementById('skill-bars-container');
    if (skillContainer && DATA.skills) {
        skillContainer.innerHTML = DATA.skills.map(skill => `
            <div class="fade-in-up flex flex-col gap-3 rounded-lg border border-border bg-surface p-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <i class="fa-solid ${skill.icon} text-accent"></i>
                        <span class="font-bold text-text">${skill.name}</span>
                    </div>
                    <span class="text-sm text-text-light">${skill.progress}%</span>
                </div>
                <div class="relative h-2 w-full rounded bg-border overflow-hidden">
                    <div class="skill-progress absolute h-full bg-accent" data-progress="${skill.progress}"></div>
                </div>
            </div>
        `).join('');
    }

    // 2. Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const bar = entry.target.querySelector('.skill-progress');
                if (bar) bar.style.width = bar.getAttribute('data-progress') + '%';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});
