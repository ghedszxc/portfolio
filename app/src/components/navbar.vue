<template>
    <nav class="h-[9vh]">
        <div class="mx-auto w-full px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button
                        type="button"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                        <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex shrink-0 items-center">
                    <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <a href="#" class="border-b-2 border-blue-500 px-3 py-2 text-sm font-medium text-white">Me</a>
                        <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:border-blue-500 hover:border-b-2 hover:text-white">Experiences</a>
                        <a href="#" class="px-3 py-2 text-sm font-medium text-gray-300 hover:border-blue-500 hover:border-b-2 hover:text-white">Projects</a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <!-- <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
            <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
            </div>
        </div> -->
    </nav>
</template>

<script>
export default {
    data:() => ({

    })
}
</script>