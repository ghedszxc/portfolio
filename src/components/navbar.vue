<template>
  <nav
    :class="`${props?.scrolledPast100vh ? 'bg-[#0d0d0d] border-b border-[#262626]' : 'bg-transparent'} grid content-center h-[8vh] w-full fixed top-0 left-0 z-50 transition-colors duration-300`"
    style="transform: translateZ(0); -webkit-transform: translateZ(0);"
  >
    <div class="mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex shrink-0 items-center">
            <img
              class="h-[40px] w-auto"
              src="/navicon-white.svg"
              alt="navicon"
            />
          </div>
        </div>
        <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            @click="downloadPdf"
            class="cursor-pointer flex items-center border border-[var(--accent)] text-[var(--accent)] px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[var(--accent)] hover:text-[#0d0d0d] transition-colors"
          >
            Resume
            <img
              src="/download-white.svg"
              alt="download"
              class="h-[16px] w-auto ml-2"
            />
          </button>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  scrolledPast100vh: Boolean,
});

async function downloadPdf() {
  const pdfPath = "/resume.pdf";
  const fileName = "Web Developer - Mendiola, Gerard.pdf";
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>
