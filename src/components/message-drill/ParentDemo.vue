<script setup lang="ts">
</script>

<template>
  <div class="my-2 rounded border-2 border-violet-600 bg-violet-100 px-8 py-4 dark:border-violet-300 dark:bg-violet-700">
    父元件
    <ChildDemo v-bind="$attrs" />
    <!-- <ChildDemo /> -->
  </div>
</template>

<style scope></style>
