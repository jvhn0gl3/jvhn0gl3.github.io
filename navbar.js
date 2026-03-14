const navbarHTML = `
<style>
    .nav-glass {
        background: rgba(74, 62, 56, 0.8) !important;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(61, 135, 166, 0.3);
    }
    .nav-item-glow:hover {
        text-shadow: 0 0 10px rgba(61, 135, 166, 0.8);
        color: #3D87A6 !important;
    }
    .command-tag {
        font-size: 0.65rem;
        background: rgba(224, 122, 95, 0.2);
        color: #E07A5F;
        padding: 2px 6px;
        border-radius: 4px;
        text-transform: uppercase;
        margin-right: 8px;
    }
</style>

<header id="site-header" class="sticky top-0 z-50 nav-glass p-4 px-6 md:px-12 transition-all duration-300">
    <div class="flex items-center justify-between max-w-7xl mx-auto">
        
        <div class="flex items-center gap-2">
            <span class="text-accent font-bold">$</span>
            <a href="/" class="group flex items-center gap-1 font-mono text-xl tracking-tighter">
                <span class="text-text">pxltr30</span>
                <span class="text-heading">/</span>
                <span class="text-accent group-hover:animate-pulse">Echo</span>
            </a>
        </div>

        <nav id="desktop-navigation" class="hidden lg:flex items-center gap-8">
            <a href="/" class="nav-item-glow text-sm font-mono text-text-light transition-colors flex items-center">
                <span class="command-tag">01</span>home
            </a>
            <a href="/projects/index" class="nav-item-glow text-sm font-mono text-text-light transition-colors flex items-center">
                <span class="command-tag">02</span>projects
            </a>
            <a href="/thoughts/index" class="nav-item-glow text-sm font-mono text-text-light transition-colors flex items-center">
                <span class="command-tag">03</span>blog
            </a>
            <a href="/#connect-section" class="inline-flex items-center justify-center rounded border border-accent/50 px-4 py-1 text-xs font-mono text-accent hover:bg-accent hover:text-bg transition-all">
                EXECUTE_CONTACT.sh
            </a>
        </nav>

        <button id="mobile-menu-button" class="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none">
            <div class="w-6 h-0.5 bg-accent"></div>
            <div class="w-4 h-0.5 bg-text-light ml-auto"></div>
            <div class="w-6 h-0.5 bg-accent"></div>
        </button>
    </div>
</header>

<div id="mobile-menu-overlay" class="fixed inset-0 bg-bg/95 z-[60] hidden flex-col p-8 transition-all duration-500 opacity-0 overflow-y-auto">
    <div class="flex justify-between items-center mb-12">
        <span class="text-accent font-mono text-sm uppercase tracking-widest">// System Menu</span>
        <button id="close-mobile-menu-button" class="text-heading text-2xl font-mono hover:rotate-90 transition-transform">
            [X]
        </button>
    </div>
    
    <div class="flex flex-col gap-8 text-3xl font-mono">
        <a href="/" class="mobile-nav-link text-text hover:text-accent flex items-baseline gap-4">
            <span class="text-xs text-heading">#01</span> Home
        </a>
        <a href="/about.html" class="mobile-nav-link text-text hover:text-accent flex items-baseline gap-4">
            <span class="text-xs text-heading">#02</span> About
        </a>
        <a href="/projects/index" class="mobile-nav-link text-text hover:text-accent flex items-baseline gap-4">
            <span class="text-xs text-heading">#03</span> Projects
        </a>
        <a href="/thoughts/index" class="mobile-nav-link text-text hover:text-accent flex items-baseline gap-4">
            <span class="text-xs text-heading">#04</span> Blog
        </a>
        <a href="/#connect-section" class="mobile-nav-link text-text hover:text-accent flex items-baseline gap-4">
            <span class="text-xs text-heading">#05</span> Connect
        </a>
    </div>

    <div class="mt-auto pt-12 border-t border-border/30">
        <p class="text-[10px] font-mono text-text-light/40 uppercase tracking-[0.3em]">Status: Operational</p>
        <p class="text-[10px] font-mono text-text-light/40 uppercase tracking-[0.3em]">Location: Martinez, GA</p>
    </div>
</div>
`;

// Injection
document.getElementById('navbar-container').innerHTML = navbarHTML;

// Logic
const openBtn = document.getElementById('mobile-menu-button');
const closeBtn = document.getElementById('close-mobile-menu-button');
const overlay = document.getElementById('mobile-menu-overlay');

const toggle = () => {
    const isHidden = overlay.classList.contains('hidden');
    if (isHidden) {
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('opacity-100'), 10);
        document.body.style.overflow = 'hidden';
    } else {
        overlay.classList.remove('opacity-100');
        setTimeout(() => overlay.classList.add('hidden'), 500);
        document.body.style.overflow = 'auto';
    }
};

if (openBtn) openBtn.onclick = toggle;
if (closeBtn) closeBtn.onclick = toggle;
