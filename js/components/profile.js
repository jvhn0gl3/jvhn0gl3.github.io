import { content } from '../data/content.js';

export const Profile = {
    render() {
        const profile = content.profile;
        return `
            <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                ${profile.heading}
            </h2>
            
            <section class="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
                <!-- Profile Card -->
                <div id="profile-card" class="flex flex-col gap-5 rounded-lg border border-border bg-surface p-6">
                    <div class="flex flex-col items-start gap-6 border-b border-border pb-5 md:flex-row md:items-center">
                        <div class="flex flex-1 items-center gap-4">
                            <img src="/assets/images/logo.svg" alt="${profile.name}" 
                                 class="h-[4.375rem] w-[4.375rem] rounded-full border-2 border-border object-cover"
                                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'70\\' height=\\'70\\' viewBox=\\'0 0 100 100\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'%233D87A6\\' /%3E%3Ctext x=\\'50\\' y=\\'70\\' font-size=\\'50\\' text-anchor=\\'middle\\' fill=\\'%23F0EAD6\\' font-family=\\'monospace\\'%3E👤%3C/text%3E%3C/svg%3E'">
                            <div class="flex flex-col">
                                <h3 class="m-0 font-mono font-medium leading-tight text-heading text-xl md:text-2xl">${profile.name}</h3>
                                <p class="mb-2 text-base text-text-light">${profile.handle}</p>
                                <div class="flex flex-wrap gap-4 mt-1">
                                    ${profile.socialLinks.map(link => `
                                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                                           class="text-text-light hover:text-accent transition-colors duration-200">
                                            <i class="${link.icon} text-xl"></i>
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Stats -->
                        <div class="flex w-full flex-row gap-3 md:w-auto md:min-w-[9.375rem] md:flex-col">
                            ${profile.stats.map(stat => `
                                <div class="flex w-full flex-col items-center justify-between md:flex-row md:items-baseline">
                                    <span class="stat-value text-2xl font-bold text-heading" data-value="${stat.value}">0</span>
                                    <span class="text-xs uppercase tracking-wider text-text-light">${stat.label}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Language Skills -->
                    <div class="flex flex-col gap-3 border-t border-border pt-5 md:min-w-[9.375rem]">
                        ${profile.languages.map(lang => `
                            <div class="flex w-full items-baseline justify-between">
                                <span class="flex items-center gap-2 text-xs uppercase tracking-wider text-text-light">
                                    <span class="h-3 w-3 rounded-full" style="background-color: ${lang.color};"></span>
                                    ${lang.name}
                                </span>
                                <span class="text-lg font-medium text-heading">${lang.percent}%</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Skill Bars -->
                <div class="flex flex-col gap-6">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        ${profile.skills.map(skill => `
                            <div class="skill-item flex flex-col gap-3 rounded-lg border border-border bg-surface p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <i class="${skill.icon} text-accent text-xl"></i>
                                        <span class="font-mono text-lg font-bold text-text">${skill.name}</span>
                                    </div>
                                    <span class="skill-percentage font-mono text-sm text-text-light">0%</span>
                                </div>
                                <div class="relative h-2.5 w-full rounded bg-border overflow-hidden">
                                    <div class="skill-progress absolute left-0 top-0 h-full rounded bg-accent" 
                                         data-progress="${skill.progress}"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <!-- Bio Link -->
                    <div>
                        <a href="${profile.bioLink.url}" 
                           class="box-border flex w-full items-center justify-center rounded-md border border-heading bg-transparent py-3 px-6 text-center font-mono font-bold text-heading no-underline transition-colors duration-200 hover:bg-heading hover:text-text">
                            ${profile.bioLink.text}
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
};