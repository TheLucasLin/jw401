<template>
  <div 
    ref="heroSection"
    class="pb-24" 
    style="background: linear-gradient(180deg, #8aebed 0%, #fcf1a1 100%); min-height: 100vh;padding-top: 160px;"
  >
    <!-- Images Container with Scroll Effect -->
    <!-- Images and Text Container with Scroll Effect -->
    <div 
      ref="imagesContainer"
      class="flex items-center justify-center transition-all duration-500 pt-[200px]"
      :style="imagesContainerStyle"
    >
      <!-- Left side: Image that fades out and moves up, replaced by text -->
      <div class="relative" style="width: 521px; min-height: 18rem;">
        <!-- 40 Year Logo - fades out and moves up -->
        <img
          ref="leftImage"
          src="/assets/40year.png"
          alt="JW 40th Anniversary Logo"
          class="h-[18rem] w-auto object-contain drop-shadow-xl transition-all duration-700 absolute"
          :style="leftImageStyle"
        />
        
        <!-- Text Content - fades in and moves to image position -->
        <div 
          ref="textContent"
          class="transition-all duration-1000 absolute"
          :style="textStyle"
        >
          <span
            style="
              color: var(--JW-Blue2, #0093ae);
              font-size: 20px;
              font-family: Noto Sans TC;
              font-weight: 400;
              line-height: 38.4px;
              letter-spacing: 1.92px;
              word-wrap: break-word;
            "
            >四十年來，我們一起歡笑、努力、突破。<br />有人是夥伴，有人是客戶，有人是朋友，<br />但在我們心中，你們都有一個共通的名字<br />——</span
          ><span
            style="
              color: var(--JW-Blue2, #0093ae);
              font-size: 20px;
              font-family: Noto Sans TC;
              font-weight: 700;
              line-height: 38.4px;
              letter-spacing: 1.92px;
              word-wrap: break-word;
            "
            >「嘉威人」<br /></span
          ><span
            style="
              color: var(--JW-Blue2, #0093ae);
              font-size: 20px;
              font-family: Noto Sans TC;
              font-weight: 400;
              line-height: 38.4px;
              letter-spacing: 1.92px;
              word-wrap: break-word;
            "
            ><br />感謝你們的信任與相伴，讓我們的故事，<br />有了情感的厚度。</span
          >
        </div>
      </div>
      
      <!-- Right side: Mascot with original animation -->
      <img
        ref="rightImage"
        src="/assets/40mascot_typeB_cut.png"
        alt="JW Mascot Type B"
        class="h-[28rem] w-auto object-contain drop-shadow-xl transition-all duration-700"
        :style="rightImageStyle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Refs
const heroSection = ref<HTMLElement | null>(null);
const imagesContainer = ref<HTMLElement | null>(null);
const leftImage = ref<HTMLElement | null>(null);
const rightImage = ref<HTMLElement | null>(null);
const textContent = ref<HTMLElement | null>(null);

// 滾動進度 (0 到 1)
const scrollProgress = ref(0);

// 動畫階段定義
// 階段1 (0-0.6): 吉祥物從滿版逐漸縮小，Logo 保持可見
// 階段2 (0.6-0.85): Logo 向上滑動淡出，文字從下方淡入
// 階段3 (0.85-1.0): 保持最終狀態

// 計算左側圖片 (40年 logo) 的樣式
const leftImageStyle = computed(() => {
  let opacity = 1;
  let translateY = 0;
  
  if (scrollProgress.value < 0.6) {
    // 階段1: logo 保持完全可見
    opacity = 1;
    translateY = 0;
  } else if (scrollProgress.value < 0.85) {
    // 階段2: logo 向上移動並淡出 (0.6 到 0.85)
    const phase2Progress = (scrollProgress.value - 0.6) / 0.25;
    opacity = 1 - phase2Progress; // 從 1 淡出到 0
    translateY = -150 * phase2Progress; // 向上移動 150px
  } else {
    // 階段3: 完全隱藏
    opacity = 0;
    translateY = -150;
  }
  
  return {
    opacity: opacity,
    transform: `translateY(${translateY}px)`,
  };
});

// 計算右側圖片 (吉祥物) 的樣式
const rightImageStyle = computed(() => {
  let translateX = 0;
  let scale = 3.0; // 初始放大,滿版效果
  
  if (scrollProgress.value < 0.25) {
    // 階段1: 吉祥物從滿版逐漸縮小 (0 到 0.25)
    const phase1Progress = scrollProgress.value / 0.25;
    scale = 3.0 - 2.0 * phase1Progress; // 從 3.0 縮放到 1.0
    translateX = 0;
  } else {
    // 階段2-4: 保持最終大小
    scale = 1.0;
    translateX = 0;
  }
  
  return {
    transform: `translateX(${translateX}px) scale(${scale})`,
  };
});

const imagesContainerStyle = computed(() => {
  return {
    marginLeft: '20%',
    marginRight: '18%',
    minHeight: '32rem',
  };
});

// 計算文字的透明度和位移
const textStyle = computed(() => {
  let opacity = 0;
  let translateY = 100; // 初始在下方
  
  if (scrollProgress.value < 0.6) {
    // 階段1: 文字完全隱藏在下方
    opacity = 0;
    translateY = 100;
  } else if (scrollProgress.value < 0.85) {
    // 階段2: 文字逐漸從下方浮出 (0.6 到 0.85)
    const phase2Progress = (scrollProgress.value - 0.6) / 0.25;
    opacity = phase2Progress; // 從 0 淡入到 1
    translateY = 100 * (1 - phase2Progress); // 從下方移動到圖片位置
  } else {
    // 階段3: 文字完全顯示在圖片位置
    opacity = 1;
    translateY = 0;
  }
  
  return {
    opacity: opacity,
    transform: `translateY(${translateY}px)`,
  };
});

// 處理滾動事件
const handleScroll = () => {
  if (!heroSection.value) return;

  // 獲取 Hero section 的位置
  const heroRect = heroSection.value.getBoundingClientRect();
  const heroTop = heroRect.top;
  const heroHeight = heroRect.height;
  
  // 獲取視窗高度
  const windowHeight = window.innerHeight;
  
  // 計算滾動進度
  // 當 Hero 在視窗頂部時,progress = 0
  // 當 Hero 完全離開視窗時,progress = 1
  let progress = 0;
  
  if (heroTop <= 0) {
    // Hero 已經開始離開視窗頂部
    // 修改計算方式：讓動畫在滾動約 40% 視窗高度時就完成
    // 這樣可以確保動畫在網頁正中間（視覺焦點）時就已經執行完畢
    const targetDistance = windowHeight * 0.3;
    progress = Math.abs(heroTop) / targetDistance;
    progress = Math.min(1, Math.max(0, progress));
  }
  
  scrollProgress.value = progress;
};

// 生命週期鉤子
onMounted(() => {
  // 初始化時檢查一次
  handleScroll();
  
  // 添加滾動事件監聽
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  // 移除滾動事件監聽
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 確保過渡效果流暢 */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
