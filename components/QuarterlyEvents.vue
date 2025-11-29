<template>
  <section class="pb-24">
    <div class="text-center mb-8 scroll-reveal">
      <h2 class="quarterly-events-title">全年活動</h2>
    </div>

    <div style="margin-left: 14%; margin-right: 14%">
      <div v-for="quarter in quarters" :key="quarter.id" class="border-b border-gray-300 pb-2">
        <button
          @click="toggleQuarter(quarter.id)"
          class="w-full flex justify-between items-center py-4 text-jw-text font-bold text-lg hover:text-jw-teal transition-colors"
        >
          <span class="text-jw-teal font-black">{{ quarter.label }}</span>
          <ChevronUp v-if="quarter.isOpen" />
          <ChevronDown v-else />
        </button>

        <div v-if="quarter.isOpen" class="py-6 space-y-8 animate-fadeIn">
          <div v-if="quarter.events.length > 0">
            <div
              v-for="event in quarter.events"
              :key="event.id"
              class="bg-[#FFF9C7] rounded-3xl overflow-hidden mb-8 last:mb-0 scroll-reveal-left"
            >
              <div
                :class="`relative w-full ${event.expanded ? 'h-64' : 'h-48 md:h-64'} rounded-3xl overflow-hidden group`"
              >
                <!-- Background & Overlay -->
                <div
                  class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  :style="{ backgroundImage: `url(${event.image})` }"
                ></div>
                <!-- Tint based on event type -->
                <div :class="`absolute inset-0  mix-blend-multiply opacity-90`"></div>

                <!-- Content inside Banner -->
                <div
                  class="absolute inset-0 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center text-white"
                >
                  <div>
                    <h3 class="text-3xl md:text-5xl font-black mb-2 leading-tight drop-shadow-sm">
                      {{ event.title }}<br />{{ event.titleSecond }}
                    </h3>
                    <p class="text-2xl md:text-4xl font-black opacity-90 italic tracking-widest">
                      {{ event.dateRange }}
                    </p>
                  </div>
                  <a
                    v-if="event.haveData"
                    href="#"
                    class="absolute top-[13rem] right-20 hidden md:flex items-center text-white font-bold hover:no-underline transition-colors"
                    @click.prevent="expandEvent(quarter.id, event.id)"
                  >
                    <span>{{ event.buttonLabel }}</span>
                    <ChevronUp v-if="event.expanded" />
                    <ChevronDown v-else />
                  </a>
                </div>

                <!-- Cute Face decoration -->
                <div class="absolute top-4 right-20 md:block">
                  <button
                    class="mt-4 md:mt-0 bg-black w-28 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors relative z-30"
                    @click="applyEvent(event.id)"
                  >
                    報名
                  </button>
                </div>
              </div>

              <!-- Expanded Content Area -->
              <Transition name="fade-expand">
                <div v-if="event.expanded" class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-4">
                  <div
                    class="space-y-4 font-medium text-jw-text"
                    style="font-size: 1.1rem; line-height: 2rem; padding-left: 44px"
                  >
                    <p>{{ event.description }}</p>
                  </div>
                  <div>
                    <div class="relative rounded-lg flex items-center justify-center h-[300px] overflow-hidden">
                      <img
                        v-if="event.images && event.images.length > 0"
                        :src="event.images[getCarouselIndex(event.id)]"
                        class="object-contain h-full max-w-full mx-auto transition-all duration-300"
                        alt="活動圖片"
                      />
                      <span v-else class="text-gray-400">無圖片</span>
                    </div>

                    <!-- Pagination Dots -->
                    <div v-if="event.images && event.images.length > 1" class="flex justify-center gap-2 mt-4">
                      <div
                        v-for="(img, idx) in event.images"
                        :key="idx"
                        :class="`w-2 h-2 rounded-full transition-all duration-300 ${
                          getCarouselIndex(event.id) === idx ? 'bg-jw-teal scale-125' : 'bg-gray-300'
                        }`"
                        @click="setCarouselIndex(event.id, idx, event.images.length)"
                        style="cursor: pointer"
                      ></div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
          <div v-else class="text-center text-gray-400 py-8">暫無活動</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { QUARTERS_DATA } from "~/utils/constants";
import type { QuarterSection } from "~/utils/types";

const quarters = ref<QuarterSection[]>(QUARTERS_DATA);

// 圖片輪播 index 狀態
const carouselIndexes = ref<Record<string, number>>({});

onMounted(() => {
  // 你可以在這裡執行 mounted 時需要的邏輯
  quarters.value = quarters.value.map((q) => {
    const events = q.events.map((e) => {
      let haveData = true;
      if (!e.description || e.description.trim() === "") {
        haveData = false;
        e.expanded = false;
      }
      return {
        ...e,
        haveData,
      };
    });

    return {
      ...q,
      events,
    };
  });
  startCarousel();
});

onUnmounted(() => {
  stopCarousel();
});

// 若 quarters 狀態有變化，重啟輪播，確保展開狀態正確
watch(quarters, () => {
  startCarousel();
});

const getCarouselIndex = (eventId: string) => {
  return carouselIndexes.value[eventId] ?? 0;
};

const setCarouselIndex = (eventId: string, idx: number, imagesLen: number) => {
  // 循環
  let newIdx = idx;
  if (newIdx < 0) newIdx = imagesLen - 1;
  if (newIdx >= imagesLen) newIdx = 0;
  carouselIndexes.value = { ...carouselIndexes.value, [eventId]: newIdx };
};

// 自動輪播 interval
let carouselInterval: ReturnType<typeof setInterval> | null = null;

const startCarousel = () => {
  if (carouselInterval) clearInterval(carouselInterval);
  carouselInterval = setInterval(() => {
    // 只針對展開的 event 做自動輪播
    quarters.value.forEach((q) => {
      q.events.forEach((e) => {
        if (e.expanded && e.images && e.images.length > 1) {
          setCarouselIndex(e.id, getCarouselIndex(e.id) + 1, e.images.length);
        }
      });
    });
  }, 3000);
};

const stopCarousel = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
};

const toggleQuarter = (id: string) => {
  quarters.value = quarters.value.map((q) => ({
    ...q,
    isOpen: q.id === id ? !q.isOpen : q.isOpen,
  }));
};

// 點擊「了解更多」時展開 event
const expandEvent = (quarterId: string, eventId: string) => {
  quarters.value = quarters.value.map((q) => {
    if (q.id !== quarterId) return q;
    return {
      ...q,
      events: q.events.map((e) => ({
        ...e,
        expanded: e.id === eventId ? !e.expanded : e.expanded,
      })),
    };
  });
};
const applyEvent = (id: string) => {
  // Logic for applying to event
};
</script>
<style scoped>
@font-face {
  font-family: 'Mantou Sans';
  src: url('~/assets/MantouSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

.quarterly-events-title {
  font-family: 'Mantou Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 87px;
  display: flex;
  align-items: center;
  color: #0093AE;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.fade-expand-enter-active,
.fade-expand-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-expand-enter-from,
.fade-expand-leave-to {
  opacity: 0;
  transform: translateY(20px) scaleY(0.95);
}
.fade-expand-enter-to,
.fade-expand-leave-from {
  opacity: 1;
  transform: translateY(0) scaleY(1);
}
</style>
