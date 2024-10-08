<script setup lang="ts">
import { NCard } from "naive-ui";
import { UserGraduate } from "@vicons/fa";
import { Medal } from "@vicons/tabler";
import { Add } from "@vicons/carbon";
import { Icon } from "@vicons/utils";
import SectionTitle from "./SectionTitle.vue";
import profile from "@/assets/profile.png";
</script>

<template>
  <section
    id="about"
    class="max-w-7xl mx-auto flex flex-col items-center justify-start gap-4 px-6 sm:px-8 md:px-10 lg:px-20 xl:px-20 py-10 sm:py-10 md:py-20 lg:py-52 xl:py-52"
  >
    <!-- <div class="flex flex-col text-center">
      <span class="text-xs">Get to know more</span>
      <h1 class="text-5xl">About Me</h1>
    </div> -->
    <SectionTitle smText="Get to know more" lgText="About Me" />
    <div class="flex items-start gap-10 w-full py-20">
      <!-- image -->
      <div
        class="hidden sm:hidden md:block lg:block xl:block min-w-[250px] min-h-[300px] h-60 md:h-60 lg:h-96 xl:h-96 aspect-square overflow-hidden rounded-2xl border-8"
      >
        <img class="h-full w-full object-cover" :src="profile" />
      </div>
      <!-- details -->
      <div class="">
        <div
          class="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-start gap-4 pb-6 w-full"
        >
          <n-card
            class="flex-1 text-center space-y-5 px-2 sm:px-6 md:px-8 lg:px-20 xl:px-20 py-8 rounded-xl"
          >
            <Icon size="36" class="text-bluesh">
              <Medal />
            </Icon>
            <h3 class="text-2xl font-semibold">Experience</h3>
            <span class="flex items-center justify-center font-semibold"
              >2<Icon size="22" class="text-bluesh"> <Add /> </Icon>
              &nbsp;Years</span
            >
            <h3 class="text-lg">Frontend Developer</h3>
          </n-card>
          <n-card
            class="flex-1 text-center space-y-5 px-2 sm:px-6 md:px-8 lg:px-20 xl:px-20 py-8 rounded-xl"
          >
            <Icon size="28" class="text-bluesh">
              <UserGraduate />
            </Icon>
            <h3 class="text-2xl font-semibold">Education</h3>
            <span class="">B.Sc. Bachelors Degree</span>
            <h3 class="text-lg">Frontend Developer</h3>
          </n-card>
        </div>
        <p class="text-slate-500 text-lg">
          I&apos;m a software developer passionate about turning ideas into
          functional solutions. With expertise in [JavaScript, Python, React,
          Node.js, etc.], I focus on creating user-centered applications that
          enhance the overall experience. When I’m not coding, I enjoy exploring
          new tech trends and working on personal projects.
        </p>
      </div>
    </div>
  </section>
</template>
