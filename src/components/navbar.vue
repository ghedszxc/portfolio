<template>
  <nav
    class="bg-transparent grid content-center h-[8vh] w-full border-b border-slate-300"
  >
    <div class="mx-auto w-full px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex shrink-0 items-center">
            <img class="h-[40px] w-auto" src="/navicon.svg" alt="navicon" />
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div>
            <div class="flex space-x-4">
              <button
                @click="downloadPdf"
                class="cursor-pointer flex items-center border-b-3 border-red-500 px-2 py-1 rounded-none hover:border-red-400 hover:bg-red-100"
              >
                <p class="font-semibold text-[0.85rem]">Resume</p>
                <img
                  src="/download.svg"
                  alt="download"
                  class="h-[20px] w-auto ml-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
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
