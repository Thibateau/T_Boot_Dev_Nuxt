<template>
  <div class="flex flex-col items-center">
    <img
      class="object-cover w-20 h-20 mb-2 rounded-full shadow"
      :src="boxItem.picture"
      :alt="boxItem.label"
    >
    <div class="flex flex-col items-center">
      <p class="text-lg font-bold">{{ boxItem.label }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { IToolsBox } from '../../types'
export default {
  props: {
    boxItem: { type: Object as PropType<IToolsBox>, required: true },
  },
}
</script>
