<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="animate-slide-in-left">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            About Deep-eyes
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We are a team of passionate developers, designers, and strategists who believe in the power of technology to transform businesses and create meaningful experiences.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            With years of experience in cutting-edge technologies, we've helped startups and enterprises alike achieve their digital goals through innovative solutions and exceptional craftsmanship.
          </p>
          
          <div class="grid grid-cols-2 gap-8 mb-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
              <div class="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
              <div class="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
          </div>

          <a href="#contact" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block">
            Work With Us
          </a>
        </div>

        <div class="animate-slide-in-right">
          <div class="relative">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                 alt="Team working on development projects" 
                 class="rounded-2xl shadow-2xl w-full h-96 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <h3 class="text-3xl font-display font-bold text-gray-900 dark:text-white text-center mb-12">
          Our Values
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
            <p class="text-gray-600 dark:text-gray-300">We stay ahead of the curve with the latest technologies and methodologies.</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality</h4>
            <p class="text-gray-600 dark:text-gray-300">Every project is crafted with attention to detail and rigorous testing.</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Partnership</h4>
            <p class="text-gray-600 dark:text-gray-300">We work closely with our clients as partners in their success.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>