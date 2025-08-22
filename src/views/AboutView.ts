export class AboutView {
  render(container: HTMLElement): void {
    container.innerHTML = `
      <div class="view">
        <div class="hero">
          <h1>About This Project</h1>
          <p>Learn more about the technologies and architecture behind this modern TypeScript application.</p>
        </div>

        <div class="grid">
          <div class="card">
            <h3>🛠️ Technologies Used</h3>
            <p>This project is built with cutting-edge web technologies:</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem; color: var(--text-secondary);">
              <li>TypeScript for type safety</li>
              <li>Vite for fast development</li>
              <li>Modern CSS with custom properties</li>
              <li>Modular architecture pattern</li>
            </ul>
          </div>
          
          <div class="card">
            <h3>🏗️ Architecture</h3>
            <p>The application follows a clean MVC pattern:</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem; color: var(--text-secondary);">
              <li><strong>Controllers:</strong> Handle application logic</li>
              <li><strong>Views:</strong> Manage UI rendering</li>
              <li><strong>Separation:</strong> Clean code organization</li>
              <li><strong>Modularity:</strong> Easy to extend and maintain</li>
            </ul>
          </div>

          <div class="card">
            <h3>✨ Features</h3>
            <p>Key features of this application:</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem; color: var(--text-secondary);">
              <li>Single Page Application (SPA)</li>
              <li>Responsive design</li>
              <li>Smooth animations</li>
              <li>Interactive components</li>
              <li>Clean, modern UI</li>
            </ul>
          </div>

          <div class="card">
            <h3>🎯 Best Practices</h3>
            <p>This project demonstrates:</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem; color: var(--text-secondary);">
              <li>TypeScript best practices</li>
              <li>Modern CSS techniques</li>
              <li>Accessible design patterns</li>
              <li>Performance optimization</li>
              <li>Code organization</li>
            </ul>
          </div>
        </div>

        <div class="card" style="margin-top: 2rem; text-align: center;">
          <h3>Ready to Build Something Amazing?</h3>
          <p>This foundation gives you everything you need to create modern web applications with TypeScript.</p>
          <button class="btn" id="back-home-btn" style="margin-top: 1rem;">
            Back to Home
          </button>
        </div>
      </div>
    `

    this.setupEventListeners()
  }

  private setupEventListeners(): void {
    const backHomeBtn = document.getElementById('back-home-btn')
    backHomeBtn?.addEventListener('click', () => {
      const homeBtn = document.getElementById('home-btn') as HTMLButtonElement
      homeBtn?.click()
    })
  }
}