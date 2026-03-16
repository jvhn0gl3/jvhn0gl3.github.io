export const Footer = {
    render() {
        return `
            <footer id="site-footer" class="mt-16 border-t border-border bg-surface py-12">
                <div id="footer-container" class="mx-auto max-w-7xl px-10 md:px-10 lg:px-10">
                    <div id="footer-grid" class="grid grid-cols-1 gap-12 md:grid-cols-3">
                        <!-- Brand -->
                        <div id="footer-brand" class="flex flex-col gap-4">
                            <div class="flex items-center gap-2 text-xl font-bold text-heading">
                                <i class="fa-solid fa-book-open"></i>
                                <span>Echo</span>
                            </div>
                            <p class="max-w-xs text-sm leading-relaxed text-text-light">
                                Building the next generation of digital experiences through design, code, and strategy.
                            </p>
                            <div class="flex gap-5 mt-2">
                                ${this.socialLinks.map(link => `
                                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                                       class="text-text-light hover:text-heading transition-colors">
                                        <i class="${link.icon} text-lg"></i>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Navigation -->
                        <div id="footer-links-container">
                            <h4 class="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-accent">Navigation</h4>
                            <nav class="grid grid-cols-2 gap-y-3 gap-x-8">
                                ${this.navLinks.map(link => `
                                    <a href="${link.url}" class="text-sm text-text-light hover:text-heading no-underline transition-colors">
                                        ${link.label}
                                    </a>
                                `).join('')}
                            </nav>
                        </div>
                        
                        <!-- Status -->
                        <div id="footer-status">
                            <h4 class="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-accent">System Status</h4>
                            <div class="rounded border border-border bg-bg/50 p-4">
                                <div class="flex items-center gap-3">
                                    <span class="relative flex h-3 w-3">
                                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                    </span>
                                    <span class="text-xs font-mono text-text-light uppercase tracking-tighter">all systems operational</span>
                                </div>
                                <p class="mt-3 text-[10px] font-mono text-text-light/50">
                                    Last deployment: Feb 20, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Bottom Bar -->
                    <div id="footer-bottom" class="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
                        <p class="text-xs text-text-light/60">
                            &copy; 2026 John Ogletree. All rights reserved. Built with precision.
                        </p>
                        <div class="flex gap-6">
                            <a href="#" class="text-xs text-text-light/60 hover:text-heading no-underline transition-colors">Privacy Policy</a>
                            <a href="#" class="text-xs text-text-light/60 hover:text-heading no-underline transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    },

    socialLinks: [
        { icon: 'fa-brands fa-github', url: 'https://github.com/pxltr30' },
        { icon: 'fa-brands fa-linkedin', url: 'https://linkedin.com' },
        { icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com' },
        { icon: 'fa-solid fa-envelope', url: 'mailto:contact@john-ogletree.me' }
    ],

    navLinks: [
        { label: 'home', url: '/' },
        { label: 'about', url: '/about.html' },
        { label: 'services', url: '/services/index' },
        { label: 'projects', url: '/projects/index' },
        { label: 'blog', url: '/thoughts/index' },
        { label: 'resume', url: '/resume/index' }
    ]
};