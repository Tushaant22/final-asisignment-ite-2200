export class HeaderComponent {
  render(): string {
    return `
      <header class="bg-white shadow-sm border-b border-secondary-100 sticky top-0 z-50">
        <div class="container-max section-padding">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <h1 class="text-2xl font-bold text-secondary-900">Portfolio</h1>
            </div>
            
            <nav class="hidden md:flex space-x-8">
              <button data-route="/" class="nav-link text-secondary-600 hover:text-primary-600 transition-colors">
                Home
              </button>
              <button data-route="/about" class="nav-link text-secondary-600 hover:text-primary-600 transition-colors">
                About
              </button>
              <button data-route="/projects" class="nav-link text-secondary-600 hover:text-primary-600 transition-colors">
                Projects
              </button>
              <button data-route="/contact" class="nav-link text-secondary-600 hover:text-primary-600 transition-colors">
                Contact
              </button>
            </nav>
            
            <button id="mobile-menu-btn" class="md:hidden p-2 rounded-md text-secondary-600 hover:text-primary-600 hover:bg-secondary-50">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          
          <!-- Mobile menu -->
          <div id="mobile-menu" class="md:hidden hidden border-t border-secondary-100 py-4">
            <div class="flex flex-col space-y-4">
              <button data-route="/" class="nav-link text-left text-secondary-600 hover:text-primary-600 transition-colors">
                Home
              </button>
              <button data-route="/about" class="nav-link text-left text-secondary-600 hover:text-primary-600 transition-colors">
                About
              </button>
              <button data-route="/projects" class="nav-link text-left text-secondary-600 hover:text-primary-600 transition-colors">
                Projects
              </button>
              <button data-route="/contact" class="nav-link text-left text-secondary-600 hover:text-primary-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>
    `
  }

  initialize(): void {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
      })
    }
    
    // Update active nav link
    this.updateActiveNavLink()
  }

  private updateActiveNavLink(): void {
    const currentPath = window.location.pathname
    const navLinks = document.querySelectorAll('.nav-link')
    
    navLinks.forEach(link => {
      const route = link.getAttribute('data-route')
      if (route === currentPath) {
        link.classList.add('text-primary-600', 'font-medium')
        link.classList.remove('text-secondary-600')
      } else {
        link.classList.remove('text-primary-600', 'font-medium')
        link.classList.add('text-secondary-600')
      }
    })
  }
}