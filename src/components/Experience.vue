<script setup lang="ts">
import { NTimeline, NTimelineItem, NIcon } from "naive-ui";
import { useMediaQuery } from "@vueuse/core";
import SectionTitle from "./SectionTitle.vue";

import { experiences } from "../utils";
import { Icon } from "@vicons/utils";
import { Checks, Loader } from "@vicons/tabler";

const isLargeScreen = useMediaQuery("(min-width: 1224px)");
</script>

<template>
  <section
    id="experience"
    class="mx-auto w-full flex flex-col items-center gap-20 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-16 py-10 sm:py-10 md:py-20 lg:py-36 xl:py-36"
  >
    <SectionTitle smText="Explore my" lgText="Eperience" />

    <!-- contents  -->
    <div class="pb-4 overflow-x-auto w-full mx-auto pl-0 lg:pl-0 xl:pl-0 px-10">
      <n-timeline
        size="large"
        :horizontal="isLargeScreen"
        class="w-12/12 lg:w-2/12 xl:w-2/12"
      >
        <n-timeline-item content="Learned Basics" />
        <n-timeline-item
          v-for="{ id, company, date, type, keySkills } in experiences"
          :key="id"
          :type="type"
          :title="company"
          content="success"
          :time="date"
          class="w-full"
        >
          <div class="">
            <h1 class="">Key Skills Learned</h1>
            <ul>
              <li v-for="{ id, skill } in keySkills" :key="id">
                <Icon> <Checks /> </Icon> {{ skill }}
              </li>
            </ul>
          </div>
        </n-timeline-item>

        <n-timeline-item title="Future Company">
          <template #icon>
            <n-icon> <Loader /> </n-icon>
          </template>
          <div class="">
            Still want to grow <br />
            my skills and career
          </div>
        </n-timeline-item>
      </n-timeline>
    </div>
  </section>
</template>
