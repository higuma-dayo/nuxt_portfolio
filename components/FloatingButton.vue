<template>
    <button class="fixed_btn" @click="externalLink">
      <img src="@/assets/img/octocat.png">
    </button>
</template>

<script>
export default {
  methods: {
    externalLink() {
      const url = 'https://github.com/Shota0715'
      window.location.href = url
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed_btn { 
  position: fixed;
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  width: 70px;
  height: 70px;

  img {
    width: 80%;
  }
}
</style>