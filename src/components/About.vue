<script setup lang="ts">
import { NCard } from "naive-ui";
import { UserGraduate } from "@vicons/fa";
import { Medal } from "@vicons/tabler";
import { Add } from "@vicons/carbon";
import { Icon } from "@vicons/utils";
</script>

<template>
  <section
    id="about"
    class="flex flex-col items-center justify-start gap-4 px-20 py-44 font-fredoka"
  >
    <div class="flex flex-col text-center">
      <span class="text-xs">Get to know more</span>
      <h1 class="text-5xl">About Me</h1>
    </div>
    <div class="flex items-start gap-10 w-full py-20">
      <!-- image -->
      <div class="min-w-[250px] h-[300px] overflow-hidden rounded-2xl border-8">
        <img
          class="h-full w-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <!-- details -->
      <div class="">
        <div class="flex items-start gap-4 pb-6 w-full">
          <n-card class="flex-1 text-center space-y-5 px-20 py-8 rounded-xl">
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
          <n-card class="flex-1 text-center space-y-5 px-20 py-8 rounded-xl">
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
