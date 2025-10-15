<template>
  <div class="grid justify-items-center py-2 md:py-12">
    <div class="md:flex md:items-center gap-8 w-full md:w-auto">
      <img
        class="h-[385px] md:h-[305px] xl:h-[385px] w-full md:w-[305px] xl:w-[385px]"
        alt="Display Photo"
        src="/display_pic.jpg"
      />
      <div>
        <h1 class="text-4xl md:text-5xl pt-3 font-bold px-2 md:px-0">
          Gerard Mendiola
        </h1>
        <h2 class="pb-4 px-3 md:px-1 pt-1">Web Developer</h2>

        <p class="px-3 md:px-1 text-[1rem] leading-[20px]">
          I started my career year 2017. <br />
          For start-up I used plain HTML, CSS, Javascript & PHP stack tool to
          develop websites & later on I enhanced my skill set by using some
          frameworks such as Vue JS, Node JS, Laravel and more.
          <br />
          <br />
          I am well-experienced & keen in front-end side, while in the back-end
          is more of a jack of all trades
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  computed: {
    myAge() {
      const diff_ms = Date.now() - new Date(1996, 10, 16).getTime();
      const age_dt = new Date(diff_ms);

      // Calculate the absolute value of the difference in years between the age Date object and the year 1970 (UNIX epoch)
      return Math.abs(age_dt.getUTCFullYear() - 1970) + "yrs old";
    },
  },
};
</script>
