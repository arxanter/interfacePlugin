<template functional>
  <div class="slider-box">
    <span>{{props.value}} %</span>
    <slot></slot>
  </div>
</template>
<style lang="stylus">
  .slider-box
    width: 100%;
    display: flex;
  .slider-box > span
    flex-shrink: 0;
    width: 55px;
    text-align: left;

</style>

