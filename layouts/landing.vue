<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()
import '~/assets/css/landing.scss'

</script>

<template>
  <div id="app-layout">
    <slot />
  </div>
</template>
