<script setup lang="ts">
import img1 from '~/assets/img/img-content-1.svg'
import img2 from '~/assets/img/img-content-2.svg'
import img3 from '~/assets/img/img-content-3.svg'
import img4 from '~/assets/img/img-content-4.svg'
const features = computed(() => [
  {
    name: 'AI-Powered',
    description: 'Leverage AI to access and analyze vast smart data in real time, providing deep insights into market',
    src: img1
  },
  {
    name: 'Custom Signals',
    description: 'Get personalized trading alerts tailored to your strategies and preferences',
    src: img2
  },
  {
    name: 'Multi-Platform',
    description: 'Easily track and manage smart money movements using both the DApp and Telegram Bot',
    src: img3
  },
  {
    name: 'Rapid Sourcing',
    description: 'Quickly track data with lightning-fast sourcing, giving you the edge in fast-moving markets.',
    src: img4,
  },
])

const roadmaps = computed(() => [
    {
        hearts: 1,
        title: 'Foundation Stage',
        description: [
            {
                name: 'Project Concept and Initial Development',
                isGreenText: true,
            },
            {
                name: 'SmartMoney Radar and Scanner Creation',
                isGreenText: true,
            },
            {
                name: 'Tokenomics and Utility Design',
                isGreenText: true,
            },
            {
                name: 'Telegram Bot Deployment',
                isGreenText: true,
            },
        ]
    },
    {
        hearts: 3,
        title: 'Development Stage',
        description: [
            {
                name: '$GRAPE Token Launch',
                isGreenText: true,
            },
            {
                name: 'Launch of GrapeRadarAI DApp	',
                isGreenText: true,
            },
            {
                name: 'Strategic Partnerships',
                isGreenText: false,
            },
            {
                name: 'Full Platform Launch',
                isGreenText: false,
            },
        ]
    },
    {
        hearts: 5,
        title: 'Expansion Stage',
        description: [
            {
                name: 'CEX Listings and Liquidity Boost',
                isGreenText: false,
            },
            {
                name: 'Multi-Platform Expansion',
                isGreenText: false,
            },
            {
                name: 'Integration with New Networks',
                isGreenText: false,
            },
            {
                name: 'Feature Enhancements and Scalability',
                isGreenText: false,
            },
        ]
    },
])
</script>

<template>
  <div class="products-title md:text-[114px]">
    Our Product
  </div>
  <div class="product-buttons mt-6 flex flex-row justify-between">
    <div class="left-buttons flex flex-row gap-3">
      <UButton class="button-common text-white flex align-center justify-center bg-[#8619EC]">
        DApp
      </UButton>
      <UButton class="button-common text-black flex align-center justify-center bg-[#C8C8C4]">
        Telegram Bot
      </UButton>
    </div>
    <UButton class="flex align-center justify-center w-[40px] h-[40px] bg-[#98E75F]">
      <img src="~/assets/img/icon-repeat.svg" alt="">
    </UButton>
  </div>
  <div class="pt-[76px]">
    <img class="w-full h-full" src="~/assets/img/product-image.svg">
  </div>
  <div class="products w-100 flex flex-row pt-20 items-center gap-[40px]">
    <div v-for="(item, index) in features" :key="index" class="w-full flex flex-col align-center items-center">
      <div class="mb-[24px]">
        <img :src="item.src" class="image-center" alt="">
      </div>
      <div class="product-name mb-[14px] text-white">
        {{ item.name }}
      </div>
      <div class="product-description max-w-[280px] font-oswald text-[#A0A0A0]">
        {{ item.description }}
      </div>
    </div>
  </div>
  <div class="roadmap mt-[116px] mb-[120px]">
    <div class="roadmap-container relative">
      <div class="w-[36px] h-[36px] absolute bg-black" />
      <div class="w-[36px] h-[36px] absolute bg-black right-0" />
      <div class="w-[36px] h-[36px] absolute bg-black bottom-0" />
      <div class="w-[36px] h-[36px] absolute bg-black bottom-0 right-0" />
      <div class="roadmap flex flex-col items-center bg-[#18191c] pt-[52px] pb-[90px]">
        <div class="roadmap-main-title font-oswald text-center text-4xl md:text-[50px]">
          GrapeRadarAI Roadmap
        </div>
        <div class="pt-[64px]">
          <img class="w-full" src="~/assets/img/img-roadmap-line.svg">
        </div>
        <div class="roadmaps w-full px-[112px] flex flex-row justify-between pt-5">
          <div v-for="(item, index) in roadmaps" :key="index" class="flex flex-col w-[240px]">
            <div class="hearts flex flex-row gap-[3px]">
              <div v-for="(n, i) in item.hearts" :key="i" class="mb-[14px]">
                <img src="~/assets/img/img-roadmap-heart.svg" class="image-center" alt="">
              </div>
            </div>
            <div class="roadmap-title mb-[14px] text-white">
              {{ item.title }}
            </div>
            <div class="flex flex-col gap-4">
              <div v-for="(des, _i) in item.description" :key="_i">
                <div class="roadmap-description font-oswald" :style="!des.isGreenText ? 'color: #A0A0A0' : 'color: #98E75F'">
                  {{ des.name }}
                </div>
              </div>
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
  </div>
</template>

<style lang="scss" scoped>
.products-title {
    font-style: normal;
    font-weight: bold;
    font-family: var(--Minecraft-Bold) !important;
    text-transform: uppercase;
    line-height: 124px;
}

.product-name {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.product-description {
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
}

.roadmap-main-title {
  font-style: normal;
  font-weight: 300;
  line-height: 72px;
}

.roadmap-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.roadmap-description {
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
}
</style>