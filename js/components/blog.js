import { content } from '../data/content.js';

export const Blog = {
    render() {
        const blog = content.blog;
        return `
            <section class="log-overview">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    ${blog.heading}
                </h2>
                
                <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    ${blog.items.map(post => `
                        <article>
                            <a href="${post.url}" class="group flex h-full rounded-lg border border-border bg-surface no-underline transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                                <div class="flex flex-col p-6">
                                    <p class="mb-2 text-xs text-text-light">${post.meta}</p>
                                    <h3 class="m-0 mb-3 font-mono text-xl font-bold text-accent transition-colors duration-200 group-hover:text-heading group-hover:underline">
                                        ${post.title}
                                    </h3>
                                    <p class="mb-6 flex-grow text-[0.95rem] leading-relaxed text-text">${post.excerpt}</p>
                                    <div class="flex flex-wrap gap-2">
                                        ${post.tags.map(tag => `
                                            <span class="rounded-full py-1 px-3 text-xs font-medium" 
                                                  style="background-color: ${tag.bgColor}; color: ${tag.color}">
                                                ${tag.name}
                                            </span>
                                        `).join('')}
                                    </div>
                                </div>
                            </a>
                        </article>
                    `).join('')}
                </div>
                
                <div class="mt-8 text-center">
                    <a href="${blog.cta.url}" 
                       class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                        ${blog.cta.text}
                    </a>
                </div>
            </section>
        `;
    }
};