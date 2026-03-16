import { content } from '../data/content.js';

export const Hero = {
    render() {
        const hero = content.hero;
        return `
            <section class="flex min-h-[60vh] flex-col items-center justify-center py-12 text-center md:py-20 lg:min-h-[70vh]">
                <div class="max-w-4xl px-4">
                    <h1 class="mb-6 font-mono text-4xl font-bold leading-tight text-heading md:text-5xl lg:text-7xl">
                        ${hero.title.prefix} <span class="text-accent italic">${hero.title.highlight1}</span> 
                        ${hero.title.suffix} <span class="border-b-4 border-accent">${hero.title.highlight2}</span>
                    </h1>
                    <p class="mx-auto mb-10 max-w-2xl text-lg text-text-light md:text-xl lg:text-2xl">
                        ${hero.description}
                    </p>
                    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a href="${hero.cta.primary.url}" 
                           class="inline-flex w-full items-center justify-center rounded-md bg-accent px-8 py-4 font-mono font-bold text-bg transition-transform duration-200 hover:scale-105 sm:w-auto">
                            ${hero.cta.primary.text}
                        </a>
                        <a href="${hero.cta.secondary.url}" 
                           class="inline-flex w-full items-center justify-center rounded-md border-2 border-heading px-8 py-4 font-mono font-bold text-heading transition-colors duration-200 hover:bg-heading hover:text-text sm:w-auto">
                            ${hero.cta.secondary.text}
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
};