<template>
  <div class="exp-box block">
    <div class="background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 547 562">
        <g id="text">
          <g>
            <polyline
              class="cls-19"
              points="59.92 65.06 3.84 65.06 3.84 558 59.92 558"
            />
            <polyline
              class="cls-19"
              points="486.84 558 542.92 558 542.92 65.06 486.84 65.06"
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="overlay">
      <h3 class="timeframe">{{ timeFrame }}</h3>
      <div class="inner">
        <h3 class="title">{{ title }}</h3>
        <ul>
          <li v-for="(desc, ix) in descriptions" :key="ix">{{ desc }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ExpBox",
  props: ["title", "descriptions", "timeFrame"],
};
</script>
<style lang="scss" scoped>
.block {
  margin: 1vw 2vw;
  display: flex; /* required */
  flex-flow: row nowrap; /* required */
}
.block .background,
.block .overlay {
  box-sizing: border-box; /* required */
  width: 100%; /* required */
  flex: none; /* required */
}

.block .overlay {
  margin-left: -100%; /* required */
}

.exp-box {
  h3 {
    font-family: Roboto-Regular, Roboto;
    font-weight: normal;
    color: #65d6d1;
  }
  .timeframe {
    font-size: 2vw;
    margin-bottom: 2vw;
  }
  .inner {
    margin: 1.5vw;
    .title {
      font-size: 2vw;
    }
    li {
      font-size: 0.9vw;
      list-style: square;
      font-family: Roboto-Light, Roboto;
      font-weight: lighter;
      color: #666
    }
  }
}

.cls-1 {
  font-size: 20px;
  fill: #666;
}

.cls-1,
.cls-20 {
  font-family: Roboto-Light, Roboto;
  font-weight: 300;
}

.cls-2 {
  letter-spacing: -0.06em;
}

.cls-3 {
  letter-spacing: -0.01em;
}

.cls-4 {
  letter-spacing: -0.01em;
}

.cls-5 {
  letter-spacing: -0.01em;
}

.cls-6 {
  letter-spacing: -0.05em;
}

.cls-7 {
  letter-spacing: -0.01em;
}

.cls-8 {
  letter-spacing: 0.02em;
}

.cls-9 {
  letter-spacing: -0.01em;
}

.cls-10 {
  letter-spacing: -0.01em;
}

.cls-11 {
  letter-spacing: -0.06em;
}

.cls-12 {
  letter-spacing: -0.05em;
}

.cls-13 {
  letter-spacing: -0.02em;
}

.cls-14 {
  letter-spacing: -0.04em;
}

.cls-15,
.cls-20 {
  font-size: 40px;
  fill: #65d6d1;
}

.cls-15 {
  font-family: Roboto-Regular, Roboto;
}

.cls-16 {
  letter-spacing: -0.02em;
}

.cls-17 {
  letter-spacing: -0.01em;
}

.cls-18 {
  letter-spacing: 0em;
}

.cls-19 {
  fill: none;
  stroke: #65d6d1;
  stroke-miterlimit: 10;
  stroke-width: 8px;
}

.cls-21 {
  letter-spacing: -0.01em;
}
</style>
