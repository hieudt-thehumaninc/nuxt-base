<template>
  <div class="header w-full flex justify-between relative py-[16px]">
    <div class="header-left flex flex-row">
      <ULink to="/" class="logo pr-20">
        <img src="~/assets/img/header-logo.svg" alt="">
      </ULink>
      <div
        class="header-link color-white flex gap-[65px] items-center font-oswald"
      >
        <ULink to="https://docs.abstrawallet.com/"> 
          Whitepaper
        </ULink>
        <ULink to="https://docs.abstrawallet.com/">
          Docs
        </ULink>
      </div>
    </div>
    <div class="header-right flex flex-row items-center">
      <div class="socials flex gap-[14px] pr-[18px] items-center">
        <ULink to="https://web.telegram.org">
          <img src="~/assets/img/socials-telegram.svg" alt="">
        </ULink>
        <ULink to="https://x.com/">
          <img src="~/assets/img/socials-twitter.svg" alt="">
        </ULink>
      </div>
      <UButton
        class="button-common text-white flex align-center justify-center bg-[#8619EC] hover:mt-[6px]"
      >
        Get Started!
      </UButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-link {
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
}
</style>