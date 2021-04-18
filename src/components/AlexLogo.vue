<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1785 612"
    xml:space="preserve"
  >
    <g id="Layer_1">
      <polyline
        class="st1"
        points="127.2,21.8 23,21.8 23,588.7 127.2,588.7 	"
        :style="{ stroke: colors }"
      />
      <polyline
        class="st1"
        points="1655.8,588.7 1760,588.7 1760,21.8 1655.8,21.8 	"
        :style="{ stroke: colors }"
      />
      <polyline
        class="st2"
        points="537,62 756,62 756,567 	"
        :style="{ stroke: colors }"
      />
      <polyline
        class="st1"
        points="1117,546 898.1,546 898.1,287.2 1095.8,287.2 1095.8,396.9 909,396.9 	"
        :style="{ stroke: colors }"
      />
      <polygon
        class="st3"
        points="1489,81 1393.1,303.5 1489,526 1571,526 1571,566.3 1457,566 1368.5,360.6 1280,566 1166,566 
		1166,526 1248,526 1343.9,303.5 1248,81 1166,81 1166,41 1280,41 1368.5,246.4 1457,41 1571,41 1571,81 	"
        :style="{ fill: colors }"
      />
      <path
        class="st3"
        d="M418.1,48H341L216,565h40.8L298,394l164,1l42.3,169.9H545L418.1,48z M309.3,354L372,89h13l67,265H309.3z"
        :style="{ fill: colors }"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: ["colors"]
};
</script>
<style lang="scss">
.st1 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 42.4987;
  stroke-miterlimit: 10;
}
.st2 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 40.4839;
  stroke-miterlimit: 10;
}
.st3 {
  fill: #ffffff;
}
</style>
