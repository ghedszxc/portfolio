<template>
  <main>
    <Navbar />
    <Carousel style="width: 100vw; height: 91vh;" />
  </main>
</template>

<script setup lang="ts">
import Navbar from './components/navbar.vue';
import Carousel from './components/carousel/index.vue';

import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue';


defineComponent
const windowScroll = ref(0) 

watch(windowScroll, (newValue: number, oldValue: number) => {
  if (newValue > oldValue) {
    // next
  } else if (newValue < oldValue) {
    // prev
  }
});

onMounted(async () => {
  window.addEventListener("scroll", onDetectScroll)
})

onBeforeUnmount(async () => {
  window.removeEventListener("scroll", onDetectScroll)
})

function onDetectScroll() {
    windowScroll.value = window?.top?.scrollY
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
