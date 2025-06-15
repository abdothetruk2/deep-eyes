<template>
  <section class="pt-24 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg')] bg-cover bg-center opacity-10"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-800/80"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Transform Your
            <span class="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">Digital Vision</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Deep-eyes delivers cutting-edge development services that bring your ideas to life with precision, innovation, and unmatched quality.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" class="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl">
              Start Your Project
            </a>
            <a href="#services" class="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full animate-float"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 bg-primary-400/20 rounded-full animate-float" style="animation-delay: 2s;"></div>
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-300/20 rounded-full animate-float" style="animation-delay: 4s;"></div>
  </section>
</template>