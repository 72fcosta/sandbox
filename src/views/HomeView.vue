<script setup lang="ts">
import { ref } from 'vue'

const consoleLogOutput = ref()
const logToConsole = () => {
   console.log('Hello, world!')
   consoleLogOutput.value = 'Check the console for output.'
}
</script>

<template>
   <main class="flex w-full flex-col bg-[#060e2c]">
      <h1 class="flex w-full bg-[#132865] p-6">SANDBOX</h1>
      <div class="grow px-6 py-5">
         <p v-text="consoleLogOutput"></p>
         <button @click="logToConsole">Log to console</button>
      </div>
   </main>
</template>
