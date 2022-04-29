<template>
  <div>
    <nav>
      <div class="bg-scooter-600 bg-no-repeat sm:max-w-full bg-[url('/images/cube2plafond.png')] bg-right">
        <div class=" px-4 py-6 mx-auto lg:py-6 sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
            <ul class="items-center lg:flex">
              <li
                v-for="(item,index) in nav.left"
                :key="index"
              >
                <RouterLink
                  :to="{name: item.name}"
                  :aria-label="item.label"
                  :title="item.label"
                  class="lg:mr-12 text-2xl text-white border-dark-blue-300 flex lg:w-32 lg:h-8 items-center justify-center hover-uderline:text-magenta-fuchsia-600 font-bungee drop-shadow-xl"
                >
                  {{
                    item.label
                  }}
                </RouterLink>
              </li>
            </ul>
            <RouterLink
              to="/"
            >
              <img
                :src="nav.logo"
                width="170"
                alt="TBootLogo"
                class=""
              >
            </RouterLink>
            <ul class="items-center lg:flex">
              <li
                v-for="(item,index) in nav.right"
                :key="index"
              >
                <RouterLink
                  :to="{name: item.name}"
                  :aria-label="item.label"
                  :title="item.label"
                  class="lg:mr-12 text-2xl text-white border-dark-blue-300 flex lg:w-32 lg:h-8 items-center justify-center hover-uderline:text-magenta-fuchsia-600 font-bungee drop-shadow-xl"
                >
                  {{
                    item.label
                  }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="w-full h-3 bg-orange-600" />
    <div class="w-full h-2 bg-magenta-fuchsia-600" />
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
