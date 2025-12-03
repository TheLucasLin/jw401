<template>
  <section class="pb-20">
    <div class="text-center mb-10 scroll-reveal">
      <h2 class="hot-events-title">熱門活動</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6" style="margin-left: 9%; margin-right: 9%">
      <div
        v-for="(event, index) in HOT_EVENTS"
        :key="event.id"
        :class="`group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg transform hover:scale-[1.02] transition-all duration-300 scroll-reveal-scale scroll-reveal-delay-${index + 1}`"
      >
        <!-- Background Image with overlay -->
        <div
          class="absolute inset-0 bg-cover bg-center z-0"
          :style="{ backgroundImage: `url(${event.image})` }"
          style="pointer-events: none"
        ></div>
        <div
          class="absolute inset-0 bg-jw-accent/80 mix-blend-multiply opacity-90 z-0"
          style="pointer-events: none"
        ></div>

        <!-- Content -->
        <div class="absolute inset-0 p-6 flex flex-col justify-between z-20">
          <div>
            <h3 class="event-title">{{ event.title }}</h3>
          </div>

          <div class="flex justify-between items-end">
            <span class="text-4xl font-black text-white italic drop-shadow-md">{{ event.date }}</span>
            <button
              class="bg-black text-white text-xs px-4 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors relative z-30"
              @click="applyGolf(event.id)"
            >
              報名
            </button>
          </div>
        </div>

        <!-- Logo Watermark -->
        <div class="absolute bottom-16 right-4 opacity-30 w-12 h-6 bg-white/50 mask-image"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HOT_EVENTS } from "~/utils/constants";
const applyGolf = (id: string) => {
  // Logic for applying to golf event
};

</script>

<style scoped>
@font-face {
  font-family: 'Mantou Sans';
  src: url('~/assets/MantouSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

.hot-events-title {
  font-family: 'Mantou Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 87px;
  display: flex;
  align-items: center;
  color: #0093AE;
  justify-content: center;
}

.event-title {
  font-family: 'Mantou Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 53px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
</style>
