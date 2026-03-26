// Global content store
let siteContent = null;

// Function to render the entire page from JSON data
function renderPage(content) {
    const root = document.getElementById('app-root');
    
    root.innerHTML = `
        <!-- HEADER -->
        <header class="sticky top-0 z-50 glass-nav transition-all duration-300">
            <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 md:h-20">
                    <!-- Animated Logo -->
                    <div class="flex items-center gap-3">
                        <div class="relative">
                            <div class="absolute inset-0 rounded-full bg-accent/20 blur-md animate-pulse"></div>
                            <div class="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-heading to-accent flex items-center justify-center animate-float">
                                <i class="fa-solid fa-echo text-text text-lg md:text-xl"></i>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <a href="/" class="group flex items-baseline gap-1">
                                <span class="text-lg md:text-xl font-bold bg-gradient-to-r from-heading to-accent bg-clip-text text-transparent animate-glow">${content.navigation.logo.project}</span>
                                <span class="text-xs text-text-light/60 hidden sm:inline">${content.navigation.logo.version}</span>
                            </a>
                            <span class="text-[10px] text-text-light/50 hidden sm:block">${content.navigation.logo.tagline}</span>
                        </div>
                    </div>
                    
                    <!-- Desktop Navigation -->
                    <div class="hidden lg:flex items-center gap-1">
                        <div class="flex items-center gap-1 bg-surface/50 rounded-full p-1 backdrop-blur-sm border border-border/50">
                            ${content.navigation.links.map(link => `
                                <a href="${link.url}" class="nav-link px-4 py-2 rounded-full text-text-light hover:text-heading transition-all duration-200 text-sm font-medium flex items-center gap-2 group">
                                    <i class="fa-solid ${link.icon} text-xs group-hover:scale-110 transition-transform"></i>
                                    <span>${link.label}</span>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Right side: status indicator + mobile button -->
                    <div class="flex items-center gap-4">
                        <div class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/60 backdrop-blur-sm border border-border/50">
                            <span class="relative flex h-2 w-2">
                                <span class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 pulse-dot"></span>
                                <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            <span class="text-[11px] text-text-light/80 uppercase tracking-wider">creative mode</span>
                            <i class="fa-solid fa-bolt text-accent text-xs ml-1"></i>
                        </div>
                        <button id="mobile-menu-button" class="lg:hidden relative w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm border border-border hover:border-heading transition-all duration-200 group">
                            <i id="mobile-menu-icon" class="fa-solid fa-bars text-text-light group-hover:text-heading transition-colors"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        
        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu-overlay" class="fixed inset-0 bg-bg/95 backdrop-blur-md z-40 hidden lg:hidden transition-all duration-300"></div>
        
        <!-- Mobile Menu -->
        <nav id="mobile-menu" class="fixed top-0 right-0 h-full w-80 bg-surface/98 backdrop-blur-xl shadow-2xl z-50 p-8 transform translate-x-full transition-transform duration-500 ease-out lg:hidden border-l border-border/50">
            <div class="flex items-center justify-between mb-10 pb-4 border-b border-border/50">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-heading to-accent flex items-center justify-center">
                        <i class="fa-solid fa-echo text-text"></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold bg-gradient-to-r from-heading to-accent bg-clip-text text-transparent">${content.navigation.logo.project}</h3>
                        <p class="text-[10px] text-text-light/50">menu / navigation</p>
                    </div>
                </div>
                <button id="close-mobile-menu-button" class="w-10 h-10 rounded-full bg-bg/50 text-text-light hover:text-heading hover:rotate-90 transition-all duration-300">
                    <i class="fa-solid fa-xmark text-xl"></i>
                </button>
            </div>
            
            <div class="flex flex-col gap-2">
                ${content.navigation.links.map(link => `
                    <a href="${link.url}" class="nav-link-mobile group flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-heading/10 transition-all duration-200">
                        <div class="w-10 h-10 rounded-lg bg-heading/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i class="fa-solid ${link.icon} text-heading"></i>
                        </div>
                        <span class="text-lg font-medium text-text-light group-hover:text-heading">${link.label}</span>
                        <i class="fa-solid fa-arrow-right ml-auto text-text-light/30 group-hover:translate-x-1 transition-transform"></i>
                    </a>
                `).join('')}
            </div>
            
            <div class="absolute bottom-8 left-8 right-8">
                <div class="border-t border-border/30 pt-6">
                    <div class="flex items-center justify-between text-xs text-text-light/50">
                        <span>© ${content.footer.copyright.year} ${content.footer.brand.name}</span>
                        <div class="flex gap-3">
                            ${content.footer.socialLinks.slice(0, 3).map(link => `
                                <i class="${link.icon} hover:text-heading transition-colors cursor-pointer"></i>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- MAIN CONTENT -->
        <main class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <!-- HERO -->
            <section class="flex min-h-[60vh] flex-col items-center justify-center py-12 text-center md:py-20 lg:min-h-[70vh]">
                <div class="max-w-4xl px-4">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 backdrop-blur-sm border border-border/50 mb-6 animate-float">
                        <span class="relative flex h-2 w-2">
                            <span class="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-ping"></span>
                            <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        <span class="text-xs uppercase tracking-wider text-text-light">${content.hero.badge}</span>
                    </div>
                    <h1 class="mb-6 font-mono text-4xl font-bold leading-tight text-heading md:text-5xl lg:text-7xl">
                        ${content.hero.title.prefix} <span class="text-accent italic animate-glow">${content.hero.title.highlight1}</span> 
                        ${content.hero.title.suffix} <span class="border-b-4 border-accent">${content.hero.title.highlight2}</span>
                    </h1>
                    <p class="mx-auto mb-10 max-w-2xl text-lg text-text-light md:text-xl lg:text-2xl">
                        ${content.hero.description}
                    </p>
                    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a href="${content.hero.cta.primary.url}" class="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-accent to-accent/80 px-8 py-4 font-mono font-bold text-bg transition-all duration-200 hover:scale-105 hover:shadow-lg sm:w-auto group">
                            <span>${content.hero.cta.primary.text}</span>
                            <i class="fa-solid ${content.hero.cta.primary.icon} ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                        <a href="${content.hero.cta.secondary.url}" class="inline-flex w-full items-center justify-center rounded-md border-2 border-heading px-8 py-4 font-mono font-bold text-heading transition-all duration-200 hover:bg-heading hover:text-text hover:scale-105 sm:w-auto">
                            ${content.hero.cta.secondary.text}
                        </a>
                    </div>
                </div>
            </section>

            <!-- PROFILE SECTION -->
            <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                ${content.profile.heading}
            </h2>
            <section class="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2" id="profile-section">
                <div id="profile-card" class="flex flex-col gap-5 rounded-lg border border-border bg-surface p-6">
                    <div class="flex flex-col items-start gap-6 border-b border-border pb-5 md:flex-row md:items-center">
                        <div class="flex flex-1 items-center gap-4">
                            <img src="${content.profile.avatar}" alt="${content.profile.name}" 
                                 class="h-[4.375rem] w-[4.375rem] rounded-full border-2 border-border object-cover"
                                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'70\' height=\'70\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'45\' fill=\'%233D87A6\' /%3E%3Ctext x=\'50\' y=\'70\' font-size=\'50\' text-anchor=\'middle\' fill=\'%23F0EAD6\' font-family=\'monospace\'%3E👤%3C/text%3E%3C/svg%3E'">
                            <div class="flex flex-col">
                                <h3 class="m-0 font-mono font-medium leading-tight text-heading text-xl md:text-2xl">${content.profile.name}</h3>
                                <p class="mb-2 text-base text-text-light">${content.profile.handle}</p>
                                <div class="flex flex-wrap gap-4 mt-1">
                                    ${content.profile.socialLinks.map(link => `
                                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-text-light hover:text-accent transition-colors duration-200"><i class="${link.icon} text-xl"></i></a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="flex w-full flex-row gap-3 md:w-auto md:min-w-[9.375rem] md:flex-col">
                            ${content.profile.stats.map(stat => `
                                <div class="flex w-full flex-col items-center justify-between md:flex-row md:items-baseline">
                                    <span class="stat-value text-2xl font-bold text-heading" data-value="${stat.value}">0</span>
                                    <span class="text-xs uppercase tracking-wider text-text-light">${stat.label}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 border-t border-border pt-5">
                        ${content.profile.languages.map(lang => `
                            <div class="flex w-full items-baseline justify-between">
                                <span class="flex items-center gap-2 text-xs uppercase tracking-wider text-text-light"><span class="h-3 w-3 rounded-full" style="background-color: ${lang.color};"></span>${lang.name}</span>
                                <span class="text-lg font-medium text-heading">${lang.percent}%</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="flex flex-col gap-6">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        ${content.profile.skills.map(skill => `
                            <div class="skill-item flex flex-col gap-3 rounded-lg border border-border bg-surface p-6">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <i class="${skill.icon} text-accent text-xl"></i>
                                        <span class="font-mono text-lg font-bold text-text">${skill.name}</span>
                                    </div>
                                    <span class="skill-percentage font-mono text-sm text-text-light">0%</span>
                                </div>
                                <div class="relative h-2.5 w-full rounded bg-border overflow-hidden">
                                    <div class="skill-progress absolute left-0 top-0 h-full rounded bg-accent" data-progress="${skill.progress}"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div>
                        <a href="${content.profile.bioLink.url}" class="box-border flex w-full items-center justify-center rounded-md border border-heading bg-transparent py-3 px-6 text-center font-mono font-bold text-heading no-underline transition-colors duration-200 hover:bg-heading hover:text-text">${content.profile.bioLink.text}</a>
                    </div>
                </div>
            </section>

            <!-- SERVICES SECTION -->
            <section class="services-overview">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">${content.services.heading}</h2>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                    ${content.services.items.map(service => `
                        <div class="flex flex-col gap-4 rounded-lg border border-border bg-surface p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                            <div class="text-accent"><i class="${service.icon} text-3xl"></i></div>
                            <h3 class="m-0 font-mono text-xl font-bold text-accent">${service.title}</h3>
                            <p class="flex-grow text-[0.95rem] leading-relaxed text-text-light">${service.description}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-8 text-center"><a href="${content.services.cta.url}" class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">${content.services.cta.text}</a></div>
            </section>

            <!-- PROJECTS SECTION -->
            <section class="projects-overview">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">${content.projects.heading}</h2>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    ${content.projects.items.map(project => `
                        <div class="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                            <div class="aspect-video overflow-hidden">
                                <img src="${project.image}" alt="${project.imageAlt}" class="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105" loading="lazy">
                            </div>
                            <div class="flex flex-grow flex-col p-6">
                                <h3 class="m-0 mb-2 font-mono text-xl font-bold text-accent">${project.title}</h3>
                                <p class="mb-4 text-[0.95rem] text-text-light">${project.description}</p>
                                <div class="flex flex-wrap gap-2">
                                    ${project.tags.map(tag => `
                                        <span class="rounded-full py-1 px-3 text-xs font-medium" style="background-color: ${tag.bgColor}; color: ${tag.color}">${tag.name}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-8 text-center"><a href="${content.projects.cta.url}" class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">${content.projects.cta.text}</a></div>
            </section>

            <!-- CONNECT SECTION -->
            <section id="connect-section" class="forms-section">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">${content.connect.heading}</h2>
                <div class="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
                    <div class="rounded-lg border border-border bg-surface p-8">
                        <h3 class="m-0 mb-2 font-mono text-xl font-bold text-accent">${content.connect.contact.title}</h3>
                        <p class="mb-4 text-text-light">${content.connect.contact.description}</p>
                        <form id="contact-form" action="#" method="POST">
                            <div class="mb-6"><label for="name" class="mb-2 block text-sm font-medium text-text">${content.connect.contact.form.name.label}</label><input type="text" id="name" name="name" required placeholder="${content.connect.contact.form.name.placeholder}" class="w-full rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"></div>
                            <div class="mb-6"><label for="email" class="mb-2 block text-sm font-medium text-text">${content.connect.contact.form.email.label}</label><input type="email" id="email" name="email" required placeholder="${content.connect.contact.form.email.placeholder}" class="w-full rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"></div>
                            <div class="mb-6"><label for="message" class="mb-2 block text-sm font-medium text-text">${content.connect.contact.form.message.label}</label><textarea id="message" name="message" rows="${content.connect.contact.form.message.rows}" required placeholder="${content.connect.contact.form.message.placeholder}" class="w-full min-h-[7.5rem] resize-y rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"></textarea></div>
                            <button type="submit" class="w-full inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52]">${content.connect.contact.form.submit}</button>
                        </form>
                    </div>
                    <div class="rounded-lg border border-border bg-surface p-8">
                        <h3 class="m-0 mb-2 font-mono text-xl font-bold text-accent">${content.connect.newsletter.title}</h3>
                        <p class="mb-6 text-[0.95rem] leading-relaxed text-text-light">${content.connect.newsletter.description}</p>
                        <form id="newsletter-form" action="#" method="POST">
                            <div class="mb-6"><label for="newsletter-email" class="mb-2 block text-sm font-medium text-text">${content.connect.newsletter.form.email.label}</label><input type="email" id="newsletter-email" name="email" required placeholder="${content.connect.newsletter.form.email.placeholder}" class="w-full rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"></div>
                            <button type="submit" class="w-full inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52]">${content.connect.newsletter.form.submit}</button>
                        </form>
                        <p class="mt-6 mb-0 text-center text-xs text-text-light/70">${content.connect.newsletter.privacy}</p>
                    </div>
                </div>
            </section>

            <!-- BLOG SECTION -->
            <section class="log-overview">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">${content.blog.heading}</h2>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    ${content.blog.items.map(post => `
                        <article><a href="${post.url}" class="group flex h-full rounded-lg border border-border bg-surface no-underline transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"><div class="flex flex-col p-6"><p class="mb-2 text-xs text-text-light">${post.meta}</p><h3 class="m-0 mb-3 font-mono text-xl font-bold text-accent transition-colors duration-200 group-hover:text-heading group-hover:underline">${post.title}</h3><p class="mb-6 flex-grow text-[0.95rem] leading-relaxed text-text">${post.excerpt}</p><div class="flex flex-wrap gap-2">${post.tags.map(tag => `<span class="rounded-full py-1 px-3 text-xs font-medium" style="background-color: ${tag.bgColor}; color: ${tag.color}">${tag.name}</span>`).join('')}</div></div></a></article>
                    `).join('')}
                </div>
                <div class="mt-8 text-center"><a href="${content.blog.cta.url}" class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52]">${content.blog.cta.text}</a></div>
            </section>

            <!-- RESUME SECTION -->
            <section class="resume-overview">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">${content.resume.heading}</h2>
                <div class="grid grid-cols-1 gap-10 lg:grid-cols-[2fr,1fr]">
                    <div>
                        <h3 class="m-0 mb-6 font-mono text-base font-bold uppercase tracking-wider text-accent">${content.resume.experience.title}</h3>
                        ${content.resume.experience.items.map(exp => `
                            <div class="relative border-l-2 border-border pb-8 pl-6 last:pb-2 before:absolute before:top-[6px] before:left-[-6px] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-bg before:bg-accent before:content-['']">
                                <h4 class="m-0 text-lg leading-tight text-text">${exp.role}</h4>
                                <p class="mt-1 mb-0 text-sm text-text-light">${exp.details}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="flex flex-col gap-6">
                        <div>
                            <h3 class="m-0 mb-6 font-mono text-base font-bold uppercase tracking-wider text-accent">${content.resume.education.title}</h3>
                            ${content.resume.education.items.map(edu => `
                                <div class="relative border-l-2 border-border pb-8 pl-6 last:pb-2 before:absolute before:top-[6px] before:left-[-6px] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-bg before:bg-accent before:content-['']">
                                    <h4 class="m-0 text-lg leading-tight text-text">${edu.degree}</h4>
                                    <p class="mt-1 mb-0 text-sm text-text-light">${edu.details}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div>
                            <h3 class="m-0 mb-6 font-mono text-base font-bold uppercase tracking-wider text-accent">${content.resume.awards.title}</h3>
                            ${content.resume.awards.items.map(award => `
                                <div class="relative border-l-2 border-border pb-8 pl-6 last:pb-2 before:absolute before:top-[6px] before:left-[-6px] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-bg before:bg-accent before:content-['']">
                                    <h4 class="m-0 text-lg leading-tight text-text">${award.title}</h4>
                                    <p class="mt-1 mb-0 text-sm text-text-light">${award.details}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="mt-8 text-center"><a href="${content.resume.cta.url}" class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52]">${content.resume.cta.text}</a></div>
            </section>

            <!-- FAQ SECTION -->
            <section class="faq-section">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">${content.faq.heading}</h2>
                <div>
                    ${content.faq.items.map(item => `
                        <details class="mb-4 rounded-lg border border-border bg-surface p-6 group">
                            <summary class="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-accent hover:text-heading after:text-2xl after:font-normal after:transition-transform after:duration-200 after:ease-out after:content-['+']">${item.question}</summary>
                            <div class="pt-4 leading-relaxed text-text-light">
                                <p class="mb-4">${item.answer}</p>
                            </div>
                        </details>
                    `).join('')}
                </div>
            </section>
        </main>

        <!-- FOOTER -->
        <footer class="mt-16 border-t border-border bg-surface py-12">
            <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-2 text-xl font-bold text-heading">
                            <i class="${content.footer.brand.icon}"></i>
                            <span>${content.footer.brand.name}</span>
                        </div>
                        <p class="max-w-xs text-sm leading-relaxed text-text-light">${content.footer.brand.tagline}</p>
                        <div class="flex gap-5 mt-2">
                            ${content.footer.socialLinks.map(link => `
                                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-text-light hover:text-heading transition-colors duration-200"><i class="${link.icon} text-lg"></i></a>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-accent">${content.footer.navigation.title}</h4>
                        <nav class="grid grid-cols-2 gap-y-3 gap-x-8">
                            ${content.footer.navigation.links.map(link => `
                                <a href="${link.url}" class="text-sm text-text-light hover:text-heading no-underline transition-colors duration-200">${link.label}</a>
                            `).join('')}
                        </nav>
                    </div>
                    <div>
                        <h4 class="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-accent">${content.footer.status.title}</h4>
                        <div class="rounded border border-border bg-bg/50 p-4">
                            <div class="flex items-center gap-3">
                                <span class="relative flex h-3 w-3">
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                </span>
                                <span class="text-xs font-mono text-text-light uppercase tracking-tighter">${content.footer.status.indicator}</span>
                            </div>
                            <p class="mt-3 text-[10px] font-mono text-text-light/50">Last deployment: ${content.footer.status.lastDeployed}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
                    <p class="text-xs text-text-light/60">&copy; ${content.footer.copyright.year} ${content.footer.copyright.name}. ${content.footer.copyright.message}</p>
                    <div class="flex gap-6">
                        ${content.footer.legal.map(item => `
                            <a href="${item.url}" class="text-xs text-text-light/60 hover:text-heading no-underline transition-colors duration-200">${item.label}</a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    // Re-initialize animations after content is loaded
    setTimeout(() => {
        initAnimations();
        initMobileMenu();
    }, 100);
}

// Mobile Menu Logic
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('close-mobile-menu-button');
    const overlay = document.getElementById('mobile-menu-overlay');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    const body = document.body;

    function toggleMenu() {
        overlay?.classList.toggle('hidden');
        menu?.classList.toggle('translate-x-full');
        if (icon) {
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
        body?.classList.toggle('overflow-hidden');
    }
    
    if(mobileBtn) mobileBtn.removeEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.removeEventListener('click', toggleMenu);
    if(overlay) overlay.removeEventListener('click', toggleMenu);
    
    if(mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if(overlay) overlay.addEventListener('click', toggleMenu);
}

// Animations: stats + skill bars
function initAnimations() {
    // Stats animation
    const profileCard = document.getElementById('profile-card');
    if(profileCard) {
        const animateStats = () => {
            const statValues = profileCard.querySelectorAll('.stat-value[data-value]');
            statValues.forEach(stat => {
                const finalValue = parseInt(stat.getAttribute('data-value'), 10);
                const duration = 2000;
                const startTime = performance.now();
                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    stat.textContent = Math.floor(progress * finalValue).toLocaleString();
                    if(progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            });
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(profileCard);
    }

    // Skill bars animation
    const skillItems = document.querySelectorAll('.skill-item');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const percentageSpan = entry.target.querySelector('.skill-percentage');
                if(progressBar) {
                    const target = progressBar.getAttribute('data-progress');
                    progressBar.style.width = target + '%';
                    if(percentageSpan) percentageSpan.textContent = target + '%';
                }
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => skillObserver.observe(item));

    // Form handlers
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent! (Demo - no actual submission)');
            contactForm.reset();
        });
    }
    
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Subscribed! (Demo - no actual submission)');
            newsletterForm.reset();
        });
    }
}

// Load content from JSON and render
async function loadContent() {
    try {
        const response = await fetch('/content.json');
        siteContent = await response.json();
        renderPage(siteContent);
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('app-root').innerHTML = `
            <div class="flex items-center justify-center min-h-screen">
                <div class="text-center text-red-500">
                    <i class="fa-solid fa-circle-exclamation text-4xl mb-4"></i>
                    <p>Failed to load content. Please refresh the page.</p>
                </div>
            </div>
        `;
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', loadContent);