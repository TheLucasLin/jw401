<template>
  <footer class="w-full bg-jw-darkTeal text-white py-12 font-sans" style="padding: 2% 16%">
    <div class="mx-auto grid grid-cols-1 md:grid-cols-12">
      <!-- Left Column (Logo & Contact) -->
      <div class="md:col-span-4 flex flex-col justify-between space-y-8">
        <div>
          <!-- Logo -->
          <img src="~/assets/footer_logo.png" alt="JW Logo" class="h-12 w-auto mb-4" />
          <div class="font-bold text-lg tracking-wide">嘉威聯合會計師事務所</div>
          <div class="text-xs opacity-80 mt-1">Jia Wei & Co., CPAs</div>
        </div>

        <div class="text-xs opacity-80 space-y-1.5">
          <p>Tel. 02 2299 5888</p>
          <p>[總所] 新北市五股區五工五路28號</p>
        </div>
      </div>

      <!-- Middle Column (Links & Social) -->
      <div class="md:col-span-3 flex flex-col justify-between space-y-8">
        <div class="flex flex-col gap-3 text-sm opacity-90">
          <a href="https://www.jwcpas.com.tw/contact2.php" class="hover:text-jw-cyan transition-colors">聯絡嘉威</a>
          <a href="https://www.jwcpas.com.tw/partner.php" class="hover:text-jw-cyan transition-colors">國際聯盟</a>
          <a href="https://www.jwcpas.com.tw/addint.php" class="hover:text-jw-cyan transition-colors">成為嘉威人</a>
          <a href="#" class="hover:text-jw-cyan transition-colors">網站地圖</a>
        </div>

        <div class="flex gap-4">
          <!-- Social Icons -->
          <a href="#" class="hover:bg-[#1F4E6A] transition-colors">
            <img src="~/assets/fbWhite.svg" alt="Facebook" class="h-8 w-8" />
          </a>
          <a href="#" class="hover:bg-[#1F4E6A] transition-colors">
            <img src="~/assets/igWhite.svg" alt="Instagram" class="h-8 w-8" />
          </a>
          <a href="#" class="hover:bg-[#1F4E6A] transition-colors">
            <img src="~/assets/lineWhite.svg" alt="Line" class="h-8 w-8" />
          </a>
        </div>
      </div>

      <!-- Right Column (Newsletter & Certs) -->
      <div class="md:col-span-5 flex flex-col space-y-6">
        <!-- Newsletter -->
        <div class="bg-[#2A6F8A] rounded-full p-1 pl-5 flex items-center">
          <input
            type="email"
            placeholder="您的電子信箱"
            class="bg-transparent flex-1 outline-none text-white placeholder-white/60 text-sm"
          />
          <button
            class="bg-[#66C2C6] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#5bb0b4] transition-colors whitespace-nowrap"
          >
            訂閱電子報
          </button>
        </div>

        <!-- Checkbox -->
        <div class="flex items-start gap-3 text-[12px] text-white/80">
          <div class="relative flex items-center mt-0.5">
            <input
              type="checkbox"
              class="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-white checked:bg-jw-cyan checked:border-transparent transition-all"
            />
            <Check
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-jw-darkTeal opacity-0 peer-checked:opacity-100 pointer-events-none"
              stroke-width="3"
            />
          </div>
          <label class="leading-relaxed cursor-pointer"
            >同意接收有關課程資訊、新知文章與更多資訊。訂閱即表示您已閱讀並同意我們的隱私條款。</label
          >
        </div>

        <!-- Certifications -->
        <div class="flex items-end justify-end gap-8 pt-8 opacity-90">
          <img src="~/assets/other_logo.png" alt="Certifications" class="h-16 w-auto" />
        </div>
        <div class="text-[10px] text-white/60 gap-4 flex flex-col md:flex-row justify-between items-center">
          <div class="flex gap-4 items-center">
            <a href="#" class="hover:text-white transition-colors">服務條款</a>
            <span class="w-[1px] h-2.5 bg-white/40"></span>
            <a href="#" class="hover:text-white transition-colors">隱私權政策</a>
          </div>
          <div>Copyright © 2022 嘉威聯合會計師事務所. All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Check } from "lucide-vue-next";
</script>
