<template>
  <div>
    <TNavBar :nav="navBarData" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <TFooter :footer="footerData" />
  </div>
</template>

<script lang="ts">
import './assets/css/main.css'
import { FOOTER_DATA, NAV_BAR_DATA } from './config/features'
export default {
  computed: {
    navBarData () {
      return NAV_BAR_DATA
    },
    footerData () {
      return FOOTER_DATA
    },
  },
}
</script>
