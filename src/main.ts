import './style.css'
import { AppController } from './controllers/AppController'
import { Router } from './utils/Router'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const app = new AppController()
  const router = new Router()
  
  // Set up routes
  router.addRoute('/', () => app.renderHome())
  router.addRoute('/about', () => app.renderAbout())
  router.addRoute('/projects', () => app.renderProjects())
  router.addRoute('/contact', () => app.renderContact())
  
  // Start the router
  router.start()
  
  // Handle navigation
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (target.matches('[data-route]')) {
      e.preventDefault()
      const route = target.getAttribute('data-route')
      if (route) {
        router.navigate(route)
      }
    }
  })
})