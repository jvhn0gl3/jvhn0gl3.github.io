import DATA from './data.js';

document.addEventListener('DOMContentLoaded', async () => {
    const body = document.body;
    const heroSlot = document.getElementById('hero-slot');
    const dataSlot = document.getElementById('data-slot');
    
    // Identify current page
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(".html", "") || "index";

    // 1. Fetch and Inject External Navbar
    try {
        const response = await fetch('assets/templates/navbar.html');
        const navHtml = await response.text();
        
        const header = document.createElement('header');
        header.className = "sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md p-4";
        header.innerHTML = navHtml;
        body.prepend(header);

        // Set Active Link
        const activeLink = header.querySelector(`[data-nav="${page}"]`);
        if (activeLink) {
            activeLink.classList.remove('text-text-light');
            activeLink.classList.add('text-accent');
        }
    } catch (error) {
        console.error("Error loading navbar:", error);
    }

    // 2. Inject Hero Content
    if (heroSlot) {
        const heroData = (page === "index" || page === "") ? DATA.profile : DATA.pages[page];
        if (heroData) {
            heroSlot.innerHTML = `
                <h1 class="text-5xl font-bold text-heading md:text-7xl mb-4">${heroData.name || heroData.title}</h1>
                <p class="text-text-light text-xl max-w-2xl">${heroData.bio || heroData.description}</p>
            `;
        }
    }

    // 3. Inject Contextual Data
    if (dataSlot) {
        if (page === "index" || page === "") renderItems(DATA.skills, 'skill');
        else if (page === "projects") renderItems(DATA.projects, 'project');
    }

    // ... (renderItems and observeElements functions remain the same as before)
    function renderItems(items, type) {
        if (!items) return;
        dataSlot.innerHTML = items.map(item => `
            <div class="fade-in-up border border-border bg-surface p-6 rounded-lg hover:border-accent transition-colors">
                <h3 class="text-heading font-bold mb-2">${item.title || item.name}</h3>
                <p class="text-sm text-text-light">${item.description || ''}</p>
                ${type === 'skill' ? `<div class="w-full bg-border h-1 mt-4"><div class="bg-accent h-full skill-progress" data-progress="${item.progress}"></div></div>` : ''}
            </div>
        `).join('');
        observeElements();
    }

    function observeElements() {
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
    }
});
