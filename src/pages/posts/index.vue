<script setup lang="ts">
const title = ref('Posts Page')

const data = ref({
  content: 'This is a post content',
})
</script>

<template>
  <PostCard
    :title="title"
    :data="data"
  />
</template>

<style scope></style>
