<template>
  <div class="grid justify-items-center py-2 md:py-12">
    <h2
      class="text-3xl md:text-4xl pt-3 font-bold uppercase tracking-[2px] mb-12"
    >
      Projects
    </h2>

    <div class="px-[1rem]">
      <div
        v-for="(data, key) in projects"
        :key="key"
        class="border-b border-gray-300 pb-6"
      >
        <div class="mt-4 mb-4 pb-2 text-center">
          <h3 class="text-lg">
            {{ data?.title }}
          </h3>
          <div class="text-[0.875rem] leading-[20px] py-2">
            <p>{{ data?.subtitle }}</p>
            <i>{{ data?.body }}</i>
          </div>
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
              :class="`w-full h-full justify-items-center truncate text-sm cursor-pointer ${item?.style}`"
            >
              <img
                :src="item?.logo"
                :alt="item?.title"
                class="h-15 mb-2 m-auto"
              />
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
    title: "React JS",
    subtitle:
      "These projects are B2C landing page, it serves to promote company product.",
    body: "Stack used are: Next JS, CoreMedia CMS & GraphQL.",
    items: [
      {
        title: "EyeMed",
        logo: "https://www.eyemed.com/resource/crblob/8458/927a4e9a0378a7ef3adc27957691ec76/eyemed-logo-svg-data.svg",
        url: "https://www.eyemed.com/en-us",
        style: "h-30 w-auto p-5 hover:bg-slate-200 m-auto",
        newTab: true,
      },
      {
        title: "EyeMed International",
        logo: "https://media.eyemedinternational.com/cms/caas/v1/media/2698/data/picture/31d87437130234a8e9df6bad34f8720c.png",
        url: "https://www.eyemedinternational.com/",
        style: "h-30 w-auto p-5 hover:bg-slate-200 m-auto",
        newTab: true,
      },
      {
        title: "Eye Care",
        logo: "https://www.essilorluxotticaeyecare.com/images/logo-luxottica-2022-png-data.png",
        url: "https://www.essilorluxotticaeyecare.com/",
        style:
          "h-auto w-auto px-2 md:px-4 py-4 md:py-6 lg:py-12 hover:bg-slate-200 m-auto",
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
    title: "Vue JS",
    subtitle:
      "These projects are B2B, customer transactions, rewarding points, refunds and more, are covered by these projects",
    body: "Stack used are: Vue JS, Drupal, & Java.",
    items: [
      {
        title: "EssilorPro",
        logo: "https://www.essilorpro.io/portal-cms-asset/2025-07/EL_Black_3.png",
        url: "https://www.essilorpro.io/my/auth/login-new",
        style: "p-2 lg:p-5 hover:bg-slate-200 m-auto",
        newTab: false,
      },
      {
        title: "OptiPro",
        logo: "https://www.optipro.io/portal-cms-asset/2024-09/opticliq_logo1_0.png",
        url: "https://www.optipro.io/sg/auth/login",
        style: "p-2 lg:p-5 hover:bg-slate-200 m-auto",
        newTab: false,
      },
      {
        title: "Nikon - Professionals Hub",
        logo: "https://professionals.nikonlenswear.com/portal-cms-asset/2024-09/nikon-logo_0_8.png",
        url: "https://www.optipro.io/sg/auth/login",
        style: "p-2 lg:p-5 hover:bg-slate-200 m-auto",
        newTab: false,
      },
    ],
  },
];
</script>
