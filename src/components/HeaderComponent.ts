export class HeaderComponent {
  render(): string {
    return `
      <header class="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-50">
        <div class="container-max section-padding">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <h1 class="text-2xl font-bold text-primary-600">Portfolio</h1>
            </div>
            
            <nav class="hidden md:flex space-x-8">
              <a href="#home" class="nav-link text-secondary-700 hover:text-primary-600 transition-colors duration-200">Home</a>
              <a href="#about" class="nav-link text-secondary-700 hover:text-primary-600 transition-colors duration-200">About</a>
              <a href="#projects" class="nav-link text-secondary-700 hover:text-primary-600 transition-colors duration-200">Projects</a>
              <a href="#contact" class="nav-link text-secondary-700 hover:text-primary-600 transition-colors duration-200">Contact</a>
            </nav>
            
            <button id="mobile-menu-button" class="md:hidden p-2 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-secondary-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          
          <div id="mobile-menu" class="md:hidden hidden border-t border-secondary-200 pt-4 pb-4">
            <div class="flex flex-col space-y-2">
              <a href="#home" class="nav-link block px-3 py-2 text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md transition-colors duration-200">Home</a>
              <a href="#about" class="nav-link block px-3 py-2 text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md transition-colors duration-200">About</a>
              <a href="#projects" class="nav-link block px-3 py-2 text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md transition-colors duration-200">Projects</a>
              <a href="#contact" class="nav-link block px-3 py-2 text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </header>
    `
  }

  initialize(): void {
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const mobileMenu = document.getElementById('mobile-menu')
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
      })
    }
  }
}