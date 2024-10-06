<script setup lang="ts">
import { NButton } from "naive-ui";
import { Github, Linkedin } from "@vicons/fa";
import { Icon } from "@vicons/utils";
</script>

<template>
  <section id="hero" class="flex items-center justify-center gap-20 py-52">
    <!-- image -->
    <div class="w-[400px] h-[400px] rounded-full overflow-hidden border-8">
      <img
        class="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>

    <!-- title -->
    <div class="flex flex-col gap-6 justify-center text-center">
      <p class="text-lg">Hello, I'm</p>
      <h1 class="text-5xl font-semibold">Zamin Mirzad</h1>
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
