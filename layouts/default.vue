<template>
  <div class="min-h-screen overflow-hidden relative bg-transparent">
    <!-- CRTフレーム外を黒くする要素（左側） -->
    <div class="fixed top-0 bottom-0 left-0 w-[calc(50vw-960px)] z-[5]" style="pointer-events: none; background-color: #000;"></div>
    <!-- CRTフレーム外を黒くする要素（右側） -->
    <div class="fixed top-0 bottom-0 right-0 w-[calc(50vw-960px)] z-[5]" style="pointer-events: none; background-color: #000;"></div>
    
    <div class="mx-auto flex min-h-screen max-w-[1920px] flex-col relative bg-transparent">
      <TheHeader
        :class="['fixed top-0 left-0 right-0 max-w-[1920px] mx-auto transition-opacity duration-300', isModalOpen ? 'z-0 opacity-0 pointer-events-none' : 'z-[15] opacity-100']"
      />
      <main class="flex-1 overflow-x-hidden pt-16">
        <Nuxt />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    }
  },
  created() {
    this.$nuxt.$on('toggle-modal', (isOpen) => {
      this.isModalOpen = isOpen
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('toggle-modal')
  },
}
</script>
