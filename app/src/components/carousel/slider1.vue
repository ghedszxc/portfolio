<template>
    <div class="h-full bg-[#222222] py-2 md:py-5 flex justify-center">
        <div class="w-[97%] lg:flex overflow-auto">
            <div class="w-full lg:w-[50%] xl:w-[40%] lg:border-r border-neutral-700 py-5 place-items-center">
                <img class="rounded-full
                        h-[150px] md:h-[200px] lg:h-[230px]
                        w-[150px] md:w-[200px] lg:w-[230px]"
                    src="../../assets/display_pic.jpg"
                    alt="Display Photo"
                />

                <h1 class="text-2xl lg:text-2xl xl:text-3xl pt-3 text-white">Gerard Mendiola</h1>
                <h2 class="pb-4">Web Developer</h2>

                <p class="text-sm">{{myAge}}</p>
                <p class="text-sm">Marilao Bulacan</p>
            </div>
            <div class="w-full py-5">

            </div>
        </div>
    </div>
</template>
<script>
export default {
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