<template>
  <header class="w-full bg-[#bbf3f5] relative z-50" style="height: 74px">
    <!-- Top Utility Bar -->
    <div class="w-full bg-[#bbf3f5] flex justify-end px-8" style="margin-bottom: -10px">
      <div
        class="bg-white/90 backdrop-blur-sm rounded-bl-lg rounded-br-lg px-4 py-1.5 flex items-center justify-end gap-4 text-xs text-gray-600 shadow-sm"
        style="width: 210px"
      >
        <a href="https://www.jwcpas.com.tw/memberAdd.php" class="hover:text-jw-teal transition-colors text-jw-darkTeal font-medium">加入會員</a>
        <a href="https://www.jwcpas.com.tw/login.php" class="hover:text-jw-teal transition-colors text-jw-darkTeal font-medium">會員登入</a>
        <button class="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 rounded px-2 py-0.5 transition-colors">
          <span class="font-bold text-gray-800">中</span>
          <span class="text-gray-400">En</span>
        </button>
      </div>
    </div>
    <div class="flex justify-between items-center" style="padding-left: 18%; padding-right: 18%">
      <!-- Logo Area -->
      <!-- Logo Icon -->
      <div class="flex items-center">
        <a href="https://www.jwcpas.com.tw/" target="_blank" rel="noopener">
          <img src="~/assets/logo.png" alt="JW Logo" style="width: 90%; height: 90%" />
        </a>
      </div>

      <!-- Right Section (Desktop) -->
      <div class="hidden lg:flex flex-col items-end gap-3">
        <!-- Main Nav -->
        <nav class="flex items-center gap-5">
          <a
            v-for="link in NAV_LINKS"
            :key="link.label"
            :href="link.href"
            class="text-jw-darkTeal text-sm font-bold hover:text-jw-teal flex items-center gap-1 transition-colors tracking-wide"
          >
            {{ link.label }}
            <ChevronDown v-if="link.hasDropdown" :size="14" stroke-width="3" />
          </a>
          <button class="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors">
            <Search :size="22" class="text-jw-darkTeal" stroke-width="2.5" />
          </button>
        </nav>
      </div>

      <!-- Mobile Menu Button -->
      <button class="lg:hidden p-2 text-jw-darkTeal mb-1">
        <Menu :size="28" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ChevronDown, Menu, Search } from "lucide-vue-next";
import { NAV_LINKS } from "~/utils/constants";
</script>
