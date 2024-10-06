<script setup lang="ts">
import { NCard } from "naive-ui";
import { Icon } from "@vicons/utils";
import { skillList } from "../utils";
import { VerifiedRound } from "@vicons/material";
</script>

<template>
  <section
    id="experience"
    class="flex flex-col items-center gap-20 px-20 py-44"
  >
    <div class="flex flex-col text-center">
      <span class="text-xs">Explore my</span>
      <h1 class="text-5xl font-semibold">Experience</h1>
    </div>

    <!-- contents  -->
    <div class="flex items-center gap-10">
      <n-card class="flex-1 text-center space-y-5 px-10 py-4 rounded-xl">
        <h3 class="text-2xl">Frontend Development</h3>
        <div class="grid grid-cols-3 py-4 gap-4">
          <div
            class="col-span-1 flex items-start gap-2"
            v-for="{ id, skill, level } in skillList"
            :key="id"
          >
            <Icon size="20" color="#55afff" class="">
              <VerifiedRound />
            </Icon>
            <div class="flex flex-col text-sm items-start gap-0.5 mb-1">
              <span class="uppercase font-semibold w-fit -mb-1">{{
                skill
              }}</span>
              <span class="capitalize text-xs">{{ level }}</span>
            </div>
          </div>
        </div>
      </n-card>
      <n-card class="flex-1 text-center space-y-5 px-10 py-4 rounded-xl">
        <h3 class="text-2xl">Backend Development</h3>
        <div class="grid grid-cols-3 py-4 gap-4">
          <div
            class="col-span-1 flex items-start gap-2"
            v-for="{ id, skill, level } in skillList"
            :key="id"
          >
            <Icon size="20" color="#55afff">
              <VerifiedRound />
            </Icon>
            <div class="flex flex-col text-sm items-start gap-0.5 mb-1">
              <span class="uppercase font-semibold w-fit -mb-1">{{
                skill
              }}</span>
              <span class="capitalize text-xs">{{ level }}</span>
            </div>
          </div>
        </div>
      </n-card>
    </div>
  </section>
</template>
