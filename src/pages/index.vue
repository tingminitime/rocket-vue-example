<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="text-center">
    <div class="mx-auto flex max-w-48 flex-col gap-y-4">
      <RouterLink
        to="/demo"
        class="rounded bg-gray-100 px-2 py-1 text-gray-900 hover:bg-gray-200"
      >
        Go to demo
      </RouterLink>

      <RouterLink
        to="/posts"
        class="rounded bg-gray-100 px-2 py-1 text-gray-900 hover:bg-gray-200"
      >
        Go to posts
      </RouterLink>

      <RouterLink
        to="/member"
        class="rounded bg-gray-100 px-2 py-1 text-gray-900 hover:bg-gray-200"
      >
        Go to member
      </RouterLink>

      <RouterLink
        to="/mouse"
        class="rounded bg-gray-100 px-2 py-1 text-gray-900 hover:bg-gray-200"
      >
        Go to mouse
      </RouterLink>

      <RouterLink
        to="/title"
        class="rounded bg-gray-100 px-2 py-1 text-gray-900 hover:bg-gray-200"
      >
        Go to title
      </RouterLink>

      <RouterLink
        to="/todos"
        class="rounded bg-gray-100 px-2 py-1 text-gray-900 hover:bg-gray-200"
      >
        Go to todos
      </RouterLink>

      <RouterLink
        to="/cart"
        class="rounded bg-gray-100 px-2 py-1 text-gray-900 hover:bg-gray-200"
      >
        Go to cart
      </RouterLink>
    </div>
  </div>
</template>

<style scope></style>
