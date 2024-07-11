<script setup lang="ts">
import { useTitle } from '@vueuse/core'

const title = useTitle('New Title', { titleTemplate: '%s | My Site' })
</script>

<template>
  <div class="mx-auto max-w-sm">
    <TitleInput v-model="title" />
  </div>
</template>

<style scope></style>
