<template>
  <el-slider v-model="currentValue" class="el-color-slider" :disabled="disabled" :show-tooltip="false"></el-slider>
</template>

<script>
import chroma from 'chroma-js';
export default {
  name: 'ColorSlider',
  props: {
    value: Array,
    disabled: {},
  },
  computed: {
    currentValue: {
      get() {
        return chroma(this.value).hsv()[0]*100/360
      },
      set(val) {
        const res = chroma.hsv(val*360/100, 1, 1).rgb();
        this.$emit('input', res);
        this.$emit('change', res);
      }
    }
  },
}
</script>

<style lang="stylus">
  .el-color-slider .el-slider__runway
    background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    height: 10px;
    .el-slider__bar
      display: none;
    .el-slider__button-wrapper
      top: -13px;
  .el-color-slider .el-slider__runway.disabled:after
      position: absolute;
      content: "";
      background: rgba(192, 196, 204, 0.8);
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
</style>
