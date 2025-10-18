<template>
  <motion.div
    :initial="{ opacity: 0, y: 100 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.8 }"
    class="grid justify-items-center py-2 md:py-12"
  >
    <div class="w-full max-w-full lg:max-w-[55rem]">
      <h2
        class="text-3xl md:text-4xl pt-3 font-bold uppercase tracking-[2px] text-center mb-2"
      >
        Skill set
      </h2>
      <div class="w-full">
        <apexchart :options="options" height="500" :series="series"></apexchart>
      </div>
    </div>
  </motion.div>
</template>
<script setup lang="ts">
import { motion } from "motion-v";
import { ref } from "vue";

const options = ref({
  chart: {
    type: "bar",
    width: "100",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  tooltip: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: [
    function (data: any) {
      return data?.value >= 85 && data?.value <= 100 ? "#4CAF50" : "#42A5F5";
    },
  ],
  xaxis: {
    categories: [
      "Vue 2, 3 & Nuxt JS",
      "React & Next JS",
      "TypeScript",
      "MySQL",
      "GraphQL",
      "PHP",
      "Laravel",
      "Coremedia",
      "Headless CMS",
      "Node JS",
      "Git",
      "Jenkins",
      "Scrum / Agile",
    ],
  },
});

const series = ref([
  {
    name: "series-1",
    data: [95, 80, 80, 85, 75, 85, 75, 80, 80, 65, 95, 90, 95],
  },
]);
</script>
