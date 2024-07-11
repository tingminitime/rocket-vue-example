<script setup lang="ts">
import { useMouse } from '~/composables/mouse'

const { x, y } = useMouse()
</script>

<template>
  <div class="text-center">
    <p>
      Mouse Position:
      <span class="font-bold">{{ x }}</span>
      ,
      <span class="font-bold">{{ y }}</span>
    </p>
  </div>
</template>

<style scope></style>
