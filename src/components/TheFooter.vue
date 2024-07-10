<script setup lang="ts">
</script>

<template>
  <nav class="mx-auto grid max-w-32 grid-cols-2 place-items-center">
    <RouterLink
      to="/"
      class="flex items-center justify-center rounded p-1 transition-all hover:bg-gray-300/50 dark:hover:bg-gray-700/50"
    >
      <span class="i-carbon-home text-2xl text-gray-700 dark:text-gray-300"></span>
    </RouterLink>

    <ThemeSwitcher />
  </nav>
</template>

<style scope></style>
