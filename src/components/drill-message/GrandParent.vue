<script setup lang="ts">
const message = ref('來自祖父元件的訊息')
</script>

<template>
  <div>祖父元件</div>
  <Parent :message />
</template>

<style scope></style>
