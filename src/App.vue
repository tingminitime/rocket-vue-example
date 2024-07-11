<script setup lang="ts">
const route = useRoute()
const pageTitle = computed(() => route.meta.title ?? 'No Title')
const pageDescription = computed(() => route.meta.description ?? 'No Description')
</script>

<template>
  <TheHeader />
  <main class="px-4 py-2">
    <div class="mb-4 space-y-2 text-center">
      <h1 class="text-3xl font-bold">
        {{ pageTitle }}
      </h1>
      <p class="text-gray-600 dark:text-gray-300">
        {{ pageDescription }}
      </p>
    </div>

    <!-- see: https://vuejs.org/guide/built-ins/suspense.html#combining-with-other-components -->
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense timeout="0">
          <component
            :is="Component"
            :key="route.path"
          />
          <template #fallback>
            <div class="flex items-center justify-center gap-x-2">
              <span class="i-eos-icons-loading size-6 stroke-[16px]"></span>
              <span>Loading...</span>
            </div>
          </template>
        </Suspense>
      </template>
    </RouterView>
    <!-- <TheFooter class="mt-6" /> -->
  </main>
</template>
