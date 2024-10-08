<script setup lang="ts">
import { NButton } from "naive-ui";
import { Github, Linkedin } from "@vicons/fa";
import { Icon } from "@vicons/utils";

import profile from "@/assets/profile.png";
</script>

<template>
  <section
    id="hero"
    class="max-w-7xl mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center gap-20 py-10 sm:py-10 md:py-20 lg:py-52 xl:py-52"
  >
    <!-- image -->
    <div
      class="max-w-[400px] aspect-square w-60 sm:w-60 md:w-72 lg:w-72 xl:w-full rounded-full overflow-hidden border-8"
    >
      <img class="w-full h-full object-cover" :src="profile" />
    </div>

    <!-- title -->
    <div class="flex flex-col gap-6 justify-center text-center">
      <p class="text-lg">Hello, I'm</p>
      <h1 class="text-5xl">Zamin Mirzad</h1>
      <p class="">Fronted Developer</p>
      <div class="flex items-center gap-4">
        <n-button tertiary round type="primary" class="font-semibold"
          >Download CV</n-button
        >
        <n-button tertiary secondary round type="primary" class="font-semibold"
          >Contact info
        </n-button>
      </div>
      <div class="flex items-center gap-4 text-center justify-center">
        <a href="/">
          <Icon size="28">
            <Github />
          </Icon>
        </a>
        <a href="/">
          <Icon size="28" class="text-bluesh">
            <Linkedin />
          </Icon>
        </a>
      </div>
    </div>
  </section>
</template>
