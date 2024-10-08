<script setup lang="ts">
const { smText, lgText } = defineProps<{ smText: string; lgText: string }>();
</script>

<template>
  <div class="flex flex-col text-center">
    <span class="text-xs lg:text-sm xl:text-sm">{{ smText }}</span>
    <h1 class="text-5xl md:text-5xl lg:text-5xl xl:text-5xl">{{ lgText }}</h1>
  </div>
</template>
