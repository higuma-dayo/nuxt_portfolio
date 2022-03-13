<template>
    <div class="child">
        <div class="childMainVisual">
            <div class="container container--lg">
                <h1 class="childMainVisual__title">Contact</h1>
                <p>お問合せはこちら</p>
            </div>
        </div>

        <div class="container">
            <!-- <ScrollView> -->
                <div class="Form">
                    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfeIMqahcYG5_lC5d7a5g5s_TOkbYVlH6n2G6Lnjyriju9hTg/formResponse">
                        <div class="Form-Item">
                            <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
                            <input type="email" name="entry.700215552" class="Form-Item-Input" placeholder="例）example@gmail.com" required/>
                        </div>
                        <div class="Form-Item">
                            <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
                            <textarea class="Form-Item-Textarea" name="entry.879446477" placeholder="お気軽にお問い合わせください。" required></textarea>
                        </div>
                        <input type="submit" class="Form-Btn" value="送信する">
                    </form>
                </div>
            <!-- </ScrollView> -->
        </div>
        <FloatingButton />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.childMainVisual {
  text-align: center;
  padding: 5em 0;
  background-color: $base-color-secondary;
  margin-bottom: 2.5em;

  @include mq() {
    margin-bottom: 5em;
  }

  &__title {
    font-family: $font-ubuntu;
    font-size: fz(40);
    margin-bottom: 0.25em;
  }
}

.Form {
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    max-width: 720px;
}

@media screen and (max-width: 480px) {
    .Form {
        margin-top: 40px;
    }
}

.Form-Item {
    border-top: 1px solid #ddd;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    display: flex;
    align-items: center;
}

@media screen and (max-width: 480px) {
    .Form-Item {
        padding-left: 14px;
        padding-right: 14px;
        padding-top: 16px;
        padding-bottom: 16px;
        flex-wrap: wrap;
    }
}

.Form-Item:nth-child(5) {
    border-bottom: 1px solid #ddd;
}

.Form-Item-Label {
    width: 100%;
    max-width: 248px;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-size: 18px;
}

@media screen and (max-width: 480px) {
    .Form-Item-Label {
        max-width: inherit;
        display: flex;
        align-items: center;
        font-size: 15px;
    }
}

.Form-Item-Label.isMsg {
    margin-top: 8px;
    margin-bottom: auto;
}

@media screen and (max-width: 480px) {
    .Form-Item-Label.isMsg {
        margin-top: 0;
    }
}

.Form-Item-Label-Required {
    border-radius: 6px;
    margin-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 48px;
    display: inline-block;
    text-align: center;
    background: #5bc8ac;
    color: #fff;
    font-size: 14px;
}

@media screen and (max-width: 480px) {
    .Form-Item-Label-Required {
        border-radius: 4px;
        padding-top: 4px;
        padding-bottom: 4px;
        width: 32px;
        font-size: 10px;
    }
}

.Form-Item-Input {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    height: 48px;
    flex: 1;
    width: 100%;
    max-width: 410px;
    background: #eaedf2;
    font-size: 18px;
}

@media screen and (max-width: 480px) {
    .Form-Item-Input {
        margin-left: 0;
        margin-top: 18px;
        height: 40px;
        flex: inherit;
        font-size: 15px;
    }
}

.Form-Item-Textarea {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    height: 216px;
    flex: 1;
    width: 100%;
    max-width: 410px;
    background: #eaedf2;
    font-size: 18px;
}

@media screen and (max-width: 480px) {
    .Form-Item-Textarea {
        margin-top: 18px;
        margin-left: 0;
        height: 200px;
        flex: inherit;
        font-size: 15px;
    }
}

.Form-Btn {
    border-radius: 6px;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 280px;
    display: block;
    letter-spacing: 0.05em;
    background: #5bc8ac;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
}

@media screen and (max-width: 480px) {
    .Form-Btn {
        margin-top: 24px;
        padding-top: 8px;
        padding-bottom: 8px;
        width: 160px;
        font-size: 16px;
    }
}
</style>