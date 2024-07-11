<script setup lang="ts">
</script>

<template>
  <header class="grid w-full grid-cols-3 px-8 py-2">
    <nav class="col-start-2 mx-auto flex items-center gap-x-4">
      <RouterLink
        to="/"
        class="flex size-10 items-center justify-center rounded transition-all hover:bg-gray-300/50 dark:hover:bg-gray-700/50"
      >
        <span class="i-carbon-home text-2xl text-gray-700 dark:text-gray-300"></span>
      </RouterLink>
      <ThemeSwitcher />
    </nav>

    <!-- User profile -->
    <div class="flex items-center justify-end">
      Profile
    </div>
  </header>
</template>

<style scope></style>
