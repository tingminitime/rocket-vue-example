<script setup lang="ts">
const route = useRoute()
const pageTitle = computed(() => route.meta.title ?? 'No Title')
</script>

<template>
  <TheHeader />
  <main class="px-4 py-2">
    <h1 class="mb-4 text-center text-3xl font-bold">
      {{ pageTitle }}
    </h1>
    <RouterView />
    <!-- <TheFooter class="mt-6" /> -->
  </main>
</template>
