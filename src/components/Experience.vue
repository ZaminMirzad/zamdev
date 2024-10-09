<script setup lang="ts">
import { NTimeline, NTimelineItem, NIcon } from "naive-ui";
import { useMediaQuery } from "@vueuse/core";
import SectionTitle from "./SectionTitle.vue";

import { experiences } from "../utils";
import { Icon } from "@vicons/utils";
import { Checks, Loader } from "@vicons/tabler";
import { CodeWorking } from "@vicons/ionicons5";

const isLargeScreen = useMediaQuery("(min-width: 1224px)");
</script>

<template>
  <section
    id="experience"
    class="mx-auto w-full flex flex-col items-center gap-20 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-16 py-10 pt-20 sm:py-10 md:py-20 lg:py-36 xl:py-36"
  >
    <SectionTitle smText="Explore my" lgText="Eperience" />

    <!-- contents  -->
    <div
      class="pb-4 overflow-x-auto w-full mx-auto pl-0 lg:pl-0 xl:pl-0 px-2 dark:text-white"
    >
      <n-timeline :horizontal="isLargeScreen" class="flex justify-center">
        <n-timeline-item
          title="Learned Basic/Advanced Programming From:"
          class="w-12/12 max-w-full lg:max-w-60 xl:max-w-60"
        >
          <template #icon>
            <n-icon> <CodeWorking class="text-bluesh animate-spin" /> </n-icon>
          </template>
          <div
            class="p-2 rounded-md border dark:border-gray-900 dark:bg-black dark:text-white/80"
          >
            <ul>
              <li>
                <Icon class="">
                  <Checks />
                </Icon>
                University
              </li>
              <li>
                <Icon class="">
                  <Checks />
                </Icon>
                Coding Bootcamps
              </li>
              <li>
                <Icon class="">
                  <Checks />
                </Icon>
                Youtube
              </li>
              <li>
                <Icon class="">
                  <Checks />
                </Icon>
                Coursera
              </li>
            </ul>
          </div>
        </n-timeline-item>
        <n-timeline-item
          v-for="{ id, company, date, type, keySkills } in experiences"
          :key="id"
          :type="type"
          :title="company"
          content="success"
          :time="date"
          class="w-12/12 dark:text-white/90"
          color="gray"
        >
          <div
            class="border p-2 rounded-md dark:bg-black dark:text-white/80"
            :class="
              type === 'success'
                ? 'border-green-500 bg-green-400/5 dark:border-green-950/80 dark:bg-green-950/20'
                : type === 'error'
                ? 'border-red-500 bg-red-400/5 dark:border-red-950/80 dark:bg-red-950/20'
                : type === 'info'
                ? 'border-bluesh bg-bluesh/5 dark:border-bluesh/30 dark:bg-bluesh/5'
                : ''
            "
          >
            <h1 class="font-semibold text-xs lg:text-lg xl:text-lg">
              What I Learned Here:
            </h1>
            <ul>
              <li v-for="{ id, skill } in keySkills" :key="id">
                <Icon
                  :class="
                    type === 'success'
                      ? 'text-green-500 dark:text-green-600'
                      : type === 'error'
                      ? 'text-red-500 dark:text-red-600'
                      : type === 'info'
                      ? 'text-bluesh dark:text-bluesh/90'
                      : ''
                  "
                >
                  <Checks />
                </Icon>
                {{ skill }}
              </li>
            </ul>
          </div>
        </n-timeline-item>

        <n-timeline-item title="Future Company" class="w-12/12">
          <template #icon>
            <n-icon>
              <Loader class="animate-bounce text-green-500" />
            </n-icon>
          </template>
          <div class="">
            Still want to grow <br />
            my skills and career <br />
            with ...
          </div>
        </n-timeline-item>
      </n-timeline>
    </div>
  </section>
</template>
