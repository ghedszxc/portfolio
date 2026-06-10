<template>
  <div class="bg-[var(--bg-alt)] w-full">
    <div class="grid justify-items-center py-12 md:py-20 px-4">
      <motion.div
        :initial="{ opacity: 0, y: 40 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7 }"
        class="w-full max-w-[55rem]"
      >
        <p class="text-xs font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-3">Capabilities</p>
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">Skill Set</h2>
        <div class="w-12 h-[2px] bg-[var(--accent)] mb-10"></div>

        <div v-for="group in skillGroups" :key="group.label" class="mb-8">
          <p class="text-xs font-semibold tracking-[2px] uppercase text-[var(--muted)] mb-3">
            {{ group.label }}
          </p>
          <div class="flex flex-wrap gap-2">
            <motion.span
              v-for="(skill, index) in group.skills"
              :key="skill"
              :initial="{ opacity: 0, scale: 0.9 }"
              :whileInView="{ opacity: 1, scale: 1 }"
              :transition="{ duration: 0.3, delay: index * 0.05 }"
              class="bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-1.5 text-sm text-[var(--text)] cursor-default hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {{ skill }}
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["Vue 2/3 + Nuxt", "React + Next", "TypeScript", "GraphQL"],
  },
  {
    label: "Backend & CMS",
    skills: ["PHP", "Laravel", "MySQL", "Node JS", "CoreMedia 12", "Storyblok", "Drupal"],
  },
  {
    label: "Tools & Process",
    skills: ["Git", "Jenkins", "Scrum / Agile", "AI Tools"],
  },
];
</script>
