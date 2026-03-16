import { content } from '../data/content.js';

export const Footer = {
    render() {
        const footer = content.footer;
        return `
            <footer class="mt-16 border-t border-border bg-surface py-12">
                <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
                        <!-- Brand -->
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-2 text-xl font-bold text-heading">
                                <i class="${footer.brand.icon}"></i>
                                <span>${footer.brand.name}</span>
                            </div>
                            <p class="max-w-xs text-sm leading-relaxed text-text-light">
                                ${footer.brand.tagline}
                            </p>
                            <div class="flex gap-5 mt-2">
                                ${footer.socialLinks.map(link => `
                                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                                       class="text-text-light hover:text-heading transition-colors duration-200">
                                        <i class="${link.icon} text-lg"></i>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Navigation -->
                        <div>
                            <h4 class="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-accent">${footer.navigation.title}</h4>
                            <nav class="grid grid-cols-2 gap-y-3 gap-x-8">
                                ${footer.navigation.links.map(link => `
                                    <a href="${link.url}" class="text-sm text-text-light hover:text-heading no-underline transition-colors duration-200">
                                        ${link.label}
                                    </a>
                                `).join('')}
                            </nav>
                        </div>
                        
                        <!-- Status -->
                        <div>
                            <h4 class="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-accent">${footer.status.title}</h4>
                            <div class="rounded border border-border bg-bg/50 p-4">
                                <div class="flex items-center gap-3">
                                    <span class="relative flex h-3 w-3">
                                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                    </span>
                                    <span class="text-xs font-mono text-text-light uppercase tracking-tighter">${footer.status.indicator}</span>
                                </div>
                                <p class="mt-3 text-[10px] font-mono text-text-light/50">
                                    Last deployment: ${footer.status.lastDeployed}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Bottom Bar -->
                    <div class="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
                        <p class="text-xs text-text-light/60">
                            &copy; ${footer.copyright.year} ${footer.copyright.name}. ${footer.copyright.message}
                        </p>
                        <div class="flex gap-6">
                            ${footer.legal.map(item => `
                                <a href="${item.url}" class="text-xs text-text-light/60 hover:text-heading no-underline transition-colors duration-200">${item.label}</a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
};