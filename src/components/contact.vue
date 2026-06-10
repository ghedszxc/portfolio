<template>
  <div class="bg-[#080808] w-full">
    <div class="grid justify-items-center py-16 md:py-24 px-4">
      <motion.div
        :initial="{ opacity: 0, y: 40 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7 }"
        class="w-full max-w-[55rem] text-center"
      >
        <p
          class="text-xs font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-3"
        >
          Contact
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
          Get in Touch
        </h2>
        <div class="w-12 h-[2px] bg-[var(--accent)] mx-auto mb-6"></div>
        <p class="text-[var(--muted)] text-base mb-10">
          Open to new opportunities
        </p>

        <div class="flex items-center justify-center gap-8 mb-12">
          <a
            href="https://github.com/ghedszxc"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-white transition-colors group"
          >
            <img
              src="/github.svg"
              alt="GitHub"
              class="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity brightness-0 invert"
            />
            <span class="text-xs">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mgerard96/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors group"
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              class="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <span class="text-xs">LinkedIn</span>
          </a>
          <a
            href="mailto:mendiolagerard96@gmail.com"
            class="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <div
              class="h-8 w-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <span class="text-xs">Email</span>
          </a>
        </div>

        <p class="text-xs text-[var(--muted)]">© 2026 Gerard Mendiola</p>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
</script>
