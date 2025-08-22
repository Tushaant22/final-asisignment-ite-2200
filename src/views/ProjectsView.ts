export class ProjectsView {
  render(): string {
    return `
      <div class="relative overflow-hidden">
        <!-- Hero Section -->
        <section class="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
          <div class="container-max section-padding">
            <div class="text-center animate-fade-in">
              <h1 class="text-5xl md:text-7xl font-bold text-secondary-900 mb-6">
                My <span class="text-primary-600">Projects</span>
              </h1>
              <p class="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore my portfolio of web applications and development projects showcasing modern technologies and best practices.
              </p>
            </div>
          </div>
        </section>

        <!-- Projects Grid -->
        <section class="py-20 bg-white">
          <div class="container-max section-padding">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="card group">
                <div class="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg class="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">TypeScript Portfolio</h3>
                <p class="text-secondary-600 mb-4">Modern web application built with TypeScript, Tailwind CSS, and Vite.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">TypeScript</span>
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Tailwind</span>
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Vite</span>
                </div>
              </div>

              <div class="card group">
                <div class="w-full h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg class="w-16 h-16 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Responsive Design</h3>
                <p class="text-secondary-600 mb-4">Mobile-first responsive layouts that work beautifully on all devices.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">CSS Grid</span>
                  <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Flexbox</span>
                  <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Mobile-First</span>
                </div>
              </div>

              <div class="card group">
                <div class="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg class="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Performance Optimized</h3>
                <p class="text-secondary-600 mb-4">Fast loading applications with optimized assets and efficient code.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Vite</span>
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Tree Shaking</span>
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Lazy Loading</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="py-20 bg-secondary-50">
          <div class="container-max section-padding text-center">
            <h2 class="text-3xl font-bold text-secondary-900 mb-4">Interested in Working Together?</h2>
            <p class="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your next project and how we can bring your ideas to life.
            </p>
            <button data-route="/contact" class="btn-primary text-lg px-8 py-4">
              Get In Touch
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </section>
      </div>
    `
  }

  initialize(): void {
    // Any initialization logic for the projects view
  }
}