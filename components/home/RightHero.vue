<template>
  <div class="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
    <div class="max-w-xl mx-auto lg:max-w-screen-xl">
      <div class="mb-16 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-6">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {{ heroRight.title }}<br class="hidden md:block">
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            {{ heroRight.subtitle }}
          </p>
        </div>
        <div class="flex items-center">
          <RouterLink
            to="contact"
            class="inline-flex items-center bg-magenta-fuchsia-600 hover:bg-scooter-600 focus:ring-magenta-fuchsia-600 focus:ring-offset-indigo-200 text-white w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   justify-center h-12 px-6 mr-6 tracking-wide  rounded"
          >
            {{ heroRight.label }}
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
      <img
        :src="heroRight.picture"
        class="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { IRightHero } from '../../types'
export default {
  props: {
    heroRight: { type: Object as PropType<IRightHero>, required: true },
  },
}
</script>
