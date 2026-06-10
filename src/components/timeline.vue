<template>
  <div class="bg-[var(--bg)] w-full">
    <div class="grid justify-items-center py-12 md:py-20 px-4">
      <motion.div
        :initial="{ opacity: 0, y: 40 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7 }"
        class="w-full max-w-[55rem]"
      >
        <p
          class="text-xs font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-3"
        >
          Career
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
          Experience
        </h2>
        <div class="w-12 h-[2px] bg-[var(--accent)] mb-10"></div>

        <div class="relative ml-2">
          <!-- Vertical line -->
          <div
            class="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)]/30"
          ></div>

          <div
            v-for="(entry, index) in timeline"
            :key="index"
            class="relative pl-10 pb-10 last:pb-0"
          >
            <!-- Dot -->
            <div
              class="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-[var(--accent)]"
            ></div>

            <motion.div
              :initial="{ opacity: 0, x: -30 }"
              :whileInView="{ opacity: 1, x: 0 }"
              :transition="{ duration: 0.6, delay: index * 0.1 }"
            >
              <div class="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 class="text-lg font-semibold text-[var(--text)]">
                  {{ entry.title }}
                </h3>
                <span class="text-sm text-[var(--muted)]">·</span>
                <span class="text-sm font-medium text-[var(--accent)]">{{
                  entry.company
                }}</span>
              </div>
              <p class="text-xs text-[var(--muted)] tracking-wide mb-3">
                {{ entry.period }}
              </p>
              <ul class="space-y-1">
                <li
                  v-for="(bullet, i) in entry.bullets"
                  :key="i"
                  class="text-sm text-[var(--muted)] flex gap-2"
                >
                  <span class="text-[var(--accent)] mt-0.5 flex-shrink-0"
                    >▸</span
                  >
                  {{ bullet }}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <!-- FREELANCE -->
        <h2
          class="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2 mt-8 lg:mt-10"
        >
          Freelance
        </h2>
        <div class="w-12 h-[2px] bg-[var(--accent)] mb-10"></div>

        <div class="relative ml-2">
          <!-- Vertical line -->
          <div
            class="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)]/30"
          ></div>

          <div
            v-for="(entry, index) in freelance"
            :key="index"
            class="relative pl-10 pb-10 last:pb-0"
          >
            <!-- Dot -->
            <div
              class="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-[var(--accent)]"
            ></div>

            <motion.div
              :initial="{ opacity: 0, x: -30 }"
              :whileInView="{ opacity: 1, x: 0 }"
              :transition="{ duration: 0.6, delay: index * 0.1 }"
            >
              <div class="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 class="text-lg font-semibold text-[var(--text)]">
                  {{ entry.title }}
                </h3>
                <span class="text-sm text-[var(--muted)]">·</span>
                <span class="text-sm font-medium text-[var(--accent)]">{{
                  entry.company
                }}</span>
              </div>
              <p class="text-xs text-[var(--muted)] tracking-wide mb-3">
                {{ entry.period }}
              </p>
              <ul class="space-y-1">
                <li
                  v-for="(bullet, i) in entry.bullets"
                  :key="i"
                  class="text-sm text-[var(--muted)] flex gap-2"
                >
                  <span class="text-[var(--accent)] mt-0.5 flex-shrink-0"
                    >▸</span
                  >
                  {{ bullet }}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";

const timeline = [
  {
    title: "Web Developer",
    company: "Ascendion",
    period: "2022 – Present",
    bullets: [
      "Served as a Senior Analyst Programmer at Essilor International",
      "Developed and maintained B2B and B2C projects using the following technology stacks:",
      "Front end: Vue/Nuxt.js, Vuetify, React/Next.js, Tailwind. Enhanced application performance by integrating SSR and CSR, achieving a balance between high SEO visibility and rapid, dynamic navigation",
      "Back end: Java, Headless CMS CoreMedia & Storyblok",
      "Managed project deployments using CI/CD tools from Atlassian, Bitbucket, and Jenkins",
      "Utilized Agile/Scrum as the primary methodology",
      "Led multiple projects as a lead developer",
      "Facilitated meetings for daily stand-ups, project estimations, sprint planning, and realignment",
      "Committed to writing maintainable code that adheres to current coding standards",
      "Leveraged AI tools to accelerate project development",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "Teknovarik Inc.",
    period: "2018 – 2022",
    bullets: [
      "Developed full-stack web applications utilizing:",
      "Vue.js, Laravel, and Node.js",
      "Projects are hosted on GitLab",
      "Deployment methods:",
      "Manual deployment using LAMP from 2018 to 2020",
      "Transitioned to CI/CD and Docker from 2020 to 2022",
      "Agile/Scrum is our primary methodology",
      "Quality assurance practices:",
      "Perform manual testing",
      "Implement unit testing with Jest",
      "Document project requirements and sprint estimations",
      "Maintain and enhance existing applications",
    ],
  },
  {
    title: "MIS Staff",
    company: "Synergy Sales Intl. Corp.",
    period: "2017 – 2018",
    bullets: [
      "Created the company website utilizing HTML, CSS, plain JavaScript, and PHP",
      "Oversaw and updated the system database",
      "Handled software installations, data reformatting, and backups",
      "Resolved issues related to Windows OS updates, internet connectivity, and application installation failures",
      "Managed and installed CCTV systems",
    ],
  },
];

const freelance = [
  {
    title: "Front-end Developer",
    company: "Liberty Supply",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Built an improved version of the sales monitoring app",
      "Primarily stack tool/package used are Nuxt JS, Primevue & Mapbox",
      "Directus is powering the backend of the app",
      "Usage of Claude AI to speed-up building process",
    ],
  },
  {
    title: "Front-end Developer",
    company: "SOFTCODE365 Inc.",
    period: "JANUARY 2024 - APRIL 2025",
    bullets: [
      "Improved residential property app with updated stack tool:",
      "Migrate Vue 3 application to Nuxt JS and used Vuetify as main UI component framework",
      "Install 3 party packages (Google map, Vue Chart, Debounced and more) to support and improve the application",
      "Utilized Express JS for the backend and MongoDB for the database.",
      "Managed deployments via CI/CD on GitHub, including ticket monitoring.",
      "Integrated and developed UI design from Figma.",
      "Collaborated with 5-20 team members and conducted daily stand-up meetings.",
      "Improved team communication for resolving merge conflicts, task delegation, and coordination with the QA team on completed tickets.",
    ],
  },
];
</script>
