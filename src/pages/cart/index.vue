<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

cartStore.$subscribe((mutation, state) => {
  console.log('[subscribe]', mutation.events)

  // 每當 state 發生變化，會將 state.cart 持久化到 localStorage
  localStorage.setItem('cart', JSON.stringify(state.cart))
})

cartStore.$onAction((action) => {
  console.log('[onAction]', action)

  action.after((result) => {
    console.log(`Finished "${action.name}", Result: ${result}`)
  })

  action.onError((error) => {
    console.log(`Error "${action.name}", Error: ${error}`)
  })
})

function addProduct() {
  const productId = crypto.randomUUID()
  cartStore.addProduct({
    id: productId,
    name: `Product ${productId.split('-')[0]}`,
    price: 100 + Math.floor(Math.random() * 100),
  })
}

function removeProduct(id: string) {
  cartStore.removeProduct(id)
}
</script>

<template>
  <div class="mx-auto max-w-sm">
    <button
      class="rounded bg-gray-100 px-2 py-1 text-gray-900 hover:bg-gray-200"
      @click="addProduct"
    >
      Add Product
    </button>

    <div>
      <p class="mt-4">
        Products:
      </p>

      <span>Amount: {{ cartStore.totalAmount.toLocaleString() }}</span>

      <ul>
        <li
          v-for="product in cartStore.cart"
          :key="product.id"
          class="space-x-3 space-y-2"
        >
          <span>{{ product.name }} - $ {{ product.price.toLocaleString() }}</span>
          <button
            class="rounded bg-gray-100 px-2 py-0.5 text-gray-900 hover:bg-gray-200"
            @click="removeProduct(product.id)"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scope></style>
