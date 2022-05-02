<template>
  <div class="py-16 px-8 justify-center items-center flex">
    <div class="flex flex-col text-start w-1/2 py-12 px-4 lg:py-16 lg:px-8">
      <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
        <span class="block">
          {{ heroCartoon.title }}
        </span>
        <span class="block text-orange-600 mt-2">
          {{ heroCartoon.subtitle }}
        </span>
      </h2>
      <p class="text-xl mt-4 text-gray-400" />
      <div class="lg:mt-0 lg:flex-shrink-0">
        <div class="mt-12 inline-flex rounded-md shadow">
          <RouterLink
            to="contact"
            type="button"
            class="py-4 px-6  bg-magenta-fuchsia-600 hover:bg-scooter-600 focus:ring-magenta-fuchsia-600 focus:ring-offset-indigo-200 animate-pulse text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            {{ heroCartoon.label }}
          </RouterLink>
        </div>
      </div>
    </div>
    <img
      :src="heroCartoon.picture"
      class="h-full flex max-w-1/2 lg:block right-0 top-0"
      width="350"
    >
  </div>
</template>

<script lang="ts">
import { ICartoonHero } from '../../types'
export default {
  props: {
    heroCartoon: { type: Object as PropType<ICartoonHero>, required: true },
  },
}
</script>
