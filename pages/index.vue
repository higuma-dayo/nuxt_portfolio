<template>
  <div>
    <div class="mainVisual">
      <WebGL />
      <StarWars />
      <nuxt-link v-scroll-to="'#about'" to class="mainVisual__button"/>
      <!-- <TopMessage /> -->
      <!-- <picture>
        <source
          :width="settings.mainVisualSp.width"
          :height="settings.mainVisualSp.height"
          :srcset="settings.mainVisualSp.url"
          media="(max-width: 767px)"
        />
        <img
          :width="settings.mainVisualPc.width"
          :height="settings.mainVisualPc.height"
          :src="settings.mainVisualPc.url"
          alt=""
        />
      </picture> -->
    </div>

    <!-- <ScrollView> -->
      <section id="about" class="sectionPrimary">
        <div class="container">
          <h2 class="headingPrimary">about</h2>
          <div class="profile">
            <div class="profile__upper">
              <div class="profile__text">
                <p class="profile__name">
                  <span>{{ settings.name }}</span>
                  <span lang="en">{{ settings.nameEnglish }}</span>
                </p>
                <p class="profile__bizname">
                  <span>ビジネスネーム</span>
                  <span lang="en">{{ settings.bizname }}</span>
                </p>
                <dl class="profile__item">
                  <dt class="profile__title">技術スタック</dt>
                  <dd>{{ settings.skills }}</dd>
                </dl>
                <dl class="profile__item">
                  <dt class="profile__title">趣味</dt>
                  <dd>{{ settings.hobby }}</dd>
                </dl>
              </div>
              <figure class="profile__image">
                <img
                  :width="settings.profileImage.width"
                  :height="settings.profileImage.height"
                  :src="settings.profileImage.url"
                  :alt="settings.name"
                />
              </figure>
            </div>
            <p class="profile__message">{{ settings.message }}</p>
          </div>
        </div>
      </section>
    <!-- </ScrollView> -->

    <!-- <ScrollView> -->
      <section class="sectionPrimary background--gray">
        <div class="container">
          <h2 class="headingPrimary">works</h2>
          <ol class="row works">
            <li v-for="work in works.contents" :key="work.id" class="works__item">
              <nuxt-link :to="`/works/${work.id}/`" class="works__inner">
                <figure class="works__image">
                  <img
                    :width="work.thumbnail.width"
                    :height="work.thumbnail.height"
                    :src="work.thumbnail.url"
                    :alt="work.title"
                  />
                </figure>
                <div class="works__text">
                  <p class="works__name">{{ work.title }}</p>
                  <p class="works__date">
                    <time
                      :datetime="work.date"
                      v-text="$dateFns.format(new Date(work.date), 'yyyy.MM.dd')"
                    />
                  </p>
                </div>
              </nuxt-link>
            </li>
          </ol>
          <p class="button-area">
            <nuxt-link to="/works" class="buttonPrimary">view more</nuxt-link>
          </p>
        </div>
      </section>
    <!-- </ScrollView> -->
    <FloatingButton />
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const settings = await $microcms.get({
      endpoint: 'settings',
    })

    const works = await $microcms.get({
      endpoint: 'works',
      queries: { limit: 2 },
    })
    return {
      settings,
      works,
    }
  },
}
</script>

<style lang="scss" scoped>
.mainVisual {
  &__button {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -16px;
  display: block;
  width: 32px;
  height: 32px;
  border: 2px solid #FFF;
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: bounce 2s infinite 2s;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  transform: scale(1)
}

&__button:before,&__button::after {
  content: ""; /* 疑似要素に指定必須 */
  width: 12px; /* 線の長さを指定 */
  height: 3px; /* 線の幅を指定 */
  display: inline-block; /* インラインブロックにする */
  border-radius: 2px; /* 線を角丸にする */
  background: white;   /* 線の色を指定 */
  position: absolute; /* 相対位置に指定 */
    // position: absolute;
    // top: calc(50% - 8px);
    // left: calc(50% - 6px);
    // transform: rotate(-45deg);
    // display: block;
    // width: 12px;
    // height: 12px;
    // content: "";
    // border: 2px solid white;
    // border-width: 0px 0 2px 2px;
    // border-radius: 2px;
}

&__button::before {
  top: calc(77% - 8px);
  left: calc(45% - 8px);    /* 数値は微調整してください */
  transform: rotate(45deg); /* 45度回転させる */
}
&__button::after {
  top: calc(77% - 8px);
  left: calc(70% - 8px);  /* 数値は微調整してください */
  transform: rotate(-45deg); /* -45度回転させる */
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  }

  img {
    width: 100%;
  }
}

.profile {
  &__upper {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 0.5em;

    @include mq() {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-bottom: 2em;
    }
  }

  &__text {
    @include mq() {
    }
  }

  &__name {
    font-size: fz(24);
    font-weight: bold;
    margin-bottom: 0.5em;

    @include mq() {
      font-size: fz(28);
      margin-bottom: 0.857em;
    }

    [lang='en'] {
      font-size: fz(18);

      &::before {
        content: '/';
        margin: 0 0.5em;
      }
    }
  }

  &__bizname {
    font-size: fz(14);
    font-weight: bold;
    margin-bottom: 0.5em;

    @include mq() {
      font-size: fz(18);
      margin-bottom: 0.857em;
    }

    [lang='en'] {
      font-size: fz(18);

      &::before {
        content: '/';
        margin: 0 0.5em;
      }
    }
  }

  &__item {
    margin-bottom: 0.5em;

    @include mq() {
      margin-bottom: 1em;
    }
  }

  &__title {
    font-size: fz(18);
    font-weight: bold;
    margin-bottom: 0.222em;

    @include mq() {
      margin-bottom: 0.444em;
    }
  }

  &__image {
    width: 100%;
    margin-bottom: 1.75em;

    @include mq() {
      width: 40%;
      margin: 0 2em 0 0;
    }

    img {
      width: 100%;
    }
  }

  &__message {
    white-space: pre-wrap;
  }
}

.works {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__item {
    width: 100%;

    @include mq() {
      width: calc((100% - 2.5em) / 2);
    }
  }

  &__item + &__item {
    margin-top: 1.5em;

    @include mq() {
      margin: 0;
    }
  }

  &__inner {
    display: block;
  }

  &__image {
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }

  &__name {
    font-weight: bold;
  }

  &__date {
    font-size: fz(14);
  }
}
</style>