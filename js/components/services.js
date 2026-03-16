import { content } from '../data/content.js';

export const Services = {
    render() {
        const services = content.services;
        return `
            <section class="services-overview">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    ${services.heading}
                </h2>
                
                <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                    ${services.items.map(service => `
                        <div class="flex flex-col gap-4 rounded-lg border border-border bg-surface p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                            <div class="text-accent">
                                <i class="${service.icon} text-3xl"></i>
                            </div>
                            <h3 class="m-0 font-mono text-xl font-bold text-accent">${service.title}</h3>
                            <p class="flex-grow text-[0.95rem] leading-relaxed text-text-light">${service.description}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-8 text-center">
                    <a href="${services.cta.url}" 
                       class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                        ${services.cta.text}
                    </a>
                </div>
            </section>
        `;
    }
};