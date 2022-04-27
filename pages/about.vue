<template>
  <div>
    <PictureHero :hero-picture="heroPictureData" />
    <ToolsBox :box-tool="boxToolData" />
  </div>
</template>

<script lang="ts">

import {
  PICTURE_HERO_DATA, TOOL_BOX_DATA,
} from '../config/features'

export default {
  computed: {
    heroLeftData () {
      return PICTURE_HERO_DATA
    },
    boxToolData () {
      return TOOL_BOX_DATA
    },
  },
}
</script>
