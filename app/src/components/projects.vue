<template>
    <div class="h-full bg-[#222222] p-5">
        
        <div class="h-[95%] flex justify-center">
            <div class="w-[97%] lg:flex overflow-auto">
                <div class="w-full lg:w-[50%] xl:w-[28%] lg:border-r border-neutral-700 py-5 place-items-center">
                  
                  <div class="pb-6">
                    <select id="projectSelector" class="rounded-sm border py-1" @change="onSelectProject($event)">
                      <option v-for="(data, key) in projects" :key="key"
                        :value="data?.title"
                        class="bg-[#222] text-sm">
                        {{ data?.title }}
                      </option>
                    </select>
                  </div>

                  <img :class="selectedProject?.logoCss"
                      :src="selectedProject?.logo"
                      alt="Display Photo"
                  />

                  <p class="text-sm pt-2 pr-8">{{selectedProject?.description}}</p>
                  <a class="text-sm underline hover:text-blue-300" :href="selectedProject?.link" target="_blank">{{selectedProject?.link}}</a>
                  
                  <p class="text-sm font-bold pt-4">Stacks Used Are:</p>
                  <ul class="text-sm text-center">
                    <li v-for="(item, key) in selectedProject?.stack" :key="key">
                    {{item}}
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-[50%] xl:w-[72%] p-5">
                  <swiper
                      :style="{
                          '--swiper-navigation-color': '#2196F3',
                          '--swiper-pagination-color': '#2196F3',
                      }"
                      :loop="true"
                      :spaceBetween="10"
                      :navigation="true"
                      :thumbs="{ swiper: thumbsSwiper }"
                      :modules="modules"
                      class="mySwiper"
                      v-if="selectedProject?.photos">
                      <swiper-slide v-for="(photo, key) in selectedProject?.photos" :key="key">
                          <img :src="`/project_ss/${photo}`" />
                      </swiper-slide>
                  </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data:() => ({
      selectedProject: {},
      projects: [
          {
            title: 'EyeCare',
            link: 'https://luxotticaeyecare.luxottica.com/dal',
            logo: '/logos/eyecare.png',
            logoCss: 'h-[80px] w-[80%] bg-[#fff] px-4',
            description: 'a B2C project (landing page) for Essilor EyeCare Products',
            stack: ['NextJS v14 (React)', 'Tailwind CSS', 'CoreMedia v12', 'Bitbucket CI/CD Pipeline'],
            photos: ['eyecare_1.png', 'eyecare_2.png', 'eyecare_3.png']
          },
          {
            title: 'EyeMed',
            link: 'https://www.eyemedinternational.com/',
            logo: '/logos/eyemed.png',
            logoCss: 'h-[20%] w-[40%]',
            description: 'a B2C project (landing page) for Essilor EyeMed Products',
            stack: ['NextJS v14 (React)', 'Tailwind CSS', 'CoreMedia v11', 'Bitbucket CI/CD Pipeline', 'Jenkins'],
            photos: ['eyemed_1.png', 'eyemed_2.png', 'eyemed_3.png']
          },
          {
            title: 'OneSight',
            link: 'https://onesight.essilorluxottica.com/',
            logo: '/logos/onesight.png',
            logoCss: 'h-[70px] w-[80%] bg-[#fff] px-4 py-2',
            description: 'a B2C project (landing page) for Essilorluxottica OneSight Products',
            stack: ['NextJS v13 (React)', 'Tailwind CSS', 'CoreMedia v11', 'Bitbucket CI/CD Pipeline', 'Jenkins'],
            photos: ['onesight_1.png', 'onesight_2.png', 'onesight_3.png']
          },
          {
            title: 'Essilor Portal',
            link: '',
            logo: '',
            logoCss: '',
            description: '',
            stack: ['Vue 2', 'CMS Headless', 'Bitbucket CI/CD Pipeline'],
            photos: []
          },
          {
            title: 'Essilor Admin',
            link: '',
            logo: '',
            logoCss: '',
            description: '',
            stack: ['Vue 2', 'CMS Headless', 'Bitbucket CI/CD Pipeline'],
            photos: []
          },
          {
            title: 'Essilor Rewards',
            link: '',
            logo: '',
            logoCss: '',
            description: '',
            stack: ['Vue 2', 'CMS Headless', 'Bitbucket CI/CD Pipeline'],
            photos: []
          },
          {
            title: 'Seven365 Condo Management',
            link: 'https://app.dev.7365.com.sg/',
            logo: '/logos/seven365.png',
            logoCss: '',
            description: 'This app is used for all securities monitoring, giving privileges, access of contractors from specific area/condo. Most of the sub-app we created are interacting to this app',
            stack: ['NuxtJS', 'Vuetify', 'ExpressJS', 'Github', 'MongoDB'],
            photos: ['condo_1.png', 'condo_2.png', 'condo_3.png', 'condo_4.png']
          },
          {
            title: 'Seven365 CCTV Management',
            link: '',
            logo: '/logos/seven365.png',
            logoCss: '',
            description: 'This app is used by security guards & admins who will monitor events inside the area. This also include CRUD for camera, allowing guest & vehicle to come in & out from area & reporting of guards before end of their shift',
            stack: ['NuxtJS', 'Vuetify', 'ExpressJS', 'Github', 'MongoDB'],
            photos: ['cctv_1.png', 'cctv_2.png', 'cctv_3.png']
          },
          {
            title: 'Seven365 Resident App',
            link: '',
            logo: '/logos/seven365.png',
            logoCss: '',
            description: 'This app is primarily used by residences who need support/assistance from admin. Once request is made, it will automatically received from our main app (Seven365 Condo Management)',
            stack: ['NuxtJS (Ionic)', 'Vuetify', 'ExpressJS', 'Github', 'MongoDB'],
            photos: ['resident_1.png', 'resident_2.png', 'resident_3.png', 'resident_4.png']
          },
      ] 
  }),
  beforeMount() {
      this.selectedProject = this.projects[0]
  },

  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [EffectFade, FreeMode, Navigation, Thumbs],
    };
  },
  methods: {
    onSelectProject(event) {
      const findProject = this.projects.find(find => find.title == event.target.value)
      if (findProject) this.selectedProject = findProject
    }
  }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
  background: transparent !important;
}

.mySwiper {
  height: 90%;
  width: 100%;
}
</style>