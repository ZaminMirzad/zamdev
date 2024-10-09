<template>
  <section
    id="contact"
    class="max-w-7xl mx-auto py-10 pt-20 sm:py-10 md:py-20 lg:py-52 xl:py-52 px-6 sm:px-8 md:px-10 lg:px-20 xl:px-20 flex flex-col items-center gap-10"
  >
    <SectionTitle smText="Get In Touch" lgText="Contact Me" />

    <div
      class="w-full sm:w-full md:w-fit lg:w-fit xl:w-fit mx-auto border dark:border-gray-900 rounded-xl lg:rounded-3xl p-6 flex flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-between gap-10"
    >
      <n-button
        variant="outline"
        round
        :color="isDark ? 'white' : 'black'"
        class="text-sm lg:text-xl xl:text-2xl dark:text-black"
      >
        <Icon size="24" class="mr-2">
          <Email />
        </Icon>
        Email Me
      </n-button>
      <n-button
        strong
        type="info"
        round
        :color="isDark ? 'white' : 'black'"
        class="text-sm lg:text-xl xl:text-2xl dark:text-black"
      >
        <Icon size="24" class="mr-2">
          <Linkedin />
        </Icon>
        Linkedin
      </n-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { NButton } from "naive-ui";
import { Icon } from "@vicons/utils";
import { Linkedin } from "@vicons/fa";
import { Email } from "@vicons/carbon";
import SectionTitle from "./SectionTitle.vue";

const isDark = useDark();
</script>
