<template>
  <div>
    <CartoonHero :hero-cartoon="heroCartonData" />
    <ProjectPresentation :presentation-project="presentationProjectData" />
  </div>
</template>

<script lang="ts">

import {
  CARTOON_HERO_DATA, PROJECT_PRESENTATION_DATA,
} from '../config/features'

export default {
  computed: {
    heroCartonData () {
      return CARTOON_HERO_DATA
    },
    presentationProjectData () {
      return PROJECT_PRESENTATION_DATA
    },
  },
}
</script>
