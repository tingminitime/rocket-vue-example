<!-- TODO: 修復錯誤 -->
<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <!-- 錯誤示範 -->
    <input
      v-model="modelValue"
      class="mt-2 w-full rounded border border-gray-300 px-2 py-1 text-gray-900"
      type="text"
    >
  </div>
</template>

<style scope></style>
