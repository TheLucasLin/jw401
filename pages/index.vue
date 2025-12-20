<template>
  <div class="min-h-screen bg-[#FCF1A1] font-sans selection:bg-jw-cyan selection:text-jw-darkTeal">
    <Header />
    <main class="pt-[74px]">
      <!-- 桌機模式 -->
      <template v-if="!isMobileMode">
        <Hero />
      </template>
      <!-- 手機模式 -->
      <template v-else>
        <HeroMobile />
      </template>
      <HotEvents />
      <QuarterlyEvents />
      <RunningBanner />
      <Gallery />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

// 手機版斷點（可自行調整）
const MOBILE_BREAKPOINT = 768;

// 模式狀態：false = 桌機模式, true = 手機模式
const isMobileMode = ref(false);

// 偵測是否為手機模式
const detectMobileMode = () => {
  if (typeof window !== "undefined") {
    isMobileMode.value = window.innerWidth < MOBILE_BREAKPOINT;
  }
};

// 監聽視窗大小變化
onMounted(() => {
  detectMobileMode();
  window.addEventListener("resize", detectMobileMode);
});

onUnmounted(() => {
  window.removeEventListener("resize", detectMobileMode);
});
</script>
