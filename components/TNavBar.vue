<template>
  <div>
    <nav>
      <div class="bg-blue-400 bg-[url('cube2.png')] bg-no-repeat bg-right sm:max-w-full">
        <div class=" px-4 py-6 mx-auto lg:py-6 sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
            <ul class="items-center lg:flex">
              <li
                v-for="(item,index) in nav.left"
                :key="index"
              >
                <a
                  :href="item.url"
                  :aria-label="item.label"
                  :title="item.label"
                  class="lg:mr-12 bg-white rounded-lg border-2 border-blue-500 flex lg:w-24 lg:h-8 items-center justify-center hover:text-orange-600  font-medium tracking-wide text-black drop-shadow-xl uppercase"
                >{{ item.label }}</a>
              </li>
            </ul>

            <img
              :src="nav.logo"
              width="170"
              alt="TBootLogo"
            >

            <ul class="items-center lg:flex">
              <li
                v-for="(item,index) in nav.right"
                :key="index"
              >
                <a
                  :href="item.url"
                  :aria-label="item.label"
                  :title="item.label"
                  class="lg:mr-12 bg-white rounded-lg border-2 border-blue-500 flex lg:w-24 lg:h-8 items-center justify-center hover:text-orange-600  font-medium tracking-wide text-black drop-shadow-xl uppercase"
                >{{ item.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="w-full h-2 bg-orange-600" />
  </div>
</template>

<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'

import { INavBar } from '../types'
export default {
  props: {
    nav: { type: Object as PropType<INavBar>, required: true },
  },
}
</script>
