export class HomeView {
  render(): string {
    return `
      <div class="relative overflow-hidden">
        <!-- Hero Section -->
        <section class="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
          <div class="container-max section-padding">
            <div class="text-center animate-fade-in">
              <h1 class="text-5xl md:text-7xl font-bold text-secondary-900 mb-6">
                Welcome to My
                <span class="text-primary-600 animate-bounce-gentle inline-block">Portfolio</span>
              </h1>
              <p class="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                A modern web application showcasing clean design, responsive layouts, and interactive features built with TypeScript and Tailwind CSS.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button data-route="/projects" class="btn-primary text-lg px-8 py-4">
                  View My Work
                  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>
                <button data-route="/about" class="btn-secondary text-lg px-8 py-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <!-- Decorative elements -->
          <div class="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-50 animate-bounce-gentle"></div>
          <div class="absolute bottom-10 right-10 w-16 h-16 bg-secondary-300 rounded-full opacity-30 animate-bounce-gentle" style="animation-delay: 1s;"></div>
        </section>

        <!-- Features Section -->
        <section class="py-20 bg-white">
          <div class="container-max section-padding">
            <div class="text-center mb-16">
              <h2 class="text-4xl font-bold text-secondary-900 mb-4">Key Features</h2>
              <p class="text-xl text-secondary-600 max-w-2xl mx-auto">
                Built with modern web technologies and best practices
              </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="card text-center group">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">TypeScript</h3>
                <p class="text-secondary-600">Type-safe development with modern JavaScript features</p>
              </div>
              
              <div class="card text-center group">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Responsive Design</h3>
                <p class="text-secondary-600">Beautiful layouts that work on all devices</p>
              </div>
              
              <div class="card text-center group">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Fast Performance</h3>
                <p class="text-secondary-600">Optimized with Vite for lightning-fast development</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Stats Section -->
        <section class="py-20 bg-secondary-50">
          <div class="container-max section-padding">
            <div class="grid md:grid-cols-3 gap-8 text-center">
              <div class="animate-slide-up">
                <div class="text-4xl font-bold text-primary-600 mb-2" data-counter="100">0</div>
                <p class="text-secondary-600">Lines of Code</p>
              </div>
              <div class="animate-slide-up" style="animation-delay: 0.2s;">
                <div class="text-4xl font-bold text-primary-600 mb-2" data-counter="5">0</div>
                <p class="text-secondary-600">Components</p>
              </div>
              <div class="animate-slide-up" style="animation-delay: 0.4s;">
                <div class="text-4xl font-bold text-primary-600 mb-2" data-counter="4">0</div>
                <p class="text-secondary-600">Pages</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    `
  }

  initialize(): void {
    // Animate counters
    const counters = document.querySelectorAll('[data-counter]')
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-counter') || '0')
      let current = 0
      const increment = target / 50
      
      const updateCounter = () => {
        if (current < target) {
          current += increment
          counter.textContent = Math.ceil(current).toString()
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target.toString()
        }
      }
      
      // Start animation after a delay
      setTimeout(updateCounter, 500)
    })
  }
}