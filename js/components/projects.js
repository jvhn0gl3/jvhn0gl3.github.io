import { content } from '../data/content.js';

export const Projects = {
    render() {
        const projects = content.projects;
        return `
            <section class="projects-overview">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    ${projects.heading}
                </h2>
                
                <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    ${projects.items.map(project => `
                        <div class="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                            <div class="aspect-video overflow-hidden">
                                <img src="${project.image}" alt="${project.imageAlt}" 
                                     class="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                                     loading="lazy"
                                     onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'">
                            </div>
                            <div class="flex flex-grow flex-col p-6">
                                <h3 class="m-0 mb-2 font-mono text-xl font-bold text-accent">${project.title}</h3>
                                <p class="mb-4 text-[0.95rem] text-text-light">${project.description}</p>
                                <div class="flex flex-wrap gap-2">
                                    ${project.tags.map(tag => `
                                        <span class="rounded-full py-1 px-3 text-xs font-medium" 
                                              style="background-color: ${tag.bgColor}; color: ${tag.color}">
                                            ${tag.name}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-8 text-center">
                    <a href="${projects.cta.url}" 
                       class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                        ${projects.cta.text}
                    </a>
                </div>
            </section>
        `;
    }
};