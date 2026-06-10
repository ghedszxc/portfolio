<template>
  <div
    class="relative grid justify-items-center h-[100vh] bg-[url(/bg_header_1.jpg)] bg-fixed bg-no-repeat bg-cover"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <motion.div
      :initial="{ opacity: 0, x: -100 }"
      :whileInView="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.8 }"
      class="relative place-self-center text-center px-4"
    >
      <h1
        class="text-5xl md:text-7xl font-black text-white tracking-tight mb-3"
      >
        Gerard Mendiola
      </h1>
      <p
        class="text-lg md:text-xl font-medium tracking-[4px] uppercase text-[var(--accent)] mb-4"
      >
        Frontend Developer
      </p>
      <div class="w-12 h-[2px] bg-[var(--accent)] mx-auto mb-6"></div>
      <p class="text-[var(--muted)] text-base md:text-lg max-w-md mx-auto mb-8">
        Building scalable web products since 2017 — Vue, React, TypeScript
      </p>

      <div class="flex items-center justify-center gap-4 flex-wrap">
        <a
          href="https://github.com/ghedszxc"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-[var(--muted)] hover:text-white transition-colors"
        >
          <img
            src="/github.svg"
            alt="GitHub"
            class="h-6 w-6 brightness-0 invert"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mgerard96/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-[var(--muted)] hover:text-white transition-colors"
        >
          <img src="/linkedin.svg" alt="LinkedIn" class="h-6 w-6" />
        </a>
      </div>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
</script>
