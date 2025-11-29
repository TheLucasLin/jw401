<template>
  <section class="pb-24">
    <div class="text-center mb-8">
      <h2 class="font-black mb-6" style="color: #0093ae; font-size: 2.5rem; letter-spacing: 0.12em">全年活動</h2>

      <!-- Filter Tabs -->
      <div
        class="flex justify-center mb-8"
        style="background: #fef7d0; border-radius: 2rem; padding: 0 0; gap: 2rem; width: fit-content; margin: auto"
      >
        <button
          @click="activeTab = 'all'"
          :class="`w-40 px-8 py-4 rounded-full text-xl font-bold transition-all mx-0 ${
            activeTab === 'all' ? 'bg-[#44c2c6] text-white shadow' : 'hover:opacity-100 text-[#0093AE]'
          }`"
          style="border: none; outline: none"
        >
          全部
        </button>
        <button
          @click="activeTab = 'internal'"
          :class="`w-40 px-8 py-4 rounded-full text-xl font-bold transition-all mx-0 ${
            activeTab === 'internal' ? 'bg-[#44c2c6] text-white shadow' : 'hover:opacity-100 text-[#0093AE] '
          }`"
          style="border: none; outline: none; margin-left: -1.5rem; margin-right: -1.5rem; z-index: 2"
        >
          內部活動
        </button>
        <button
          @click="activeTab = 'external'"
          :class="`w-40 px-8 py-4 rounded-full text-xl font-bold transition-all mx-0 ${
            activeTab === 'external' ? 'bg-[#44c2c6] text-white shadow' : 'hover:opacity-100 text-[#0093AE]'
          }`"
          style="border: none; outline: none"
        >
          外部活動
        </button>
      </div>
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
              class="bg-[#FFF9C7] rounded-3xl overflow-hidden mb-8 last:mb-0"
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
                <div
                  :class="`absolute inset-0 ${
                    parseInt(event.id.replace('e', '')) % 2 === 0 ? 'bg-jw-cyan/80' : 'bg-jw-teal/80'
                  } mix-blend-multiply opacity-90`"
                ></div>
                <!-- Cute Face decoration -->
                <div class="absolute top-4 right-20 md:block">
                  <button
                    class="mt-4 md:mt-0 bg-black w-28 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
                  >
                    報名
                  </button>
                </div>

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
                    href="#"
                    class="absolute top-[13rem] right-20 hidden md:flex items-center text-white font-bold hover:no-underline transition-colors"
                  >
                    <span>{{ event.buttonLabel }}</span>
                    <img src="/assets/keyboard_arrow_up.png" alt="了解更多" />
                  </a>
                </div>
              </div>

              <!-- Expanded Content Area -->
              <div v-if="event.expanded" class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-4">
                <div class="space-y-4 text-sm md:text-base font-medium leading-relaxed text-jw-text">
                  <p>{{ event.description }}</p>
                </div>
                <div>
                  <div class="bg-gray-600 rounded-lg flex items-center justify-center text-gray-100 h-[200px]">
                    <!-- Placeholder for video/image -->
                    200 X 150
                  </div>

                  <!-- Pagination Dots -->
                  <div class="flex justify-center gap-2 mt-4">
                    <div class="w-2 h-2 rounded-full bg-jw-teal"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
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
import { ref } from "vue";
import { QUARTERS_DATA } from "~/utils/constants";
import type { QuarterSection } from "~/utils/types";

const quarters = ref<QuarterSection[]>(QUARTERS_DATA);
const activeTab = ref<"all" | "internal" | "external">("all");

const toggleQuarter = (id: string) => {
  quarters.value = quarters.value.map((q) => ({
    ...q,
    isOpen: q.id === id ? !q.isOpen : q.isOpen,
  }));
};
</script>
