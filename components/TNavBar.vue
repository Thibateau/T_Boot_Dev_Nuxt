<template>
  <div>
    <nav>
      <div class="bg-scooter-600 bg-[url('/assets/images/cube2.png')] bg-no-repeat bg-right sm:max-w-full">
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
                  class="lg:mr-12 text-xl text-white border-dark-blue-300 flex lg:w-32 lg:h-8 items-center justify-center hover-uderline:text-magenta-fuchsia-600 font-bungee drop-shadow-xl"
                >{{ item.label }}</a>
              </li>
            </ul>

            <img
              :src="nav.logo"
              width="170"
              alt="TBootLogo"
              class=""
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
                  class="lg:mr-12 bg-white rounded-lg border-2 text-xl  border-dark-blue-300 flex lg:w-32 lg:h-8 items-center justify-center hover:text-magenta-fuchsia-600 font-bungee font-bold tracking-wide text-black drop-shadow-xl"
                >{{ item.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="w-full h-1 bg-orange-600" />
    <div class="w-full h-1 bg-magenta-fuchsia-600" />
  </div>
</template>

<script lang="ts">
import { INavBar } from '../types'
export default {
  props: {
    nav: { type: Object as PropType<INavBar>, required: true },
  },
}
</script>
