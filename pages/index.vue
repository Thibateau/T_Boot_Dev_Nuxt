<template>
  <div>
    <LeftHero
      :hero-left="heroLeftData"
      class="mb-16"
    />

    <RightHero
      :hero-right="heroRightData"
      class="mb-16"
    />
  </div>
</template>

<script lang="ts">
import { LEFT_HERO_DATA, RIGHT_HERO_DATA } from '../config/features'

export default {
  computed: {
    heroLeftData () {
      return LEFT_HERO_DATA
    },
    heroRightData () {
      return RIGHT_HERO_DATA
    },
  },
}
</script>
