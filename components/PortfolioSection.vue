<template>
  <section id="portfolio" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Our Portfolio
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover some of our recent projects and see how we've helped businesses achieve their goals
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" 
             class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
          <div class="relative overflow-hidden">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">{{ project.category }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech" 
                    class="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm">
                {{ tech }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-accent-600 dark:text-accent-400 font-semibold">{{ project.category }}</span>
              <button class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold">
                View Details →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
          View All Projects
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Modern online shopping experience with advanced features and seamless checkout.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    category: 'Web Development',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking solution with biometric authentication.',
    image: 'https://images.pexels.com/photos/5849580/pexels-photo-5849580.jpeg',
    category: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Blockchain']
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    description: 'Comprehensive healthcare management system for medical professionals.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    category: 'Web Application',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker']
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    description: 'Property management and listing platform with virtual tours and analytics.',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
    category: 'Web Development',
    technologies: ['Nuxt.js', 'Laravel', 'MySQL', 'AWS']
  },
  {
    id: 5,
    title: 'Food Delivery App',
    description: 'On-demand food delivery application with real-time tracking and payments.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg',
    category: 'Mobile App',
    technologies: ['Flutter', 'Node.js', 'Redis', 'Google Maps']
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'Educational platform with interactive courses and progress tracking.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
    category: 'Web Application',
    technologies: ['Angular', 'Express.js', 'MongoDB', 'WebRTC']
  }
]
</script>