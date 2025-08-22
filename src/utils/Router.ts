export class Router {
  private routes: Map<string, () => void> = new Map()
  private currentRoute: string = '/'

  addRoute(path: string, handler: () => void): void {
    this.routes.set(path, handler)
  }

  start(): void {
    // Handle initial route
    const initialPath = window.location.pathname || '/'
    this.navigate(initialPath, false)

    // Listen for browser back/forward buttons
    window.addEventListener('popstate', () => {
      const path = window.location.pathname || '/'
      this.handleRoute(path)
    })
  }

  navigate(path: string, pushState: boolean = true): void {
    if (pushState) {
      window.history.pushState({}, '', path)
    }
    this.handleRoute(path)
  }

  private handleRoute(path: string): void {
    this.currentRoute = path
    const handler = this.routes.get(path) || this.routes.get('/')
    if (handler) {
      handler()
    }
  }
}