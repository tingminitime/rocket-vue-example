<!-- TODO: 定義 Props 將資料傳遞進來 -->
<script setup lang="ts">
</script>

<template>
  <div class="mx-auto max-w-xl rounded-lg bg-white p-8 drop-shadow-xl dark:bg-gray-900">
    <!-- Author -->
    <div class="mb-4 flex items-center justify-between">
      <div class="flex items-center gap-x-2">
        <img
          class="size-12 rounded-full shadow-lg"
          src="https://i.pravatar.cc/128"
          alt="author avatar"
        >

        <span>&lt;Author Name&gt;</span>
      </div>
    </div>

    <h2 class="truncate text-2xl font-semibold">
      Some Vue tips
    </h2>

    <p class="pb-8 pt-4">
      Vue 3 is awesome! You can use the <code>defineProps</code> and <code>defineEmits</code> helpers to define props and emits in the <code>setup</code> block.

      <br><br>

      You can also use the <code>ref</code> and <code>reactive</code> helpers to create reactive variables.

      <br><br>

      The <code>toRefs</code> helper can be used to destructure a reactive object into individual refs.

      <br><br>

      The <code>watch</code> helper can be used to watch a reactive variable.

      <br><br>

      The <code>watchEffect</code> helper can be used to watch a reactive variable without specifying a dependency.

      <br><br>

      The <code>computed</code> helper can be used to create a computed variable.

      <br><br>

      The <code>onMounted</code> and <code>onUnmounted</code> helpers can be used to run code when a component is mounted and unmounted.

      <br><br>

      The <code>provide</code> and <code>inject</code> helpers can be used to provide and inject variables to and from child components.
    </p>

    <hr>

    <button
      type="button"
      class="my-btn ml-auto mt-4"
    >
      Next
    </button>
  </div>
</template>

<style scope></style>
