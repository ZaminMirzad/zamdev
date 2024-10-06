<script setup lang="ts">
import { NAnchor } from "naive-ui";
import { navList } from "../utils";
</script>

<template>
  <div
    class="flex items-center gap-20 justify-between px-20 py-10 max-w-7xl mx-auto"
  >
    <a :show-rail="false" class="text-5xl font-semibold" href="/">
      Zamin Mirzad
    </a>
    <ul class="flex items-center gap-4">
      <li class="text-2xl" v-for="{ id, text, toLink } in navList" :key="id">
        <n-anchor :show-rail="false">
          <a :href="`#${toLink}`">{{ text }}</a>
        </n-anchor>
      </li>
    </ul>
  </div>
</template>
