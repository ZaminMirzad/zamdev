<template>
  <n-card
    :bordered="false"
    class="h-96 w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 group rounded-xl flex-1 dark:bg-black dark:text-white/90 border dark:border-gray-900"
  >
    <div class="flex flex-col gap-4 w-full h-full">
      <!-- card image -->
      <div class="rounded-lg overflow-hidden h-64">
        <img
          class="h-full w-full object-cover group-hover:scale-110 transition duration-200 group-hover:rotate-6"
          :src="imageLink"
        />
      </div>

      <!-- card details -->
      <div class="text-center">
        <h4 class="text-lg capitalize line-clamp-1">{{ title }}</h4>
        <div class="flex items-center gap-4 pt-2 justify-center">
          <n-button
            class="flex items-center rounded-md dark:text-white"
            secondary
          >
            <Icon size="20" class="mr-2">
              <LogoGithub />
            </Icon>
            GitHub</n-button
          >
          <n-button
            class="flex items-center rounded-md"
            type="info"
            strong
            secondary
          >
            <Icon size="20" class="mr-2">
              <LivePhoto />
            </Icon>

            Live Demo
          </n-button>
        </div>
      </div>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { NButton, NCard } from "naive-ui";
import { Icon } from "@vicons/utils";
import { LogoGithub } from "@vicons/carbon";
import { LivePhoto } from "@vicons/tabler";

defineProps({
  title: String,
  imageLink: String,
  githubLink: String,
  liveDemoLink: String,
});
</script>
