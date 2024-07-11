<script setup lang="ts">
// import type { Member } from '~/types/api/member'

// defineProps({
//   memberData: Object,
// })

// defineProps<{
//   memberData: Member | null
// }>()
</script>

<template>
  <div class="relative mx-auto w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow before:absolute before:left-0 before:top-0 before:z-0 before:h-2/6 before:w-full before:rounded-b-xl before:rounded-t-lg before:bg-teal-100 dark:border-gray-700 dark:bg-gray-800 before:dark:bg-teal-700">
    <div class="relative z-10 flex flex-col items-center py-10">
      <img
        class="mb-3 size-24 rounded-full shadow-lg"
        src="https://i.pravatar.cc/128"
        alt="member avatar"
      >

      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        &lt;Member name&gt;
      </h5>

      <span class="text-sm text-gray-500 dark:text-gray-400">
        &lt;Member job&gt;
      </span>

      <span class="text-sm text-gray-500 dark:text-gray-400">
        &lt;Member email&gt;
      </span>

      <div class="mt-4 flex gap-x-2 md:mt-6">
        <a
          href="#"
          class="my-btn"
        >
          Add friend
        </a>
        <a
          href="#"
          class="my-btn"
        >
          Message
        </a>
      </div>
    </div>
  </div>
</template>

<style scope></style>
