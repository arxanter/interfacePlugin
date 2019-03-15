<template>
  <WidgetWrapper :isEditElement="isEditElement" :isCanEdit="isCanEdit">
    <span slot="name">{{data.settings.name}}</span>
    <span slot="controll" >{{value}} °</span>
    <div slot="box-controll" class="container-action">
      <el-input-number v-model="value" @focus="eventFocus" :disabled="isDisabledRoot"/>
      <div class="block-mode">
        <el-button :disabled="isDisabledRoot" plain>
          <icon icon="home"></icon>
        </el-button >
        <el-button :disabled="isDisabledRoot" plain>
          <icon icon="user"></icon>
        </el-button>
        <el-button :disabled="isDisabledRoot" plain>
          <icon icon="moon"></icon>
        </el-button>
      </div>
    </div>
  </WidgetWrapper>
</template>

<script>
  import WidgetWrapper from './common/WidgetWrapper';
  import widgetMixin from './common/widgetMixin';
  export default {
    name: 'wClimate',
    components: {
      WidgetWrapper,
    },
    props: ['data', 'isCanEdit'],
    mixins: [widgetMixin],
    data() {
      return {
        value: 23,
      };
    },
    mounted() {
      // this.$root.socket.subscribeOnMessage(this.mesageEvent);
    },
    methods: {
      eventFocus(ev) {
        ev.target.blur();
      }
    },
  };
</script>

<style lang="stylus" scoped>
.container-action
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  .block-mode
    flex-shrink: 0;
    margin-left: 5px;
  .el-button
    padding: 3px 5px;
    font-size: 1.2em;
    border: 1px solid #808080;
  .el-button + .el-button
    margin-left: 0.3em;
</style>

