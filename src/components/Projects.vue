<template>
  <section
    id="projects"
    class="max-w-7xl mx-auto flex flex-col items-center gap-20 px-6 sm:px-8 md:px-10 lg:px-20 xl:px-20 py-10 sm:py-10 md:py-20 lg:py-52 xl:py-52"
  >
    <SectionTitle smText="Browse my recent" lgText="Projects" />

    <!-- contents  -->
    <div class="flex items-center gap-6 flex-wrap w-full">
      <!-- <n-flex :wrap="true"> -->
      <ProjectCard
        v-for="{
          id,
          title,
          imageLink,
          githubLink,
          liveDemoLink,
        } in projects.slice(0, 4)"
        :key="id"
        :title="title"
        :imageLink="imageLink"
        :githubLink="githubLink"
        :liveDemoLink="liveDemoLink"
      />
      <!-- </n-flex> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "../utils";
import ProjectCard from "./ProjectCard.vue";
import SectionTitle from "./SectionTitle.vue";
</script>
