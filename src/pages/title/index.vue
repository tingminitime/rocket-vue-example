<script setup lang="ts">
import { useTitle } from '@vueuse/core'

const title = useTitle('New Title', { titleTemplate: '%s | My Site' })
</script>

<template>
  <div class="mx-auto max-w-sm">
    <input
      v-model="title"
      class="mt-2 w-full rounded border border-gray-300 px-2 py-1 text-gray-900"
      type="text"
    >
  </div>
</template>

<style scope></style>
