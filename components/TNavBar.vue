<template>
  <div>
    <nav>
      <div class="bg-scooter-600 bg-no-repeat sm:max-w-full bg-[url('/images/cube2plafond.webp')] bg-right">
        <div class=" px-8 py-2 mx-auto lg:py-2 sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
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
                  class="mb-4 lg:mr-12 text-xl sm:text-2xl text-center text-white flex lg:w-32 lg:h-8 font-glitten items-center justify-center drop-shadow-xl hover:animate-bounce"
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
                loading="lazy"
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
                  class="mb-4 lg:mr-12 text-xl sm:text-2xl text-white flex lg:w-32 lg:h-8 items-center justify-center font-glitten drop-shadow-xl hover:animate-bounce"
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
