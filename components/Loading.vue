<template>
  <div v-if="loading" class="fixed inset-0 bg-background opacity-40 flex justify-center items-center z-50">
    <div class="w-[150px] h-[150px] p-[3px] flex justify-center items-center rounded-full relative bg-gradient-to-b from-[#f5f6651a] to-[#f5f665] animate-spin">
      <div class="w-full h-full bg-background rounded-full"></div>
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
