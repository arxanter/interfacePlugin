<template>
  <WidgetWrapper :isEditElement="isEditElement" :isCanEdit="isCanEdit">
    <span slot="name">{{data.settings.name}}</span>
    <el-input-number
      slot="controll"
      v-model="value"
      @change="changeEvent"
      @focus="eventFocus"
      :disabled="isDisabledRoot"
      show-input
    />
  </WidgetWrapper>
</template>

<script>
  import WidgetWrapper from './common/WidgetWrapper';
  import widgetMixin from './common/widgetMixin';
  export default {
    name: 'wInputNumber',
    components: {
      WidgetWrapper,
    },
    props: ['data', 'isCanEdit'],
    mixins: [widgetMixin],
    data() {
      return {
        value: 22,
      };
    },
    mounted() {
      // this.$root.socket.subscribeOnMessage(this.mesageEvent);
    },
    methods: {
      changeEvent(value) {
        const data = {
          type: 'telegram',
          data: {
            address: this.data.settings.address,
            value,
            type: this.data.settings.type,
            mode: 1,
          },
        };
        this.$root.socket.send(data);
      },
      mesageEvent(data) {
        if (data.address === this.data.settings.address) this.value = data.value;
      },
      eventFocus(ev) {
        ev.target.blur();
      },
    },
  };
</script>

<style lang="stylus">
  .el-input-number
    min-width: 100px;
</style>

