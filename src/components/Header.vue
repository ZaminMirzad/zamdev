<script setup lang="ts">
import { ref } from "vue";
import { NAnchor, NDrawer, NDrawerContent } from "naive-ui";
import type { DrawerPlacement } from "naive-ui";
import { Icon } from "@vicons/utils";
import { Menu2, X } from "@vicons/tabler";
import { navList } from "../utils";

const isOpen = ref(false);

const placement = ref<DrawerPlacement>("top");

const handleMenu = (place: DrawerPlacement) => {
  isOpen.value = !isOpen.value;
  placement.value = place;
};
</script>

<template>
  <div
    class="max-w-7xl mx-auto font-Fredoka flex items-center gap-20 justify-between px-6 sm:px-8 md:px-10 lg:px-20 xl:px-20 lg:py-10 py-3 sticky sm:sticky md:flex lg:flex xl:flex top-0 z-50 bg-white dark:bg-dark dark:text-white/90"
  >
    <a class="text-4xl lg:text-5xl" href="/"> Zamin Mirzad </a>
    <ul class="hidden sm:hidden md:flex lg:flex items-center gap-4">
      <li class="text-2xl" v-for="{ id, text, toLink } in navList" :key="id">
        <n-anchor :show-rail="false">
          <a :href="`#${toLink}`">{{ text }}</a>
        </n-anchor>
      </li>
    </ul>

    <button
      class="border-0 block sm:block md:hidden lg:hidden"
      @click="handleMenu('top')"
    >
      <Icon size="30">
        <Menu2 v-if="!isOpen" />
        <X v-if="isOpen" />
      </Icon>
    </button>

    <!-- mobile menu drawer -->
    <n-drawer
      v-model:show="isOpen"
      :placement="placement"
      class="p-0 flex flex-col h-fit dark:bg-black dark:text-white/90"
    >
      <n-drawer-content class="w-full h-fit py-2">
        <div class="w-full text-end flex justify-center mb-2">
          <button
            class="flex items-center justify-center"
            @click="handleMenu('top')"
          >
            <Icon size="30">
              <Menu2 v-if="!isOpen" />
              <X v-if="isOpen" />
            </Icon>
          </button>
        </div>
        <ul class="flex flex-col items-center justify-center gap-2">
          <li
            as="button"
            @click="handleMenu('top')"
            class="text-xl w-fit text-center"
            v-for="{ id, text, toLink } in navList"
            :key="id"
          >
            <n-anchor :show-rail="false">
              <a :href="`#${toLink}`">{{ text }}</a>
            </n-anchor>
          </li>
        </ul>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
