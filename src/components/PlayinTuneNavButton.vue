<template>
  <div>
    <svg viewBox="0 0 148.87 41.275" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="m148.87 41.275h-148.87v-30.607c0-5.8917 4.7763-10.668
        10.668-10.668h127.54c5.8917 0 10.668 4.7763 10.668 10.668z"
          :style="{ fill: isActive ? '#93cfc8' : '#cae4dc' }"
        />
      </g>
      <g>
        <text text-anchor="middle" x="74.435" y="25.6375">
          <tspan class="tab-text"><slot></slot></tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: ["buttonText", "isActive"],
};
</script>
<style lang="scss" scoped>
.tab-text {
  font-family: brother-1816, sans-serif;
  fill: #ffffff;
}
</style>
