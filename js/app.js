class App {
    // ... existing code ...
    
    render() {
        this.root.innerHTML = `
            ${Header.render()}
            <div id="page-container">
                <main class="mx-auto px-10 py-4 pb-8 max-w-7xl">
                    ${Hero.render()}
                    ${Profile.render()}
                    ${Services.render()}
                    ${Projects.render()}
                    ${Connect.render()}
                    ${Blog.render()}
                    ${Resume.render()}
                    ${FAQ.render()}
                </main>
            </div>
            ${Footer.render()}
        `;
    }
}