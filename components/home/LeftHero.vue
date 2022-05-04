<template>
  <div class="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
    <div class="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 sm:pb-0 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
      <img
        :src="heroLeft.picture"
        class="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
        alt="PresentationScreen"
        loading="lazy"
      >
    </div>
    <div class="mr-2 relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
      <div class="sm:mb-0 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-6">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {{ heroLeft.title }}
            <span class="inline-block text-deep-purple-accent-400 text-orange-600">{{ heroLeft.subtitle }}</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            {{ heroLeft.paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ILeftHero } from '../../types'
export default {
  props: {
    heroLeft: { type: Object as PropType<ILeftHero>, required: true },
  },
}
</script>
