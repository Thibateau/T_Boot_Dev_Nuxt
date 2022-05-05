<template>
  <div class="flex flex-col">
    <div
      v-if="displayGif"
      class="flex justify-center"
    >
      <img
        class="rounded-full pt-52 w-2/3 sm:w-2/5"
        src="/images/loading.gif"
        alt="WaitGif"
        loading="lazy"
      >
    </div>
    <div class="flex">
      <iframe
        class="flex airtable-embed mt-10 h-[2050px] sm:h-[1675px] md:h-[1675px]"
        src="https://airtable.com/embed/shrY7iNr8E3hzuqBF?backgroundColor=green"
        frameborder="0"
        width="100%"
        style="background: transparent;"
        @load="gifplay"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return { displayGif: true }
  },
  methods: {
    gifplay () {
      this.displayGif = false
    },
  },
}
</script>
