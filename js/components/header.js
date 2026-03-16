import { content } from '../data/content.js';

export const Header = {
    render() {
        const nav = content.navigation;
        return `
            <header class="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-border bg-surface p-4 px-4 md:px-8">
                <div class="flex items-center gap-4">
                    <!-- Desktop Logo -->
                    <div class="items-center gap-2 text-xl hidden lg:flex">
                        <a href="https://pxltr30.github.io/pxltr30/" class="font-bold no-underline hover:underline flex items-center gap-1">
                            <span class="text-text">${nav.logo.user}</span>
                        </a>
                        <span class="text-text-light">/</span>
                        <a href="/" class="font-bold no-underline hover:underline text-heading flex items-center gap-1">
                            <span>${nav.logo.project}</span>
                        </a>
                    </div>
                    
                    <!-- Mobile Logo -->
                    <div class="flex items-center gap-2 text-xl lg:hidden">
                        <a href="/" class="font-bold no-underline hover:underline flex items-center gap-1">
                            <span class="text-text">${nav.logo.user}</span>
                            <span class="text-text-light">/</span>
                            <span class="text-heading">${nav.logo.project}</span>
                        </a>
                    </div>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden items-center gap-3 lg:flex">
                    ${nav.links.map(link => `
                        <a href="${link.url}" class="text-text-light hover:text-heading no-underline transition-colors duration-200">${link.label}</a>
                    `).join('')}
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="lg:hidden p-2 rounded-md text-text-light hover:text-heading focus:outline-none focus:ring-2 focus:ring-accent">
                    <i id="mobile-menu-icon" class="fa-solid fa-bars w-6 h-6"></i>
                </button>
            </header>
            
            <!-- Mobile Menu Overlay -->
            <div id="mobile-menu-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden lg:hidden"></div>
            
            <!-- Mobile Menu -->
            <nav id="mobile-menu" class="fixed top-0 right-0 h-full w-64 bg-surface shadow-lg z-50 p-6 transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-lg font-bold text-heading">Menu</h3>
                    <button id="close-mobile-menu-button" class="text-text-light hover:text-heading focus:outline-none">
                        <i class="fa-solid fa-times w-6 h-6"></i>
                    </button>
                </div>
                <div class="flex flex-col gap-4">
                    ${nav.links.map(link => `
                        <a href="${link.url}" class="text-text-light hover:text-heading no-underline transition-colors duration-200">${link.label}</a>
                    `).join('')}
                </div>
            </nav>
        `;
    }
};