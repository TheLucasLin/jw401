<template>
  <section class="py-20 bg-[#F4F0D6]">
    <div class="text-center mb-12">
      <h2 class="gallery-title">40週年精彩回顧</h2>
    </div>

    <div class="flex flex-wrap gap-[10px] justify-center px-[9%]">
      <div
        v-for="(events, idx) in GALLERY_IMAGES"
        :key="idx"
        class="relative rounded-2xl overflow-hidden group cursor-pointer gallery-item"
        :class="{ 'hidden md:block': idx >= 3 && !isExpanded }"
        @click="navigateTo(events.link)"
      >
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          :style="{ backgroundImage: `url(${events.image})` }"
        ></div>
        <!-- Overlay similar to hot events -->
        <div
          class="absolute inset-0 bg-jw-accent/80 mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity"
        ></div>

        <!-- Text Content -->
        <div class="absolute inset-0 p-6 flex flex-col justify-between">
          <h3 class="gallery-event-title">{{ events.label }}<br class="hidden md:block" />{{ events.label2 }}</h3>
          <span class="gallery-date-range">{{ events.dateRange }}</span>
        </div>
      </div>
    </div>

    <div v-if="GALLERY_IMAGES.length > 3" class="flex justify-center mt-8 md:hidden">
      <a href="#" @click.prevent="isExpanded = !isExpanded" class="expand-btn flex items-center gap-1">
        <span>{{ isExpanded ? "收起" : "展開看更多" }}</span>
        <ChevronUp v-if="isExpanded" />
        <ChevronDown v-else />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import { ref } from "vue";
import { GALLERY_IMAGES } from "~/utils/constants";

const isExpanded = ref(false);
</script>

<style scoped>
@font-face {
  font-family: "Mantou Sans";
  src: url("~/assets/MantouSans-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

.gallery-title {
  font-family: "Mantou Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 87px;
  display: flex;
  align-items: center;
  color: #0093ae;
  justify-content: center;
}

.gallery-event-title {
  font-family: "Mantou Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 53px;
  color: #ffffff;
}

.gallery-date-range {
  font-family: "Mantou Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  color: #ffffff;
}

.gallery-item {
  width: 400px;
  height: 300px;
}

.expand-btn {
  font-family: "Noto Sans TC";
  font-size: 20px;
  color: #0093ae;
  transition: all 0.3s ease;
  font-weight: 900;
}
</style>
