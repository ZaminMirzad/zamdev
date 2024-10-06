<template>
  <section id="contact" class="py-44 flex flex-col items-center gap-10">
    <div class="flex flex-col text-center">
      <span class="text-xs">Get In Touch</span>
      <h1 class="text-5xl font-semibold">Contact Me</h1>
    </div>
    <div class="w-fit mx-auto border rounded-3xl p-10 flex items-center gap-10">
      <n-button variant="outline" class="text-2xl rounded-md py-6">
        <Icon size="34" class="text-bluesh mr-2">
          <Email />
        </Icon>
        Email Me
      </n-button>
      <n-button strong secondary type="info" class="text-2xl rounded-md py-6">
        <Icon size="30" class="text-bluesh mr-2">
          <Linkedin />
        </Icon>
        Linkedin
      </n-button>
    </div>
  </section>
</template>

<script setup>
import { NButton } from "naive-ui";
import { Icon } from "@vicons/utils";
import { Linkedin } from "@vicons/fa";
import { Email } from "@vicons/carbon";
</script>
