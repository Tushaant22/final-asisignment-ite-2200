import { HomeView } from '../views/HomeView'
import { AboutView } from '../views/AboutView'
import { ProjectsView } from '../views/ProjectsView'
import { ContactView } from '../views/ContactView'
import { HeaderComponent } from '../components/HeaderComponent'
import { FooterComponent } from '../components/FooterComponent'

export class AppController {
  private appElement: HTMLElement
  private headerComponent: HeaderComponent
  private footerComponent: FooterComponent

  constructor() {
    this.appElement = document.getElementById('app')!
    this.headerComponent = new HeaderComponent()
    this.footerComponent = new FooterComponent()
  }

  private renderLayout(content: string): void {
    this.appElement.innerHTML = `
      ${this.headerComponent.render()}
      <main class="min-h-screen">
        ${content}
      </main>
      ${this.footerComponent.render()}
    `
    
    // Initialize header functionality
    this.headerComponent.initialize()
  }

  renderHome(): void {
    const homeView = new HomeView()
    this.renderLayout(homeView.render())
    homeView.initialize()
  }

  renderAbout(): void {
    const aboutView = new AboutView()
    this.renderLayout(aboutView.render())
    aboutView.initialize()
  }

  renderProjects(): void {
    const projectsView = new ProjectsView()
    this.renderLayout(projectsView.render())
    projectsView.initialize()
  }

  renderContact(): void {
    const contactView = new ContactView()
    this.renderLayout(contactView.render())
    contactView.initialize()
  }
}