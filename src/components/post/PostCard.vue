<script setup lang="ts">
const props = defineProps<{
  title: string
  data: {
    content: string
  }
}>()

const _data = ref(JSON.parse(JSON.stringify(props.data)))
</script>

<template>
  <div>
    {{ title }}
  </div>

  <div>
    {{ data.content }}

    <button @click="_data.content = 'Updated content'">
      Update content
    </button>
  </div>
</template>

<style scope></style>
