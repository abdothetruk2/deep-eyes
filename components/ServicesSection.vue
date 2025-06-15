<template>
  <section id="services" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We provide comprehensive development solutions tailored to your business needs
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" 
             class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
          <div class="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <component :is="service.icon" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-4">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {{ service.description }}
          </p>
          <ul class="space-y-2">
            <li v-for="feature in service.features" :key="feature" 
                class="flex items-center text-gray-600 dark:text-gray-300">
              <svg class="w-5 h-5 text-accent-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies and best practices.',
    icon: 'CodeBracketIcon',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Tuned',
      'Modern Frameworks'
    ]
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'DevicePhoneMobileIcon',
    features: [
      'Native Performance',
      'Cross-Platform',
      'App Store Ready',
      'Push Notifications'
    ]
  },
  {
    id: 3,
    title: 'Backend Systems',
    description: 'Scalable server-side solutions, APIs, and database architectures.',
    icon: 'ServerIcon',
    features: [
      'RESTful APIs',
      'Database Design',
      'Cloud Infrastructure',
      'Security First'
    ]
  },
  {
    id: 4,
    title: 'E-commerce',
    description: 'Complete online store solutions with payment integration and management.',
    icon: 'ShoppingCartIcon',
    features: [
      'Payment Integration',
      'Inventory Management',
      'Order Tracking',
      'Analytics Dashboard'
    ]
  },
  {
    id: 5,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
    icon: 'PaintBrushIcon',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems'
    ]
  },
  {
    id: 6,
    title: 'Consulting',
    description: 'Strategic technology consulting to guide your digital transformation.',
    icon: 'LightBulbIcon',
    features: [
      'Technology Strategy',
      'Architecture Review',
      'Performance Audit',
      'Team Training'
    ]
  }
]

const CodeBracketIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' })
])

const DevicePhoneMobileIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3v-1.5m-3 0h3m-3 18.75h3' })
])

const ServerIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z' })
])

const ShoppingCartIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' })
])

const PaintBrushIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' })
])

const LightBulbIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18' })
])
</script>