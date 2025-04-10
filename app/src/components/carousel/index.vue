<template>
    <swiper
        :effect="'fade'"
        :pagination="pagination"
        :modules="modules"
        :mousewheel="true">

        <swiper-slide>
            <!-- <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> -->
             <Slide1 />
        </swiper-slide>
        
        <swiper-slide>
            <!-- <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> -->
             <Slide2 />
        </swiper-slide>
        
        <swiper-slide>
            <!-- <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> -->
             <Slide3 />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import Slide1 from './slider1.vue';
import Slide2 from './slider2.vue';
import Slide3 from './slider3.vue';
    
export default {
    components: {
        Swiper,
        SwiperSlide,

        Slide1,
        Slide2,
        Slide3
    },
    data:() => ({
        modules: [Mousewheel, EffectFade, Pagination],
    }),
    // setup() {
    //     return {
    //         modules: [Mousewheel, EffectFade, Pagination],
    //     };
    // },
};
</script>

<style scoped>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
  