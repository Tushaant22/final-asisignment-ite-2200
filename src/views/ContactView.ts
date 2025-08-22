export class ContactView {
  render(): string {
    return `
      <div class="relative overflow-hidden">
        <!-- Hero Section -->
        <section class="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
          <div class="container-max section-padding">
            <div class="text-center animate-fade-in">
              <h1 class="text-5xl md:text-7xl font-bold text-secondary-900 mb-6">
                Get In <span class="text-primary-600">Touch</span>
              </h1>
              <p class="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>
          </div>
        </section>

        <!-- Contact Form Section -->
        <section class="py-20 bg-white">
          <div class="container-max section-padding">
            <div class="max-w-2xl mx-auto">
              <div class="card">
                <h2 class="text-3xl font-bold text-secondary-900 mb-6 text-center">Send Me a Message</h2>
                <form id="contact-form" class="space-y-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-secondary-700 mb-2">Name</label>
                    <input type="text" id="name" name="name" required class="input" placeholder="Your full name">
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-medium text-secondary-700 mb-2">Email</label>
                    <input type="email" id="email" name="email" required class="input" placeholder="your.email@example.com">
                  </div>
                  
                  <div>
                    <label for="subject" class="block text-sm font-medium text-secondary-700 mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" required class="input" placeholder="What's this about?">
                  </div>
                  
                  <div>
                    <label for="message" class="block text-sm font-medium text-secondary-700 mb-2">Message</label>
                    <textarea id="message" name="message" rows="6" required class="input resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>
                  
                  <button type="submit" class="btn-primary w-full text-lg py-4">
                    Send Message
                    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Info Section -->
        <section class="py-20 bg-secondary-50">
          <div class="container-max section-padding">
            <div class="text-center mb-16">
              <h2 class="text-4xl font-bold text-secondary-900 mb-4">Other Ways to Connect</h2>
              <p class="text-xl text-secondary-600 max-w-2xl mx-auto">
                Prefer a different way to get in touch? Here are some alternatives.
              </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="card text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Email</h3>
                <p class="text-secondary-600">hello@example.com</p>
              </div>
              
              <div class="card text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Phone</h3>
                <p class="text-secondary-600">+1 (555) 123-4567</p>
              </div>
              
              <div class="card text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Location</h3>
                <p class="text-secondary-600">New York, NY</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    `
  }

  initialize(): void {
    const form = document.getElementById('contact-form') as HTMLFormElement
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        // Get form data
        const formData = new FormData(form)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const subject = formData.get('subject') as string
        const message = formData.get('message') as string
        
        // Simple validation
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields.')
          return
        }
        
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement
        const originalText = submitButton.innerHTML
        
        submitButton.innerHTML = 'Sending...'
        submitButton.disabled = true
        
        setTimeout(() => {
          alert('Thank you for your message! I\'ll get back to you soon.')
          form.reset()
          submitButton.innerHTML = originalText
          submitButton.disabled = false
        }, 2000)
      })
    }
  }
}