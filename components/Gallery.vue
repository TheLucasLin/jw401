<template>
  <section class="py-20 bg-[#F4F0D6]">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-black text-jw-teal tracking-wider">40週年精彩回顧</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-2" style="margin-left: 14%; margin-right: 14%">
      <div
        v-for="(img, idx) in GALLERY_IMAGES"
        :key="idx"
        class="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
      >
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
        <!-- Overlay similar to hot events -->
        <div
          class="absolute inset-0 bg-jw-accent/80 mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity"
        ></div>

        <!-- Text Content -->
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-white text-xl font-black drop-shadow-md">高爾夫感謝盃-<br />北部場</h3>
          <span class="text-white text-2xl font-black italic mt-1">04/05</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GALLERY_IMAGES } from "~/utils/constants";
</script>
