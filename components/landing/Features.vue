<script setup lang="ts">
import img1 from '~/assets/img/icon-gradient-1.svg'
import img2 from '~/assets/img/icon-gradient-2.svg'
import img3 from '~/assets/img/icon-gradient-3.svg'
import img4 from '~/assets/img/icon-gradient-4.svg'
const features = computed(() => [
  {
    name: 'SmartMoney Radar',
    description: 'Gain instant access to elite traders ranked by key performance indicators.',
    src: img1
  },
  {
    name: 'SmartMoney Scanner',
    description: 'Uncover key insights by evaluating wallet addresses based on performance metrics.',
    src: img2
  },
  {
    name: 'Copy Trading Bot',
    description: 'Effortlessly replicate trades from top smart money wallets directly within Telegram.',
    src: img3
  },
  {
    name: 'Alert Bot',
    description: 'Provides real-time updates on wallet movements, allowing users to react quickly.	',
    src: img4,
  },
])
</script>

<template>
  <div class="features-container relative">
    <div class="w-[36px] h-[36px] absolute bg-black" />
    <div class="w-[36px] h-[36px] absolute bg-black right-0" />
    <div class="w-[36px] h-[36px] absolute bg-black bottom-0" />
    <div class="w-[36px] h-[36px] absolute bg-black bottom-0 right-0" />
    <div class="features flex flex-col items-center bg-[#18191c] pt-[52px] pb-[74px] mb-[103px]">
      <div class="features-title font-oswald text-center text-4xl md:text-[50px]">
        Why Choose GraphRadarAI?
      </div>
      <div class="features w-100 mx-[20px] md:mx-[50px] flex-wrap flex gap-7 pt-20 items-center justify-center">
        <div v-for="(item, index) in features" :key="index" class="flex flex-col w-[264px]">
          <div class="img-gradient-container mb-[18px]">
            <img :src="item.src" class="image-center" alt="">
          </div>
          <div class="feature-name mb-[14px] text-white">
            {{ item.name }}
          </div>
          <div class="feature-description font-oswald text-[#A0A0A0]">
            {{ item.description }}
          </div>
        </div>
      </div>
      <div class="features-button">
        <UButton class="button-common text-white flex align-center justify-center mt-20 bg-[#8619EC]">
          Get Started!
        </UButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-gradient-container {
  background: linear-gradient(180deg, #282A2F 50%, #34373F 50%);
  height: 264px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.feature-name {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.feature-description {
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
}

.features-title {
  font-style: normal;
  font-weight: 300;
  line-height: 72px;
}
</style>