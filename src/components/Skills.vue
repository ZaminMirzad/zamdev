<script setup lang="ts">
import { NCard } from "naive-ui";
import { Icon } from "@vicons/utils";
import { skillList } from "../utils";
import { VerifiedRound } from "@vicons/material";
import SectionTitle from "./SectionTitle.vue";
</script>

<template>
  <section
    id="skills"
    class="flex flex-col items-center gap-20 px-6 sm:px-8 md:px-10 lg:px-20 xl:px-20 py-10 sm:py-10 md:py-20 lg:py-52 xl:py-52"
  >
    <SectionTitle smText="Explore my" lgText="Skills" />

    <!-- contents  -->
    <div
      class="max-w-7xl mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center gap-10"
    >
      <n-card
        class="flex-1 text-center space-y-5 px-2 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-4 rounded-xl"
      >
        <h3 class="text-2xl">Frontend Development</h3>
        <!-- skills -->
        <div class="flex flex-wrap py-4 gap-4">
          <div
            class="flex min-w-20 w-full max-w-36 items-start gap-2"
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
      <n-card
        class="flex-1 text-center space-y-5 px-2 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-4 rounded-xl"
      >
        <h3 class="text-2xl">Backend Development</h3>
        <!-- skills -->
        <div class="flex flex-wrap py-4 gap-4">
          <div
            class="flex min-w-20 w-full max-w-36 items-start gap-2 w-12/12"
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
