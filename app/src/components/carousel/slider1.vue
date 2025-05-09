<template>
    <div class="h-full bg-[#222222] py-2 md:py-5 flex justify-center">
        <div class="w-[97%] lg:flex overflow-auto">
            <div class="w-full lg:w-[50%] xl:w-[40%] lg:border-r border-neutral-700 py-5 place-items-center">
                <img class="rounded-full
                        h-[150px] md:h-[200px] lg:h-[230px]
                        w-[150px] md:w-[200px] lg:w-[230px]"
                    src="/display_pic.jpg"
                    alt="Display Photo"
                />

                <h1 class="text-2xl lg:text-2xl xl:text-3xl pt-3 text-white">Gerard Mendiola</h1>
                <h2 class="pb-4">Web Developer</h2>

                <p class="text-sm">{{myAge}}</p>
                <p class="text-sm">Marilao Bulacan</p>
            </div>
            <div class="w-full p-5">
                <h2 class="text-2xl uppercase">Primary Skills</h2>
                <div class="text-sm pb-6">
                    As a web developer, I focused my skill sets in front-end, management & leadership.
                    <br>
                    
                    <ul style="list-style: disc; margin-left: 20px;">
                        <li>
                            Deliver high-quality products under deadlines
                        </li>
                        <li>
                            Detailed-oriented
                        </li>
                        <li>
                            Lead multiple projects & teams
                        </li>
                    </ul>
                    
                </div>

                <h2 class="text-2xl uppercase">Technical Skills</h2>
                <div class="lg:flex grid grid-flow-col grid-rows-3 md:grid-rows-2 gap-2">
                    <template v-for="(data, key) in techSkills" :key="key">
                        <div :class="`${data.class} rounded-sm p-4`">
                            <!-- <img src="/vue.ico" alt="Vue" style="height: 50px; width: 50px;"> -->
                             
                            <div class="text-white text-[30px]">
                                <span>{{ data.rating }}</span>
                                <hr>
                            </div>


                             <div class="font-bold rounded-sm text-sm pt-1 pl-1">
                                {{ data.title }}
                                <div class="inline-block float-right">
                                    <img :src="data.logo" alt="Vue" class="h-[25px] w-[25px]">
                                </div>
                             </div>
                        </div>
                    </template>
                </div>

                <h2 class="text-2xl uppercase">Other Skills</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:() => ({
        techSkills: [
            {
                class: 'bg-yellow-500 w-full w-[25%] lg:w-[20%] text-amber-900 text-xl',
                title: 'Javascript',
                rating: '4/5',
                logo: '/javascript.svg'
            },
            {
                class: 'bg-green-500 w-full w-[25%] lg:w-[20%] text-emerald-900 text-xl',
                title: 'Vue JS',
                rating: '4/5',
                logo: '/vue.svg'
            },
            {
                class: 'bg-blue-400 w-full w-[25%] lg:w-[20%] text-sky-900 text-xl',
                title: 'React JS',
                rating: '3/5',
                logo: '/react.svg'
            },
            {
                class: 'bg-lime-400 w-full w-[25%] lg:w-[20%] text-lime-900 text-xl',
                title: 'Node JS',
                rating: '2/5',
                logo: '/node.svg'
            },
            {
                class: 'bg-violet-500 w-full w-[25%] lg:w-[20%] text-indigo-900 text-xl',
                title: 'Php',
                rating: '3.5/5',
                logo: '/php.svg'
            },
            {
                class: 'bg-red-500 w-full w-[25%] lg:w-[20%] text-red-900 text-xl',
                title: 'Laravel',
                rating: '3/5',
                logo: '/laravel.svg'
            },
        ]
    }),
    computed: {
        myAge() {
            const diff_ms = Date.now() - new Date(1996, 10, 16).getTime();
            const age_dt = new Date(diff_ms); 
        
            // Calculate the absolute value of the difference in years between the age Date object and the year 1970 (UNIX epoch)
            return Math.abs(age_dt.getUTCFullYear() - 1970)+'yrs old';
        }
    }
}
</script>

<style scoped>
.text-2xl {
    font-weight: 100 !important;
}

.font-bold {
    font-weight: bold !important;
}
</style>