import { content } from '../data/content.js';

export const Connect = {
    render() {
        const connect = content.connect;
        return `
            <section class="forms-section">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    ${connect.heading}
                </h2>
                
                <div class="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
                    <!-- Contact Form -->
                    <div class="rounded-lg border border-border bg-surface p-8">
                        <h3 class="m-0 mb-2 font-mono text-xl font-bold text-accent">${connect.contact.title}</h3>
                        <p class="mb-4 text-text-light">${connect.contact.description}</p>
                        
                        <form id="contact-form" action="#" method="POST" class="contact-form">
                            <div class="mb-6">
                                <label for="name" class="mb-2 block text-sm font-medium text-text">${connect.contact.form.name.label}</label>
                                <input type="text" id="name" name="name" ${connect.contact.form.name.required ? 'required' : ''} 
                                       placeholder="${connect.contact.form.name.placeholder}"
                                       class="w-full rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50">
                            </div>
                            <div class="mb-6">
                                <label for="email" class="mb-2 block text-sm font-medium text-text">${connect.contact.form.email.label}</label>
                                <input type="email" id="email" name="email" ${connect.contact.form.email.required ? 'required' : ''} 
                                       placeholder="${connect.contact.form.email.placeholder}"
                                       class="w-full rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50">
                            </div>
                            <div class="mb-6">
                                <label for="message" class="mb-2 block text-sm font-medium text-text">${connect.contact.form.message.label}</label>
                                <textarea id="message" name="message" rows="${connect.contact.form.message.rows}" ${connect.contact.form.message.required ? 'required' : ''} 
                                          placeholder="${connect.contact.form.message.placeholder}"
                                          class="w-full min-h-[7.5rem] resize-y rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"></textarea>
                            </div>
                            <button type="submit" 
                                    class="w-full inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                                ${connect.contact.form.submit}
                            </button>
                        </form>
                    </div>
                    
                    <!-- Newsletter -->
                    <div class="rounded-lg border border-border bg-surface p-8">
                        <h3 class="m-0 mb-2 font-mono text-xl font-bold text-accent">${connect.newsletter.title}</h3>
                        <p class="mb-6 text-[0.95rem] leading-relaxed text-text-light">
                            ${connect.newsletter.description}
                        </p>
                        
                        <form id="newsletter-form" action="#" method="POST" class="newsletter-form">
                            <div class="mb-6">
                                <label for="newsletter-email" class="mb-2 block text-sm font-medium text-text">${connect.newsletter.form.email.label}</label>
                                <input type="email" id="newsletter-email" name="email" ${connect.newsletter.form.email.required ? 'required' : ''} 
                                       placeholder="${connect.newsletter.form.email.placeholder}"
                                       class="w-full rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50">
                            </div>
                            <button type="submit" 
                                    class="w-full inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                                ${connect.newsletter.form.submit}
                            </button>
                        </form>
                        
                        <p class="mt-6 mb-0 text-center text-xs text-text-light/70">
                            ${connect.newsletter.privacy}
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
};