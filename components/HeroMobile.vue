<template>
  <div class="pb-24" style="background: linear-gradient(180deg, #8aebed 0%, #fcf1a1 100%); min-height: 100vh">
    <!-- Images Container with Scroll Effect -->
    <!-- Images and Text Container with Scroll Effect -->
    <div class="flex items-center justify-center duration-500 p-6">
      <!-- Left side: Image that fades out and moves up, replaced by text -->
      <!-- Right side: Mascot with original animation -->
      <img
        src="/assets/40mascot_typeB_cut.png"
        alt="JW Mascot Type B"
        class="w-auto object-contain drop-shadow-xl duration-700"
      />
    </div>
    <div>
      <!-- 40 Year Logo - fades out and moves up -->
      <img src="/assets/40year.png" alt="JW 40th Anniversary Logo" class="drop-shadow-xl px-12 pb-10" />
    </div>
    <!-- Text Content - fades in and moves to image position -->
    <div class="duration-1000 pl-[40px] pr-[35px]">
      <span
        style="
          color: var(--JW-Blue2, #0093ae);
          font-size: 18px;
          font-family: Noto Sans TC;
          font-weight: 400;
          line-height: 38.4px;
          letter-spacing: 1.92px;
          word-wrap: break-word;
        "
      >
        四十年來，我們一起歡笑、努力、突破。有人是夥伴，有人是客戶，有人是朋友，但在我們心中，你們都有一個共通的名字<br />——
      </span>
      <span
        style="
          color: var(--JW-Blue2, #0093ae);
          font-size: 18px;
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
          font-size: 18px;
          font-family: Noto Sans TC;
          font-weight: 400;
          line-height: 38.4px;
          letter-spacing: 1.92px;
          word-wrap: break-word;
        "
        ><br />感謝你們的信任與相伴，讓我們的故事，有了情感的厚度。
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// 手機版 Hero - 靜態顯示，不使用滾動動畫
</script>

<style scoped></style>
