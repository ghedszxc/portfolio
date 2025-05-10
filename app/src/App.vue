<template>
  <div>
    <Navbar />
    <main style="height: 90vh;">
      <!-- <Carousel style="width: 100vw; height: 91vh;" /> -->
      <Me v-if="displayPage == 'Me'" />
      <Projects v-if="displayPage == 'Projects'" />
      <Experience v-if="displayPage == 'Experience'" />
    </main>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';

import Me from './components/me.vue';
import Projects from './components/projects.vue';
import Experience from './components/experience.vue';

export default {
  components: {
    Navbar, Me, Projects, Experience
  },
  data:() => ({
    windowScroll: 0
  }),
  computed: {
    displayPage() {
      return this.$store.state.displayPage
    }
  },
  mounted(){
    window.addEventListener("scroll", this.onDetectScroll())
  },
  unmounted(){
    window.addEventListener("scroll", this.onDetectScroll())
  },
  methods: {
    onDetectScroll() {
      this.windowScroll = window?.top?.scrollY
    }
  }
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
