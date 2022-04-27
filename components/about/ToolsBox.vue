<template>
  <div>
    <section class="bg-white mt-12">
      <div class="container px-6 py-8 mx-auto">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p class="inline-block px-3 py-px mb-4 text-3xl font-bold text-gray-800 ">
              {{ boxTool.title }}
            </p>
            <p class="text-base text-gray-700 md:text-lg">
              {{ boxTool.paragraph }}
            </p>
          </div>
          <div class="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
            <ToolItem
              v-for="(item,index) in boxTool.toolsitems"
              :key="index"
              :box-tool="item"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'
import { IToolsBox } from '../../types'
export default {
  props: {
    boxTool: { type: Object as PropType<IToolsBox>, required: true },
  },
}
</script>
