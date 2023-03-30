<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
   <footer class="footer-t flex h-[42px] items-center justify-center">
      <div class="border-t-t"></div>
      <div class="flex items-center gap-x-1 text-xs leading-none">
         <span>2023</span>
         <span>©</span>
         <span class="ml-[2px] mt-[1px] border-r border-white/10 pr-[4px]">
            <IconLogo class="w-[70px] fill-[#6287BB]/50" />
         </span>
         <span class="pb-[1px]">Desenvolvedor Web</span>
      </div>
   </footer>
</template>
