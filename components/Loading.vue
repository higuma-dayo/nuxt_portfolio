<template>
  <div
    v-if="loading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-background opacity-40"
  >
    <div
      class="relative flex h-[150px] w-[150px] animate-spin items-center justify-center rounded-full bg-gradient-to-b from-[#f5f6651a] to-[#f5f665] p-[3px]"
    >
      <div class="h-full w-full rounded-full bg-background"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
