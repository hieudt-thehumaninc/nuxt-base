<script setup lang="ts">
import SideBarMobile from '~/components/SideBarMobile.vue'


definePageMeta({
  layout: 'landing'
})
import type { Avatar, FormError, FormSubmitEvent } from '#ui/types'
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]



const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.key) errors.push({ path: 'key', message: 'Required' })
  if (!state.amount) errors.push({ path: 'amount', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}

</script>

<template>
  <div class="mx-[92px]">
    <Header />
    <LandingFeatures />
    <LandingProducts />
  </div>
</template>

<style lang="scss" scoped>
</style>