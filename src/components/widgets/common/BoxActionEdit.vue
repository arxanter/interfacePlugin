<template functional>
  <div :class="data.staticClass" class="box-action-edit">
      <el-button type="warning" class="btn--edit btn--settings" @click="listeners.settings" plain>
        <icon icon="cog" />
      </el-button>
      <el-button type="danger" class="btn--edit btn--remove" @click="listeners.remove" plain>
        <icon icon="trash" />
      </el-button>
  </div>
</template>

<style lang="stylus">
  .box-action-edit
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1000
    .btn--edit
      padding: 2px 4px;
      font-size: 12px;
      z-index: 10000;
    .btn--remove
      float: right;
    .btn--settings
      float: left;

</style>
