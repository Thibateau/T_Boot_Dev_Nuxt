<template>
  <div class="bg-white ">
    <div class="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ presentationProject.title }}</h2>
      <p class="mt-4 text-base text-gray-500">{{ presentationProject.text }}</p>

      <div class="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <ProjectItem
          v-for="(item,index) in presentationProject.works"
          :key="index"
          :presentation-project="item"
        />
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
