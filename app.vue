<template>
  <div class="min-h-screen bg-[#FCF1A1] font-sans selection:bg-jw-cyan selection:text-jw-darkTeal">
    <Header />
    <main>
      <Hero />
      <HotEvents />
      <QuarterlyEvents />
      <RunningBanner />
      <Gallery />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Nuxt auto-imports components from ./components
</script>

<style>
/* 滾動顯示特效 - 初始狀態 */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* 當元素進入視窗時的狀態 */
.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* 不同的動畫變化 - 從左側滑入 */
.scroll-reveal-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-reveal-left.revealed {
  opacity: 1;
  transform: translateX(0);
}

/* 從右側滑入 */
.scroll-reveal-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-reveal-right.revealed {
  opacity: 1;
  transform: translateX(0);
}

/* 縮放效果 */
.scroll-reveal-scale {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-reveal-scale.revealed {
  opacity: 1;
  transform: scale(1);
}

/* 延遲動畫 - 用於多個元素依序出現 */
.scroll-reveal-delay-1 {
  transition-delay: 0.1s;
}

.scroll-reveal-delay-2 {
  transition-delay: 0.2s;
}

.scroll-reveal-delay-3 {
  transition-delay: 0.3s;
}

.scroll-reveal-delay-4 {
  transition-delay: 0.4s;
}
</style>
