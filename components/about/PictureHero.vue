<template>
  <div class="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle
                  cx="1"
                  cy="1"
                  r=".7"
                />
              </pattern>
            </defs>
            <rect
              fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
              width="52"
              height="24"
            />
          </svg>
          <span class="relative">{{ heroPicture.title }}</span>
        </span>
        {{ heroPicture.subtitle }}
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        {{ heroPicture.paragraph }}
      </p>
    </div>
    <div class="flex items-center -mx-2 mb-8">
      <a
        class="mx-2"
        href="https://www.instagram.com/t_boot_dev/?hl=fr"
        aria-label="Instagram"
      >
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          class="w-6 h-6 animate-bounce"
        >
          <circle
            cx="15"
            cy="15"
            r="4"
          />
          <path
            d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
          />
        </svg>
      </a>

      <a
        class="mx-2"
        href="https://www.linkedin.com/in/thibaut-plichon-2b316b1a0/"
        aria-label="Linkedin"
      >
        <svg
          class="w-6 h-6 animate-bounce text-gray-700 fill-currenthover:text-gray-600"
          viewBox="0 0 512 512"
        >
          <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
        </svg>
      </a>

      <a
        class="mx-2"
        href="https://github.com/Thibateau"
        aria-label="Github"
      >
        <svg
          class="w-6 h-6 animate-bounce text-gray-700 fill-currenthover:text-gray-600 "
          viewBox="0 0 512 512"
        >
          <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
        </svg>
      </a>
    </div>
    <img
      :src="heroPicture.picture"
      class="w-full mx-auto md:w-auto md:max-w-xs rounded-full border-4 border-scooter-600"
    >
  </div>
</template>

<script lang="ts">
import { IPictureHero } from '../../types'
export default {
  props: {
    heroPicture: { type: Object as PropType<IPictureHero>, required: true },
  },
}
</script>
