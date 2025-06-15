<template>
  <div class="pt-24 pb-20">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p class="text-xl text-gray-300">
            Please read these terms carefully before using our services.
          </p>
          <div class="mt-6 text-gray-400">
            <span>Last updated: {{ lastUpdated }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            
            <!-- Introduction -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Agreement to Terms</h2>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms of Service ("Terms") govern your use of Deep-eyes' website and services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
              </p>
            </div>

            <!-- Services -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Our Services</h2>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Deep-eyes provides professional development services including but not limited to:
              </p>
              <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>Backend system development</li>
                <li>E-commerce solutions</li>
                <li>UI/UX design services</li>
                <li>Technology consulting</li>
                <li>Maintenance and support services</li>
              </ul>
            </div>

            <!-- User Responsibilities -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">User Responsibilities</h2>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees and charges in a timely manner</li>
              </ul>
            </div>

            <!-- Project Terms -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Project Terms</h2>
              
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Scope</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                All projects will be governed by a separate project agreement that outlines specific deliverables, timelines, and payment terms. The project agreement will supplement these Terms of Service.
              </p>

              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Payment Terms</h3>
              <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>Payment schedules will be outlined in individual project agreements</li>
                <li>Late payments may incur additional fees</li>
                <li>Work may be suspended for overdue payments</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>

              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes and Revisions</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Changes to project scope may result in additional charges and timeline adjustments. All change requests must be approved in writing before implementation.
              </p>
            </div>

            <!-- Intellectual Property -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Intellectual Property</h2>
              
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Client Content</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You retain ownership of all content, data, and materials you provide to us. You grant us a license to use such materials solely for the purpose of providing our services.
              </p>

              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Developed Work</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Upon full payment, you will own the custom code and designs created specifically for your project. We retain rights to our general methodologies, techniques, and any pre-existing intellectual property.
              </p>

              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Components</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Projects may include third-party libraries, frameworks, or services that are subject to their own licensing terms.
              </p>
            </div>

            <!-- Warranties and Disclaimers -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Warranties and Disclaimers</h2>
              
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Service Warranty</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We warrant that our services will be performed in a professional manner consistent with industry standards. We will correct any defects in our work at no additional charge for a period specified in the project agreement.
              </p>

              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Disclaimers</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Except as expressly stated, our services are provided "as is" without warranties of any kind. We do not guarantee that our services will meet your specific requirements or be error-free.
              </p>
            </div>

            <!-- Limitation of Liability -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Limitation of Liability</h2>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                To the maximum extent permitted by law, Deep-eyes shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
              </p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our total liability for any claim arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </div>

            <!-- Termination -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Termination</h2>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Either party may terminate a project agreement with written notice. Termination terms, including payment for work completed, will be outlined in individual project agreements.
              </p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to terminate services immediately if you breach these Terms or engage in unlawful activities.
              </p>
            </div>

            <!-- Governing Law -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Governing Law</h2>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of California, United States, without regard to conflict of law principles.
              </p>
            </div>

            <!-- Contact Information -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p class="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Email:</strong> legal@deep-eyes.dev
                </p>
                <p class="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p class="text-gray-600 dark:text-gray-300">
                  <strong>Address:</strong> San Francisco, CA
                </p>
              </div>
            </div>

            <!-- Changes to Terms -->
            <div class="mb-12">
              <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Changes to Terms</h2>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const lastUpdated = 'January 15, 2025'

useHead({
  title: 'Terms of Service | Deep-eyes',
  meta: [
    { name: 'description', content: 'Deep-eyes Terms of Service - Read our terms and conditions for using our development services.' }
  ]
})
</script>