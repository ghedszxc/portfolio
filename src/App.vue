<template>
  <div class="bg-transparent relative">
    <Navbar
      class="grid justify-self-center w-full max-w-full"
      :scrolledPast100vh="scrolledPast100vh"
    />

    <main>
      <Header
        class="grid justify-self-center w-full max-w-full h-[30rem] mb-1"
      />
      <Me class="grid justify-self-center w-full max-w-full lg:max-w-[55rem]" />
      <Experience class="grid justify-self-center w-full bg-slate-100" />
      <Projects
        class="grid justify-self-center w-full max-w-full lg:max-w-[55rem]"
      />
    </main>
    <button
      v-if="displayButton"
      @click="onScrollToTop()"
      class="fixed bottom-2 right-2 cursor-pointer p-3 rounded-full bg-black"
    >
      <img src="/chevron-up.svg" alt="chevron-up" class="h-[15px] w-auto" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onBeforeUnmount, onMounted } from "vue";

const scrolledPast100vh = ref(false);
const displayButton = ref(false);

onMounted(() => {
  window?.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window?.removeEventListener("scroll", handleScroll);
});

async function handleScroll() {
  const scrollY = window?.scrollY || document?.documentElement?.scrollTop;
  const height = window?.innerHeight - 30;
  scrolledPast100vh.value = scrollY > height;

  displayButton.value = scrollY > window?.innerHeight / 2;
}

function onScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped></style>
