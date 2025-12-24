<template>
  <div class="flex items-center justify-center p-4 overflow-hidden" style="font-family: Mantou Sans">
    <div class="w-full relative pl-[60px]">
      <!-- 
          The Teal Horizontal Bar 
          Positioned absolute to sit behind the content but visually in the middle.
        -->
      <div
        class="absolute top-[80px] left-0 w-full h-10 bg-gradient-to-r from-[#0097A7] via-[#0097A7] to-[#0097A7]/10 z-0 transform translate-y-1/2 md:top-[60px]"
      ></div>

      <!-- Grid System for Columns -->
      <div class="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-4 min-w-[800px] md:min-w-0 pb-8">
        <!-- 一月 (Active) -->
        <div class="flex flex-col items-center group" style="width: 250px">
          <div class="h-[80px] flex items-end justify-center pb-4">
            <div
              class="px-8 py-2 rounded-full border-2 text-xl tracking-widest transition-all duration-300 bg-[#FFFDE7] border-transparent text-[#00838F] shadow-sm"
            >
              一月
            </div>
          </div>
          <div class="relative w-full flex items-center my-2" style="padding-left: 110px">
            <div class="w-7 h-7 rounded-full bg-[#FFFDE7] shadow-sm z-20"></div>
          </div>
          <div class="mt-2 flex flex-col gap-2 w-full px-4">
            <div class="flex items-center gap-3" style="padding-left: 50px">
              <span class="w-2 h-2 rounded-full bg-[#0097A7] shrink-0"></span>
              <span class="text-[#00838F] text-xl md:text-2xl tracking-wide"> 感恩故事展 </span>
            </div>
            <div class="flex items-center gap-3" style="padding-left: 50px">
              <span class="w-2 h-2 rounded-full bg-[#0097A7] shrink-0"></span>
              <span class="text-[#00838F] text-xl md:text-2xl tracking-wide" style="width: 150px"> 嘉Bar </span>
            </div>
          </div>
        </div>

        <!-- 二月 -->
        <div class="flex flex-col items-center group" style="width: 250px">
          <div class="h-[80px] flex items-end justify-center pb-4">
            <div
              class="px-8 py-2 rounded-full border-2 text-xl tracking-widest transition-all duration-300 bg-transparent border-[#00838F] text-[#00838F]"
            >
              二月
            </div>
          </div>
          <div class="relative w-full flex items-center my-2" style="padding-left: 110px">
            <div class="w-7 h-7 rounded-full bg-[#FFFDE7] shadow-sm z-20"></div>
          </div>
          <div class="mt-2 flex flex-col gap-2 w-full px-4">
            <div class="flex items-center gap-3" style="padding-left: 50px">
              <span class="w-2 h-2 rounded-full bg-[#0097A7] shrink-0"></span>
              <span class="text-[#00838F] text-xl md:text-2xl tracking-wide" style="width: 150px"> 感恩故事展 </span>
            </div>
            <div class="flex items-center gap-3" style="padding-left: 50px">
              <span class="w-2 h-2 rounded-full bg-[#0097A7] shrink-0"></span>
              <span class="text-[#00838F] text-xl md:text-2xl tracking-wide" style="width: 150px"> 嘉Bar </span>
            </div>
          </div>
        </div>

        <!-- 三月 -->
        <div class="flex flex-col items-center group" style="width: 250px">
          <div class="h-[80px] flex items-end justify-center pb-4">
            <div
              class="px-8 py-2 rounded-full border-2 text-xl tracking-widest transition-all duration-300 bg-transparent border-[#00838F] text-[#00838F]"
            >
              三月
            </div>
          </div>
          <div class="relative w-full flex items-center my-2" style="padding-left: 110px">
            <div class="w-7 h-7 rounded-full bg-[#FFFDE7] shadow-sm z-20"></div>
          </div>
          <div class="mt-2 flex flex-col gap-2 w-full px-4">
            <div class="flex items-center gap-3" style="padding-left: 50px">
              <span class="w-2 h-2 rounded-full bg-[#0097A7] shrink-0"></span>
              <span class="text-[#00838F] text-xl md:text-2xl tracking-wide" style="width: 150px"> 感恩故事展 </span>
            </div>
            <div class="flex items-center gap-3" style="padding-left: 50px">
              <span class="w-2 h-2 rounded-full bg-[#0097A7] shrink-0"></span>
              <span class="text-[#00838F] text-xl md:text-2xl tracking-wide" style="width: 150px"> 嘉Bar </span>
            </div>
          </div>
        </div>

        <!-- 四月 -->
        <div class="flex flex-col items-center group" style="width: 250px">
          <div class="h-[80px] flex items-end justify-center pb-4">
            <div
              class="px-8 py-2 rounded-full border-2 text-xl tracking-widest transition-all duration-300 bg-transparent border-[#00838F] text-[#00838F]"
            >
              四月
            </div>
          </div>
          <div class="relative w-full flex items-center my-2" style="padding-left: 110px">
            <div class="w-7 h-7 rounded-full bg-[#FFFDE7] shadow-sm z-20"></div>
          </div>
          <div class="mt-2 flex flex-col gap-2 w-full px-4">
            <div class="flex items-center gap-3" style="padding-left: 50px">
              <span class="w-2 h-2 rounded-full bg-[#0097A7] shrink-0"></span>
              <span class="text-[#00838F] text-xl md:text-2xl tracking-wide" style="width: 150px"> 告白牆 </span>
            </div>
            <div class="flex items-center gap-3" style="padding-left: 50px">
              <span class="w-2 h-2 rounded-full bg-[#0097A7] shrink-0"></span>
              <span class="text-[#00838F] text-xl md:text-2xl tracking-wide" style="width: 150px"> 高爾夫感謝盃 </span>
            </div>
          </div>
        </div>

        <!-- 五月 -->
        <div class="flex flex-col items-center group" style="width: 250px">
          <div class="h-[80px] flex items-end justify-center pb-4">
            <div
              class="px-8 py-2 rounded-full border-2 text-xl tracking-widest transition-all duration-300 bg-transparent border-[#00838F] text-[#00838F]"
            >
              五月
            </div>
          </div>
          <div class="relative w-full flex items-center my-2" style="padding-left: 110px">
            <div class="w-7 h-7 rounded-full bg-[#FFFDE7] shadow-sm z-20"></div>
          </div>
          <div class="mt-2 flex flex-col gap-2 w-full px-4">
            <div class="flex items-center gap-3" style="padding-left: 50px">
              <span class="w-2 h-2 rounded-full bg-[#0097A7] shrink-0"></span>
              <span class="text-[#00838F] text-xl md:text-2xl tracking-wide" style="width: 150px"> 新書發表 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// QuarterlyTimeline component
</script>

<style scoped>
@font-face {
  font-family: "Mantou Sans";
  src: url("~/assets/MantouSans-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
</style>
