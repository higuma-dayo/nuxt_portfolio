<template>
  <header class="header">
    <div class="headerContainer">
      <!-- ロゴ -->
      <component :is="isTopPage ? 'h1' : 'p'" class="logo">
        <nuxt-link to="/">Miguel's Portfolio</nuxt-link>
      </component>

      <!-- ハンバーガーボタン -->
      <button v-show="isMobile" type="button" class="openbtn" :class="{'active': isActiveMenu}" @click="isActiveMenu = !isActiveMenu">
        <span></span><span></span><span></span>
      </button>
      <!-- ハンバーガーメニュー -->
      <nav v-show="isMobile && isActiveMenu" id="g-nav" :class="{'panelactive': isActiveMenu}">
        <!-- メニューリスト -->
        <ul class="nav-list">
          <li class="nav-item" @click="isActiveMenu = !isActiveMenu">
            <nuxt-link to="/#about" class="menu-link">
              about
            </nuxt-link>
          </li>
          <li class="nav-item" @click="isActiveMenu = !isActiveMenu">
            <nuxt-link to="/works" class="menu-link">
              works
            </nuxt-link>
          </li>
          <li class="nav-item" @click="isActiveMenu = !isActiveMenu">
            <a href="https://next-nft-marketplace.vercel.app/" class="menu-link">
              NFTStore(demo)
            </a>
          </li>
          <li class="nav-item" @click="isActiveMenu = !isActiveMenu">
            <nuxt-link to="/contact" class="menu-link">
              contact
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div v-show="isMobile && isActiveMenu" class="circle-bg" :class="{'circleactive': isActiveMenu}"></div>

      <!-- メニュー -->
      <nav v-show="!isMobile">
        <ul class="menu">
          <li>
            <nuxt-link to="/#about" class="menu__link">about</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/works" class="menu__link">works</nuxt-link>
          </li>
          <li>
            <a href="https://next-nft-marketplace.vercel.app/" class="menu__link">NFTStore(demo)</a>
          </li>
          <li>
            <nuxt-link to="/contact" class="menu__link">contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: 900,
      isActiveMenu: false, 
    }
  },
  computed: {
    // TOPページかどうか
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
    // スマホかどうか
    isMobile() {
      return this.windowWidth < 1200
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: $base-color-primary;
}

.headerContainer {
  padding: 0 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include mq() {
    padding: 0 4em;
  }
}

.logo {
  color: $text-color-primary;
  font-family: $font-ubuntu;
  font-size: fz(18);
  font-weight: bold;
  letter-spacing: 0;

  @include mq() {
    font-size: fz(24);
  }
}

.menu {
  list-style: none;
  display: flex;
  margin-right: -0.75em;

  &__link {
    font-family: $font-ubuntu;
    font-weight: bold;
    text-transform: capitalize;
    line-height: 64px;
    display: inline-block;
    padding: 0 0.25em;
    position: relative;

    @include mq() {
      padding: 0 0.75em;
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: $key-color-black;
      transition: all 0.3s ease-in-out;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}

// mobileメニュー
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
}

.menu-link {
  font-family: $font-ubuntu;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 64px;
  display: inline-block;
  padding: 0 0.25em;
  position: relative;

  @include mq() {
    padding: 0 0.75em;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #16a085;
}

#g-nav.panelactive{
  /*position:fixed;にし、z-indexの数値を大きくして前面へ*/
  position:fixed;
  z-index: 999;
  width:100%;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

/*丸の拡大*/
.circle-bg{
  position: fixed;
  z-index:3;
  /*丸の形*/
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgb(0, 0, 0);
  /*丸のスタート位置と形状*/
  transform: scale(0);/*scaleをはじめは0に*/
  right:-50px;
  top:-50px;
  transition: all .6s;/*0.6秒かけてアニメーション*/
}

.circle-bg.circleactive{
  transform: scale(50);/*クラスが付与されたらscaleを拡大*/
}

/*ナビゲーションの縦スクロール*/
#g-nav-list{
  display: none;/*はじめは表示なし*/
  /*ナビの数が増えた場合縦スクロール*/
  position: fixed;
  z-index: 999; 
  width: 100%;
  height: 100vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

#g-nav.panelactive #g-nav-list{
  display: block; /*クラスが付与されたら出現*/
}

/*ナビゲーション*/
#g-nav ul {
opacity: 0;/*はじめは透過0*/
  /*ナビゲーション天地中央揃え※レイアウトによって調整してください。不必要なら削除*/
  position: absolute;
  z-index: 999;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}

/*背景が出現後にナビゲーションを表示*/
#g-nav.panelactive ul {
  opacity:1;
}

/* 背景が出現後にナビゲーション li を表示※レイアウトによって調整してください。不必要なら削除*/
#g-nav.panelactive ul li{
  animation-name:gnaviAnime;
  animation-duration:1s;
  animation-delay:.2s;/*0.2 秒遅らせて出現*/
  animation-fill-mode:forwards;
  opacity:0;
}
@keyframes gnaviAnime{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


/*リストのレイアウト設定*/
#g-nav li{
  text-align: center; 
  list-style: none;
}

// メニューボタン
.openbtn{
position: relative;
z-index: 9999;
cursor: pointer;
    width: 50px;
    height:50px;
}

.openbtn span{
  display: inline-block;
  transition: all .4s;
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background: #666;
}


.openbtn span:nth-of-type(1) {
top:15px;
  width: 45%;
}

.openbtn span:nth-of-type(2) {
top:23px;
  width: 35%;
}

.openbtn span:nth-of-type(3) {
top:31px;
  width: 20%;
}

.openbtn.active span:nth-of-type(1) {
  top: 18px;
  left: 18px;
  transform: translateY(6px) rotate(-135deg);
  width: 30%;
}

.openbtn.active span:nth-of-type(2) {
  opacity: 0;
}

.openbtn.active span:nth-of-type(3){
  top: 30px;
  left: 18px;
  transform: translateY(-6px) rotate(135deg);
  width: 30%;
}
</style>