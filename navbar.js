const navbarHTML = `
<header id="site-header" class="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-border bg-surface p-4 px-4 md:px-8">
    <div id="header-logo-container" class="flex items-center gap-4">
        <div id="desktop-logo-wrapper" class="items-center gap-2 text-xl hidden lg:flex">
            <a id="desktop-repo-link" href="https://pxltr30.github.io/pxltr30/" class="font-bold no-underline hover:underline flex items-center gap-1">
                <div id="logo-text-user">pxltr30</div>
            </a>
            <div id="logo-text-separator" class="text-text-light">/</div>
            <a id="desktop-home-link" href="/" class="font-bold no-underline hover:underline text-heading flex items-center gap-1">
                <div id="logo-text-project">Echo</div>
            </a>
        </div>
        <div id="mobile-logo-wrapper" class="flex items-center gap-2 text-xl lg:hidden">
            <a id="mobile-home-link" href="/" class="font-bold no-underline hover:underline flex items-center gap-1">
                <div id="logo-text-user">pxltr30</div>
                <div id="logo-text-separator">/</div>
                <div id="logo-text-project" class="text-heading">Echo</div>
            </a>
        </div>
    </div>
    <div id="desktop-navigation" class="hidden items-center gap-3 lg:flex">
        <a href="/" class="text-text-light hover:text-heading no-underline">home</a>
        <a href="/about.html" class="text-text-light hover:text-heading no-underline">about</a>
        <a href="/services/index" class="text-text-light hover:text-heading no-underline">services</a>
        <a href="/projects/index" class="text-text-light hover:text-heading no-underline">projects</a>
        <a href="/thoughts/index" class="text-text-light hover:text-heading no-underline">blog</a>
        <a href="/#connect-section" class="text-text-light hover:text-heading no-underline">connect</a>
    </div>
    <button id="mobile-menu-button" class="lg:hidden p-2 text-text-light hover:text-heading">
        <i id="mobile-menu-icon" class="fa-solid fa-bars h-6 w-6"></i>
    </button>
</header>

<div id="mobile-menu-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden lg:hidden"></div>
<nav id="mobile-menu" class="fixed top-0 right-0 h-full w-64 bg-surface shadow-lg z-50 p-6 transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden">
    <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-bold text-heading">Menu</h3>
        <button id="close-mobile-menu-button" class="text-text-light">
            <i class="fa-solid fa-times h-6 w-6"></i>
        </button>
    </div>
    <div class="flex flex-col gap-4">
        <a href="/" class="text-text-light no-underline">home</a>
        <a href="/about.html" class="text-text-light no-underline">about</a>
        <a href="/services/index" class="text-text-light no-underline">services</a>
        <a href="/projects/index" class="text-text-light no-underline">projects</a>
    </div>
</nav>
`;

// Inject the HTML
document.getElementById('navbar-container').innerHTML = navbarHTML;

// Initialize Menu Logic
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenu = document.getElementById('mobile-menu');

const toggleMenu = () => {
    mobileMenuOverlay.classList.toggle('hidden');
    mobileMenu.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
};

if (mobileMenuButton) mobileMenuButton.onclick = toggleMenu;
if (closeMobileMenuButton) closeMobileMenuButton.onclick = toggleMenu;
if (mobileMenuOverlay) mobileMenuOverlay.onclick = toggleMenu;
