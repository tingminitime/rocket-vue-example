<script setup lang="ts">
withDefaults(defineProps<{
  hobbies?: string[]
}>(), {
  hobbies: () => [],
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold">
      Hobbies
    </h2>

    <ul class="list-disc pl-8">
      <li
        v-for="hobby in hobbies"
        :key="hobby"
      >
        {{ hobby }}
      </li>
    </ul>
  </div>
</template>

<style scope></style>
