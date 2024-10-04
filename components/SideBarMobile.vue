<script setup lang="ts">
const isOpen = ref(false)
const links = [{
  label: 'My Wallet',
  icon: 'icon-wallet',
  iconClass:'icon',
  to: '/',
}, {
  label: 'Privacy Trading',
  icon: 'icon-privacy',
  iconClass:'icon',
  to:'/privacy-trading'
}, {
  label: 'Staking',
  to: '/staking',
  icon: 'icon-staking',
  iconClass:'icon',
}]

</script>

<template>
  <UButton
          @click="isOpen = true"
          icon="i-heroicons-bars-3-solid"
          size="sm"
          color="black"
          variant="solid"
          :trailing="false"
          class="lg:hidden mr-3 text-[#fff]"
  />
  <USlideover v-model="isOpen" class="box-sidebar">
    <UDashboardPanel :width="250" class="max-h-[100vh] border-0">
      <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="absolute right-3 top-6" @click="isOpen = false" />
      <UDashboardSidebar>
        <UDashboardSidebarLinks :links="links">
          <template #default="{ link }">
            <span class="font-medium text-xl text-[#fff] group-hover:text-[#fff] relative ml-1.5">{{ link.label }}</span>
          </template>
        </UDashboardSidebarLinks>
      </UDashboardSidebar>
    </UDashboardPanel>
  </USlideover>
</template>
