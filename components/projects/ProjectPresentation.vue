<template>
  <div class="bg-white ">
    <div class="max-w-xl mx-auto py-6 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ presentationProject.title }}</h2>
      <p class="mt-4 text-base text-gray-500">{{ presentationProject.text }}</p>

      <div class="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div
          v-for="(item,index) in presentationProject.works"
          :key="index"
          :presentation-project="item"
        >
          <a
            class="group block"
          >
            <div
              aria-hidden="true"
              class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
            >
              <img
                :src="item.picture"
                alt="project"
                class="w-full mt-6 h-full object-center object-cover aspect-video"
                loading="lazy"
              >
            </div>
            <h3 class="mt-4 text-base font-semibold text-gray-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ item.text }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'
import { IProjectPresentation } from '../../types'
export default {
  props: {
    presentationProject: { type: Object as PropType<IProjectPresentation>, required: true },
  },
}
</script>

<style>

</style>
