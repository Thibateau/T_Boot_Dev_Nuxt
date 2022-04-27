<template>
  <div>
    <footer>
      <div class="relative mt-6 bg-blue-400 bg-[url('/assets/images/cube.png')] bg-no-repeat bg-right">
        <div class="w-full h-2 bg-orange-600" />
        <div class="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div class="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                class="inline-flex items-center"
              >
                <img
                  :src="footer.logo"
                  width="120"
                  alt="TBootLogo"
                >
                <span class="ml-2 text-xl font-bold tracking-wide text-white font-lilita">{{ footer.title }}</span>
              </a>
              <div class="mt-4 lg:max-w-sm">
                <p class="text-sm text-white font-lilita">
                  {{ footer.subtitle }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 font-lilita lg:text-2xl">
              <div>
                <p
                  class="font-semibold tracking-wide text-white"
                  href="Acceuil.html"
                >
                  Category
                </p>
              </div>
              <div>
                <p
                  class="font-semibold tracking-wide text-white"
                  href="about.html"
                >
                  A propos
                </p>
              </div>
              <div>
                <p
                  class="font-semibold tracking-wide text-white"
                  href="project.html"
                >
                  Projets
                </p>
              </div>
              <div>
                <p
                  class="font-semibold tracking-wide text-white"
                  href="contact.html"
                >
                  Contact
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p class="text-sm text-white font-lilita">
              {{ footer.rights }}
            </p>
            <div class="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="https://github.com/Thibateau"
                class=""
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 text-white"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  ><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/t_boot_dev/?hl=fr"
                class=""
              >
                <svg
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  class="h-6 text-white"
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
                href="https://www.linkedin.com/in/thibaut-plichon-2b316b1a0/"
                class=""
              >
                <svg
                  class="h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { IFooter } from '../types'

export default {
  props: {
    footer: { type: Object as PropType<IFooter>, required: true },
  },
}
</script>
