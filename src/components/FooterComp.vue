<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
   <footer class="flex h-[42px] items-center justify-center bg-[#0B173A] text-white/50">
      <div class="flex items-center gap-x-1 text-sm leading-none">
         <span>2023</span>
         <span>©</span>
         <span class="mb-[1px] ml-[2px] border-r border-white/10 pr-[4px]">
            <IconLogo class="w-[80px]" />
         </span>
         <span class="pb-[1px]">Desenvolvedor Web</span>
      </div>
   </footer>
</template>
