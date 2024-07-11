import { defineStore } from 'pinia'

interface Product {
  id: string
  name: string
  price: number
}

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([])

  cart.value = JSON.parse(localStorage.getItem('cart') || '[]')

  const totalAmount = computed(() => {
    return cart.value.reduce((acc, product) => acc + product.price, 0)
  })

  function addProduct(product: Product) {
    cart.value.push(product)
  }

  function removeProduct(productId: Product['id']) {
    cart.value = cart.value.filter(p => p.id !== productId)
  }

  function clearCart() {
    cart.value = []
  }

  return {
    cart,
    totalAmount,
    addProduct,
    removeProduct,
    clearCart,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
