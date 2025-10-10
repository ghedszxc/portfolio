<template>
  <Navbar />
  <main
    class="grid justify-self-center w-full max-w-full lg:max-w-[55rem] font-(family-name: 'Avenir LT Std', Avenir, Helvetica, Arial, sans-serif)"
  >
    <Me id="Me" />
    <Experience id="Experience" />
    <!-- <Projects id="Projects" /> -->
  </main>
</template>

<script>
import Navbar from "./components/navbar.vue";

import Me from "./components/me.vue";
import Experience from "./components/experience.vue";
// import Projects from './components/projects.vue';

export default {
  components: {
    Navbar,
    Me,
    Experience,
    // Projects
  },
  data: () => ({
    windowScroll: 0,
  }),
  computed: {
    displayPage() {
      return this.$store.state.displayPage;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onDetectScroll());
  },
  unmounted() {
    window.addEventListener("scroll", this.onDetectScroll());
  },
  methods: {
    onDetectScroll() {
      this.windowScroll = window?.top?.scrollY;
    },
  },
};
</script>

<style scoped></style>
