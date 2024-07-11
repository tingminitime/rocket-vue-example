<script setup lang="ts">
const route = useRoute()
const pageTitle = computed(() => route.meta.title ?? 'No Title')
</script>

<template>
  <main class="px-4 py-10">
    <h1 class="mb-4 text-center text-3xl font-bold">
      {{ pageTitle }}
    </h1>
    <RouterView />
    <TheFooter class="mt-6" />
  </main>
</template>
