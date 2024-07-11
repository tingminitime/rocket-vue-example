export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function updateCoordinates(e: MouseEvent) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => window.addEventListener('mousemove', updateCoordinates))
  onUnmounted(() => window.removeEventListener('mousemove', updateCoordinates))

  return { x, y }
}
