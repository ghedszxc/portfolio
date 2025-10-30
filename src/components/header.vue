<template>
  <div
    class="grid justify-items-center h-[100vh] bg-[url(/bg_header_1.jpg)] bg-fixed bg-no-repeat bg-cover"
  >
    <motion.div
      :initial="{ opacity: 0, x: -100 }"
      :whileInView="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.8 }"
      class="place-self-center text-white text-center"
    >
      <h1 class="text-5xl md:text-6xl font-bold tracking-[7px] mb-2">
        WELCOME
      </h1>
      <span> I'm Gerard Mendiola a web developer </span>
    </motion.div>
  </div>
</template>
<script setup lang="ts">
import { motion } from "motion-v";
</script>
<style></style>
