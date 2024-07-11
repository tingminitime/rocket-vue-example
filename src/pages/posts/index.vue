<script setup lang="ts">
import type { Post } from '~/types/api/post'

const post = ref<Post | null>(null)

// TODO: 拆分到 composables 中
const isFetchingPost = ref(false)
async function fetchPost(postId: string) {
  isFetchingPost.value = true

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json()
    return data
  }
  catch (error) {
    console.error('Error fetching post', error)
  }
  finally {
    isFetchingPost.value = false
  }
}

const postData = await fetchPost('1')
if (postData) {
  post.value = postData
}
</script>

<template>
  <!-- TODO: 將 `post` 傳入 `PostCard` 裡 -->
  <PostCard />
</template>

<style scope></style>
