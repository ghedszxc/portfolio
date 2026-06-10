<template>
  <div class="bg-[var(--bg-alt)] w-full">
    <div class="grid justify-items-center py-12 md:py-20 px-4">
      <motion.div
        :initial="{ opacity: 0, y: 40 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7 }"
        class="w-full max-w-[55rem]"
      >
        <p
          class="text-xs font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-3"
        >
          Work
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
          Projects
        </h2>
        <div class="w-12 h-[2px] bg-[var(--accent)] mb-10"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            v-for="(project, index) in projects"
            :key="project.title"
            :initial="{ opacity: 0, y: 30 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.08 }"
          >
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-6 hover:border-[var(--accent)]/50 hover:-translate-y-1 transition-all duration-200 h-full"
            >
              <!-- Logo or text fallback -->
              <div class="h-14 flex items-center mb-4">
                <div
                  v-if="project.logo"
                  :class="`inline-flex items-center justify-center rounded-lg px-3 py-1.5 ${project.darkLogo ? 'bg-white/90' : ''}`"
                >
                  <img
                    :src="project.logo"
                    :alt="project.title"
                    class="h-8 w-auto max-w-[150px] object-contain"
                    @error="
                      (e) =>
                        ((
                          e.target as HTMLImageElement
                        ).parentElement!.style.display = 'none')
                    "
                  />
                </div>
                <span v-else class="text-lg font-bold text-[var(--text)]">
                  {{ project.title }}
                </span>
              </div>

              <h3 class="text-base font-semibold text-[var(--text)] mb-1">
                {{ project.title }}
              </h3>
              <p class="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-xs bg-[var(--bg)] border border-[var(--border)] rounded-full px-2.5 py-0.5 text-[var(--muted)]"
                >
                  {{ tag }}
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";

const projects = [
  {
    title: "EyeMed",
    logo: "https://media.eyemed.com/cms/caas/v1/media/280036/data/71ec6a6556fb67edcc3c24d84951d2ba/eyemed-logo.svg",
    url: "https://www.eyemed.com/en-us",
    description:
      "B2C landing page for a leading US vision benefits provider. Promotes plans, networks, and member tools.",
    tags: ["Next.js", "CoreMedia 12", "GraphQL", "React"],
  },
  {
    title: "EyeMed International",
    logo: "https://media.eyemedinternational.com/cms/caas/v1/media/278994/data/baa9b6b6698381a91f87ebc3d4a3804a/logo.png",
    url: "https://www.eyemedinternational.com/",
    description:
      "International expansion of the EyeMed brand — multilingual B2C landing pages across global markets.",
    tags: ["Next.js", "CoreMedia 12", "GraphQL", "React"],
  },
  {
    title: "EssilorLuxottica Eye Care",
    logo: null, // https://www.essilorluxotticaeyecare.com/images/logo-luxottica-2022-png-data.png
    url: "https://www.essilorluxotticaeyecare.com/",
    description:
      "Corporate B2C site for EssilorLuxottica's eye care division, covering products, retail locations, and services.",
    tags: ["Next.js", "CoreMedia 12", "GraphQL", "React"],
  },
  {
    title: "OneSight",
    logo: "https://media-onesight.essilorluxottica.com/cms/caas/v1/media/154424/data/0133be324d5b38e1f540bbcd3fc9fc16/logo.png?w=864&q=100",
    url: "https://onesight.essilorluxottica.com/",
    description:
      "Non-profit initiative landing page for EssilorLuxottica's global vision care accessibility program.",
    tags: ["Next.js", "CoreMedia 12", "GraphQL", "React"],
    darkLogo: true,
  },
  {
    title: "Unofficial Eyewear",
    logo: "https://www.unofficial-eyewear.com/icons/unf-logo-white.svg",
    url: "https://www.unofficial-eyewear.com/",
    description:
      "A trendy, budget-friendly eyewear brand known for modern, colorful frames and everyday prescription glasses.",
    tags: ["Next.js", "Storyblok", "React"],
  },
  {
    title: "DbyD Eyewear",
    logo: "https://dbyd-eyewear.com/icons/dbyd-logo.svg",
    url: "https://dbyd-eyewear.com/",
    description:
      "Eyewear that focuses on what truly matters: timeless style, everyday comfort, and care for materials. And we know: essentiality doesn’t have to be boring.",
    tags: ["Next.js", "Storyblok", "React"],
  },
  {
    title: "EssilorPro",
    logo: "https://www.essilorpro.io/portal-cms-asset/2025-07/EL_Black_3.png",
    url: "https://www.essilorpro.io/my/auth/login-new",
    description:
      "B2B portal for eye care professionals — manages orders, rewarding points, and product catalogs.",
    tags: ["Vue 3", "Drupal", "Java", "REST"],
    darkLogo: true,
  },
  {
    title: "OptiPro",
    logo: "https://www.optipro.io/portal-cms-asset/2024-09/opticliq_logo1_0.png",
    url: "https://www.optipro.io/sg/auth/login",
    description:
      "B2B optician portal for the Asia-Pacific region — transactions, refunds, and inventory management.",
    tags: ["Vue 3", "Drupal", "Java", "REST"],
  },
  {
    title: "Nikon Professionals Hub",
    logo: "https://professionals.nikonlenswear.com/portal-cms-asset/2024-09/nikon-logo_0_8.png",
    url: "https://professionals.nikonlenswear.com/ca",
    description:
      "Branded B2B portal for Nikon lens professionals — product resources, support, and order management.",
    tags: ["Vue 3", "Drupal", "Java", "REST"],
  },
];
</script>
