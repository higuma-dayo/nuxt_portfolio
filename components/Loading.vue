<template>
  <div
    v-if="loading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-background opacity-90"
  >
    <div id="tachometer">
      <div class="ii">
        <div><b><span class="num_1">0</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_2">10</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_3">20</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_4">30</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_5">40</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_6">50</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_7">60</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_8">70</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_9">80</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_10">90</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_11">100</span></b></div>
      </div> 
      <div class="line"></div>
      <div class="pin"><div class="inner"></div></div>
      <p class="percent">%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: false,
      progress: 0
    }
  },
  methods: {
    start() {
      this.loading = true
      this.progress = 0
    },
    updateProgress(value) {
      this.progress = Math.min(Math.round(value * 100), 100)
      // 進捗に合わせてlineの回転角度を更新
      const lineElement = document.querySelector('.line')
      if (lineElement) {
        // -148度（0%）から297度（100%）の間で変化
        const rotationDegree = -148 + (this.progress * 2.97)
        lineElement.style.transform = `rotate(${rotationDegree}deg)`
      }
    },
    finish() {
      this.progress = 100
      setTimeout(() => {
        this.loading = false
      }, 500) // 完了アニメーションを見せるための遅延
    }
  },
}
</script>
<style>
  #tachometer{
    margin:25px auto;
    width:150px;
    height:150px;
    border-radius: 100%;
    display: block;
    position: relative;  
  }
  .ii {
    position: absolute;
    width: 150px; 
    height: 150px; 
    z-index: 2;
  }
  .ii div {
    position: absolute;
    width: 150px; 
    height: 150px; 
    padding:4px;
    box-sizing: border-box;
  }
  .ii div b {
    position: absolute;
    display: block;
    left: 50%;
    width: 1px;
    height: 5px;
    background: #d8fa00;
    margin: 0 -5px 0;
  }
  .ii div:nth-child(2n+1) b {
    width: 5px;
    height: 5px;
    margin: 0 -5px 0;
  }
  .ii div:nth-child(1) {
    transform: rotate(212deg);
  }
  .ii div:nth-child(2) {
    transform: rotate(227deg);
  }
  .ii div:nth-child(3) {
    transform: rotate(242deg);
  }
  .ii div:nth-child(4) {
    transform: rotate(257deg);
  }
  .ii div:nth-child(5) {
    transform: rotate(272deg);
  }
  .ii div:nth-child(6) {
    transform: rotate(287deg);
  }
  .ii div:nth-child(7) {
    transform: rotate(302deg);
  }
  .ii div:nth-child(8) {
    transform: rotate(317deg);
  }
  .ii div:nth-child(9) {
    transform: rotate(-28deg);/*---*/
  }
  .ii div:nth-child(10) {
    transform: rotate(-13deg);
  }
  .ii div:nth-child(11) {
    transform: rotate(2deg);
  }
  .ii div:nth-child(12) {
    transform: rotate(17deg);
  }
  .ii div:nth-child(13) {
    transform: rotate(32deg);
  }
  .ii div:nth-child(14) {
    transform: rotate(47deg);
  }
  .ii div:nth-child(15) {
    transform: rotate(62deg);
  }
  .ii div:nth-child(16) {
    transform: rotate(77deg);
  }
  .ii div:nth-child(17) {
    transform: rotate(92deg);
  }
  .ii div:nth-child(18) {
    transform: rotate(107deg);
  }
  .ii div:nth-child(19) {
    transform: rotate(122deg);
  }
  .ii div:nth-child(20) {
    transform: rotate(137deg);
  }
  .ii div:nth-child(21) {
    transform: rotate(152deg);
  }
  [class^="num_"] {
    color:#d8fa00;
    display: block;
    position: absolute;
    width: 5px;
    font-size:10px; 
    text-align: center;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    text-decoration:none;
  }
  .num_1 {transform: rotate(148deg); top:6px;} 
  .num_2 {transform: rotate(118deg); top:3px;} 
  .num_3 {transform: rotate(88deg); top:3px;} 
  .num_4 {transform: rotate(58deg); top:5px; left:-1px;} 
  .num_5 {transform: rotate(28deg); top:5px; left:-3px} 
  .num_6 {transform: rotate(-2deg); top:7px; left:-5px} 
  .num_7 {transform: rotate(-32deg); top:10px; left:-4px;} 
  .num_8 {transform: rotate(-62deg);top:13px; left:-3px;} 
  .num_9 {transform: rotate(-92deg);top:13px;} 
  .num_10 {transform: rotate(-122deg);top:12px; left:4px} 
  .num_11 {transform: rotate(-152deg);top:13px; left:14px} 
  .line {
    background: #d8fa00;
    background-image: linear-gradient(to bottom, #d8fa00, #343536);
    height: 0;
    left: 50%;
    position: absolute;
    top: 50%;
    width: 0;
    transform-origin: 50% 100%;
    margin: -65px -2px 0;
    padding: 65px 2px 0; 
    z-index:2;
    border-radius: 50% 50% 0 0;    
    transform: rotate(-148deg); /* 初期位置 */
    transition: transform 0.3s ease; /* スムーズな動きのためのトランジション */
  }
  .pin {
    width: 15px; 
    height: 15px; 
    left:50%;
    top:50%;
    margin: -7px 0 0 -9px; 
    background-color: #d8fa00;
    border-radius: 50%;
    position: absolute;
    z-index: 4;
  }
  .inner {
    width: 5px; 
    height: 5px; 
    margin: 5px auto 0; 
    border-radius: 100%;
    position: relative;
  }
  .percent {
    font-size: 12px;
    font-weight: bolder;
    font-family: 'Open Sans', sans-serif;
    width: 20px; 
    height: 20px; 
    left:50%;
    top:50%;
    margin: -38px 0 0 -7px; 
    color: #d8fa00;
    position: absolute;
    z-index: 5;
  }
</style>
