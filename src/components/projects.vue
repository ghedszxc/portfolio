<template>
  <div class="grid justify-items-center py-2 md:py-12">
    <h2
      class="text-3xl md:text-4xl pt-3 font-bold uppercase tracking-[2px] mb-12"
    >
      Projects
    </h2>

    <div class="px-[1rem]">
      <div v-for="(data, key) in projects" :key="key">
        <div class="flex place-items-center mt-12">
          <p
            class="text-lg md:text-xl w-full border-b border-gray-300 mb-4 pb-2"
          >
            {{ data?.title }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(item, key) in data?.items"
            :key="key"
            class="w-full grid place-self-center cursor-pointer"
          >
            <a
              v-if="item?.newTab"
              :href="item?.url"
              target="_blank"
              class="justify-items-center"
            >
              <img :src="item?.logo" :alt="item?.title" :class="item?.style" />
            </a>
            <button
              v-else="item?.newTab"
              :class="`w-full h-full justify-items-center truncate text-lg md:text-sm cursor-pointer ${item?.style}`"
            >
              <img :src="item?.logo" :alt="item?.title" class="h-15 mb-2" />
              {{ item?.title }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const projects = [
  {
    title: "ReactJS (B2C)",
    items: [
      {
        title: "EyeMed",
        logo: "https://www.eyemed.com/resource/crblob/8458/927a4e9a0378a7ef3adc27957691ec76/eyemed-logo-svg-data.svg",
        url: "https://www.eyemed.com/en-us",
        style: "h-30 w-auto p-5 hover:bg-slate-200",
        newTab: true,
      },
      {
        title: "EyeMed International",
        logo: "https://media.eyemedinternational.com/cms/caas/v1/media/2698/data/picture/31d87437130234a8e9df6bad34f8720c.png",
        url: "https://www.eyemedinternational.com/",
        style: "h-30 w-auto p-5 hover:bg-slate-200",
        newTab: true,
      },
      {
        title: "Eye Care",
        logo: "https://www.essilorluxotticaeyecare.com/images/logo-luxottica-2022-png-data.png",
        url: "https://www.essilorluxotticaeyecare.com/",
        style:
          "h-auto w-auto px-2 md:px-4 py-4 md:py-6 lg:py-12 hover:bg-slate-200",
        newTab: true,
      },
      {
        title: "One Sight",
        logo: "https://media-onesight.essilorluxottica.com/cms/caas/v1/media/260406/data/0a8b9f928468029e1d3379f70ddf68e2/logo-white.png?w=256&q=100",
        url: "https://onesight.essilorluxottica.com/",
        style:
          "h-auto w-auto bg-gray-950 bg-opacity-75 px-2 md:px-4 py-4 md:py-6 lg:py-12 hover:bg-slate-700",
        newTab: true,
      },
    ],
  },
  {
    title: "VueJS (B2B)",
    items: [
      {
        title: "EssilorPro",
        logo: "https://www.essilorpro.io/portal-cms-asset/2025-07/EL_Black_3.png",
        url: "https://www.essilorpro.io/my/auth/login-new",
        style: "p-2 lg:p-5 hover:bg-slate-200",
        newTab: false,
      },
      {
        title: "OptiPro",
        logo: "https://www.optipro.io/portal-cms-asset/2024-09/opticliq_logo1_0.png",
        url: "https://www.optipro.io/sg/auth/login",
        style: "p-2 lg:p-5 hover:bg-slate-200",
        newTab: false,
      },
      {
        title: "Nikon - Professionals Hub",
        logo: "https://professionals.nikonlenswear.com/portal-cms-asset/2024-09/nikon-logo_0_8.png",
        url: "https://www.optipro.io/sg/auth/login",
        style: "p-2 lg:p-5 hover:bg-slate-200",
        newTab: false,
      },
    ],
  },
];
</script>
