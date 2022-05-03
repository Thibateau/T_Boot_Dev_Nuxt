<template>
  <div>
    <a
      href="#"
      class="group block"
    >
      <div
        aria-hidden="true"
        class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
      >
        <img
          :src="projectItem.picture"
          alt="Brown leather key ring with brass metal loops and rivets on wood table."
          class="w-full h-full object-center object-cover"
        >
      </div>
      <h3 class="mt-4 text-base font-semibold text-gray-900">{{ projectItem.title }}</h3>
      <p class="mt-2 text-sm text-gray-500">{{ projectItem.text }}</p>
    </a>
  </div>
</template>

<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'
import { IProjectPresentation } from '../../types'
export default {
  props: {
    projectItem: { type: Object as PropType<IProjectPresentation>, required: true },
  },
}
</script>

<style>

</style>
