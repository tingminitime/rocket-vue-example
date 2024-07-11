<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div>父元件</div>
  <Child />
</template>

<style scope></style>
