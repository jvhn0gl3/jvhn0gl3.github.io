import { content } from '../data/content.js';

export const Resume = {
    render() {
        const resume = content.resume;
        return `
            <section class="resume-overview">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    ${resume.heading}
                </h2>
                
                <div class="grid grid-cols-1 gap-10 lg:grid-cols-[2fr,1fr]">
                    <!-- Experience -->
                    <div>
                        <h3 class="m-0 mb-6 font-mono text-base font-bold uppercase tracking-wider text-accent">${resume.experience.title}</h3>
                        ${resume.experience.items.map(exp => `
                            <div class="relative border-l-2 border-border pb-8 pl-6 last:pb-2 before:absolute before:top-[6px] before:left-[-6px] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-bg before:bg-accent before:content-['']">
                                <h4 class="m-0 text-lg leading-tight text-text">${exp.role}</h4>
                                <p class="mt-1 mb-0 text-sm text-text-light">${exp.details}</p>
                            </div>
                        `).join('')}
                    </div>
                    
                    <!-- Education & Awards -->
                    <div class="flex flex-col gap-6">
                        <div>
                            <h3 class="m-0 mb-6 font-mono text-base font-bold uppercase tracking-wider text-accent">${resume.education.title}</h3>
                            ${resume.education.items.map(edu => `
                                <div class="relative border-l-2 border-border pb-8 pl-6 last:pb-2 before:absolute before:top-[6px] before:left-[-6px] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-bg before:bg-accent before:content-['']">
                                    <h4 class="m-0 text-lg leading-tight text-text">${edu.degree}</h4>
                                    <p class="mt-1 mb-0 text-sm text-text-light">${edu.details}</p>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div>
                            <h3 class="m-0 mb-6 font-mono text-base font-bold uppercase tracking-wider text-accent">${resume.awards.title}</h3>
                            ${resume.awards.items.map(award => `
                                <div class="relative border-l-2 border-border pb-8 pl-6 last:pb-2 before:absolute before:top-[6px] before:left-[-6px] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-bg before:bg-accent before:content-['']">
                                    <h4 class="m-0 text-lg leading-tight text-text">${award.title}</h4>
                                    <p class="mt-1 mb-0 text-sm text-text-light">${award.details}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 text-center">
                    <a href="${resume.cta.url}" 
                       class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                        ${resume.cta.text}
                    </a>
                </div>
            </section>
        `;
    }
};