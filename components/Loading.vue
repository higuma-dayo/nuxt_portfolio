<template>
  <div
    v-if="loading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-background opacity-90"
  >
    <div id="tachometer">
      <div class="ii">
        <div><b><span class="num_1">0</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_2">1</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_3">2</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_4">3</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_5">4</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_6">5</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_7">6</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_8">7</span></b></div>
        <div><b></b></div>
        <div><b><span class="num_9">8</span></b></div>
      </div> 
      <div class="line"></div>
      <div class="pin"><div class="inner"></div></div> 
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
    transform: rotate(240deg);
  }
  .ii div:nth-child(2) {
    transform: rotate(255deg);
  }
  .ii div:nth-child(3) {
    transform: rotate(270deg);
  }
  .ii div:nth-child(4) {
    transform: rotate(285deg);
  }
  .ii div:nth-child(5) {
    transform: rotate(300deg);
  }
  .ii div:nth-child(6) {
    transform: rotate(315deg);
  }
  .ii div:nth-child(7) {
    transform: rotate(330deg);
  }
  .ii div:nth-child(8) {
    transform: rotate(345deg);
  }
  .ii div:nth-child(9) {
    transform: rotate(0deg);/*---*/
  }
  .ii div:nth-child(10) {
    transform: rotate(15deg);
  }
  .ii div:nth-child(11) {
    transform: rotate(30deg);
  }
  .ii div:nth-child(12) {
    transform: rotate(45deg);
  }
  .ii div:nth-child(13) {
    transform: rotate(60deg);
  }
  .ii div:nth-child(14) {
    transform: rotate(75deg);
  }
  .ii div:nth-child(15) {
    transform: rotate(90deg);
  }
  .ii div:nth-child(16) {
    transform: rotate(105deg);
  }
  .ii div:nth-child(17) {
    transform: rotate(120deg);
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
  .num_1 {transform: rotate(120deg); top:5px;} 
  .num_2 {transform: rotate(90deg); top:3px; left:2px} 
  .num_3 {transform: rotate(60deg); top:5px;} 
  .num_4 {transform: rotate(30deg); top:6px;} 
  .num_5 {transform: rotate(0deg);  top:7px;left:-2px} 
  .num_6 {transform: rotate(330deg); top:8px;left:-3px} 
  .num_7 {transform: rotate(300deg); top:8px;left:-2px;} 
  .num_8 {transform: rotate(270deg);top:7px;} 
  .num_9 {transform: rotate(240deg);top:7px;left:2px} 
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
    transform:rotate(-95deg);
    animation: pendulum;
    animation-iteration-count: infinite;
    animation-duration: 4s;
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
  @keyframes pendulum {
    10% {
      transform:rotate(100deg);
    }
    11% {
      transform:rotate(98deg);
    }
    12% {
      transform:rotate(96deg);
    }
    13% {
      transform:rotate(98deg);
    }
    14% {
      transform:rotate(96deg);
    }
    15% {
      transform:rotate(98deg);
    }
    16% {
      transform:rotate(96deg);
    }
    17% {
      transform:rotate(98deg);
    }
    18% {
      transform:rotate(96deg);
    }
    19% {
      transform:rotate(98deg);
    }
  }
</style>
