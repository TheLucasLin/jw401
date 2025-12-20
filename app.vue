<template>
  <NuxtPage />
</template>

<script setup lang="ts">
</script>

<style>
/* 滾動顯示特效 - 初始狀態 */
.scroll-reveal {
  opacity: 0;
  transform: translateY(250px);
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
  transform: scale(0.5);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
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
  transition-delay: 0.15s;
}

.scroll-reveal-delay-3 {
  transition-delay: 0.25s;
}

.scroll-reveal-delay-4 {
  transition-delay: 0.35s;
}
</style>
