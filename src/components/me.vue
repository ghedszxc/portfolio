<template>
  <div class="bg-[var(--bg)] w-full">
    <div class="grid justify-items-center py-12 md:py-20 px-4">
      <motion.div
        :initial="{ opacity: 0, x: 100 }"
        :whileInView="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.8 }"
        class="md:flex md:items-center gap-12 w-full max-w-[55rem]"
      >
        <div class="flex-shrink-0 mb-8 md:mb-0">
          <img
            class="h-[300px] w-[300px] object-cover rounded-xl ring-2 ring-[var(--accent)]/30 mx-auto"
            alt="Gerard Mendiola"
            src="/display_pic.jpg"
          />
        </div>
        <div>
          <p class="text-xs font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-3">About</p>
          <h2 class="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">A bit about me</h2>
          <div class="w-12 h-[2px] bg-[var(--accent)] mb-6"></div>
          <p class="text-[var(--muted)] text-base leading-relaxed mb-4">
            I started my career in 2017, building websites with plain HTML, CSS, JavaScript, and PHP.
            Over the years I expanded into modern frameworks — Vue, React, Node.js, and Laravel — and
            picked up strong TypeScript and GraphQL skills along the way.
          </p>
          <p class="text-[var(--muted)] text-base leading-relaxed">
            I'm deeply experienced on the frontend, particularly with Vue 2/3 and React ecosystems,
            while staying comfortable across the full stack. Currently building international B2C and
            B2B web products at EssilorLuxottica.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
</script>
