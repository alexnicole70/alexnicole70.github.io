<template>
  <div class="exp-box">
    <h3>{{ timeFrame }}</h3>
    <div class="box">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="box-svg"
          viewBox="0 0 500 500"
        >
          <g>
            <polyline
              class="cls-19"
              points="60.09 69.24 4 69.24 4 562.18 60.09 562.18"
              id="polyline168"
              transform="matrix(0.99850444,0,0,0.99812281,-1.3145761e-4,-65.117401)"
            />
            <polyline
              class="cls-19"
              points="487 562.18 543.09 562.18 543.09 69.24 487 69.24"
              id="polyline170"
              transform="matrix(0.9985034,0,0,0.99812321,-46.27116,-65.117558)"
            />
          </g>
        </svg>
      </div>
      <div class="overlay">
        <h3>{{ title }}</h3>
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
@media screen and (max-width: 425px) {
  .box {
    width: 17em;
    height: 17em;
  }
  h3 {
    font-size: 1rem;
  }
  li {
    font-size: 0.6rem;
  }
}
@media screen and (min-width: 426px) {
  .box {
    width: 25em;
    height: 25em;
  }
  h3 {
    font-size: 1.75rem;
  }
}

.box {
  margin: 0 auto;
  position: relative;
  position: relative;
}

.exp-box {
  font-family: Roboto;
  h3 {
    color: #febf35;
    text-align: center;
  }
  margin: 1em;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1em;
}
.cls-19 {
  fill: none;
  stroke: #febf35;
  stroke-miterlimit: 10;
  stroke-width: 8px;
}
</style>
