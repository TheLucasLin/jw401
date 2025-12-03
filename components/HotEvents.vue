<template>
  <section class="pb-20">
    <div class="text-center mb-10 scroll-reveal">
      <h2 class="hot-events-title">熱門活動</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-[10px]" style="margin-left: 9%; margin-right: 9%">
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
            <h3 v-html="event.title" class="event-title"></h3>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-4xl font-black text-white italic drop-shadow-md" style="font-family: 'Mantou Sans';">{{ event.date }}</span>
            <button
              class="apply-button text-white rounded-full font-bold relative z-30 w-[110px] h-[60px] flex items-center justify-center"
              @click="applyGolf(event.id)"
              style="font-family: 'Mantou Sans';font-size: 24px;"
            >
              報名
            </button>
          </div>
        </div>

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

.apply-button {
  background: black;
  transition: all 0.3s ease;
  border: 1px solid white;
}

.apply-button:hover {
  background: linear-gradient(135deg, #4DD0E1 0%, #AED581 100%);
  border: 1px solid white;
  transform: scale(1.05);
}
</style>
