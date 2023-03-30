<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import IconAlert from '@/components/icons/IconAlert.vue'
import FooterComp from '@/components/FooterComp.vue'
</script>

<template>
   <main class="container flex max-w-screen-xl grow p-4 xl:hidden">
      <div class="card-t w-full max-w-sm place-self-center">
         <div class="card-body gap-y-8">
            <div>
               <div class="flex items-center gap-x-1">
                  <IconAlert />
                  <p>Mínimo de 1280px para acessar</p>
               </div>
               <hr class="mt-2" />
            </div>

            <div class="mb-2 flex justify-center">
               <IconLogo class="fill-neutral w-56" />
            </div>

            <a href="#" class="btn-t gap-x-2">
               <span class="text-base">Sair</span>
            </a>
         </div>
      </div>
   </main>

   <main class="container hidden max-w-screen-xl grow p-4 xl:flex">
      <router-view />
   </main>

   <FooterComp class="hidden xl:flex" />
</template>
