<template>
    <div class="h-full bg-[#222222] p-5">
        <div class="pb-2">
            <button v-for="(data, key) in projects" :key="key"
                :class="`py-1 px-3 text-sm cursor-pointer hover:bg-[#333] ${selectedProject?.title == data.title && 'border-b-2 border-blue-500'}`"
                @click="selectedProject = data">
                {{ data?.title }}
            </button>
        </div>

        <swiper
            :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
            v-if="selectedProject?.photos">
            <swiper-slide v-for="(photo, key) in selectedProject?.photos" :key="key">
                <img :src="`/project_ss/${photo}`" />
            </swiper-slide>
        </swiper>

        <!-- <swiper
            v-if="selectedProject?.photos"
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="selectedProject?.photos.length"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper">
            <swiper-slide v-for="(photo, key) in selectedProject?.photos" :key="key">
                <img :src="`/project_ss/${photo}`" />
            </swiper-slide>
        </swiper> -->
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
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

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
                link: '',
                description: '',
                photos: ['eyecare_1.png', 'eyecare_2.png', 'eyecare_3.png']
            },
            {
                title: 'EyeMed',
                link: '',
                description: '',
                photos: ['eyemed_1.png', 'eyemed_2.png', 'eyemed_3.png']
            },
            {
                title: 'OneSight',
                link: '',
                description: '',
                photos: ['onesight_1.png', 'onesight_2.png', 'onesight_3.png']
            },
            {
                title: 'Essilor Portal',
                link: '',
                description: '',
                photos: []
            },
            {
                title: 'Essilor Admin',
                link: '',
                description: '',
                photos: []
            },
            {
                title: 'Essilor Rewards',
                link: '',
                description: '',
                photos: []
            },
            {
                title: 'Seven365 Condo Management',
                link: '',
                description: '',
                photos: ['condo_1.png', 'condo_2.png', 'condo_3.png', 'condo_4.png']
            },
            {
                title: 'Seven365 CCTV Management',
                link: '',
                description: '',
                photos: ['cctv_1.png', 'cctv_2.png', 'cctv_3.png']
            },
            {
                title: 'Seven365 Resident App',
                link: '',
                description: '',
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
        modules: [FreeMode, Navigation, Thumbs],
      };
    },
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
}

.mySwiper2 {
  height: 95%;
  width: 100%;
}

.mySwiper {
  height: 9%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-fade .swiper-slide-active .swiper-slide-active {
    background: transparent;
}
</style>