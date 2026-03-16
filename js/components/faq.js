import { content } from '../data/content.js';

export const FAQ = {
    render() {
        const faq = content.faq;
        return `
            <section class="faq-section">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    ${faq.heading}
                </h2>
                
                <div>
                    ${faq.items.map((item, index) => `
                        <details class="mb-4 rounded-lg border border-border bg-surface p-6 group">
                            <summary class="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-accent hover:text-heading after:text-2xl after:font-normal after:transition-transform after:duration-200 after:ease-out after:content-['+'] open:after:rotate-45">
                                ${item.question}
                            </summary>
                            <div class="pt-4 leading-relaxed text-text-light">
                                <p class="mb-4">${item.answer}</p>
                            </div>
                        </details>
                    `).join('')}
                </div>
            </section>
        `;
    }
};