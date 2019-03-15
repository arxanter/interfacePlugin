<template>
  <WidgetWrapper :isEditElement="isEditElement" :isCanEdit="isCanEdit">
    <span slot="name">{{data.settings.name}}</span>
    <div slot="box-controll" class="box-scenes">
      <el-button v-for="(item, index) in data.values" :key="index" :disabled="isDisabledRoot" plain>
        <div class="scene-button">
          <icon class="scene-button__icon" :icon="item.icon"></icon>
        </div>
      </el-button>
    </div>
  </WidgetWrapper>
</template>

<script>
  import WidgetWrapper from './common/WidgetWrapper';
  import widgetMixin from './common/widgetMixin';
  export default {
    name: 'wScenes',
    components: {
      WidgetWrapper,
    },
    props: ['data', 'isCanEdit'],
    mixins: [widgetMixin],
    data() {
      return {
        value: 22.5,
      };
    },
    methods: {},
  };
</script>

<style lang="stylus">
  .box-scenes
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .el-button
      padding: 3px 5px;
      font-size: 1.2em;
      border: 1px solid #808080;
      margin: 2px;
    .el-button + .el-button
      margin-left: 0;
  .scene-button
    width: 2.5em;
  .scene-button__icon
    font-size: 2em;
</style>

