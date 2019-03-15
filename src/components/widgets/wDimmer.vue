<template>
  <WidgetWrapper :isEditElement="isEditElement" :isCanEdit="isCanEdit">
    <span slot="name">{{data.settings.name}}</span>
    <el-switch slot="controll" v-model="value2" :disabled="isDisabledRoot"></el-switch>
    <SliderLabel slot="box-controll" :value="value">
      <el-slider
        v-model="value"
        @change="changeEvent"
        style="padding: 0 10px;"
        :disabled="isDisabledRoot || !value2"
      />
    </SliderLabel>
  </WidgetWrapper>
</template>

<script>
  import WidgetWrapper from './common/WidgetWrapper';
  import SliderLabel from './common/SliderLabel';
  import widgetMixin from './common/widgetMixin';
  export default {
    name: 'wDimmer',
    components: {
      WidgetWrapper,
      SliderLabel,
    },
    props: ['data', 'isCanEdit'],
    mixins: [widgetMixin],
    data() {
      return {
        value: 22,
        value2: 0,
      };
    },
    mounted() {
      // this.$root.socket.subscribeOnMessage(this.mesageEvent);
    },
    methods: {
      changeEvent(value) {
        const data = {
          address: this.data.settings.address,
          value,
          type: this.data.settings.type,
          mode: 1,
        };
        this.$root.socket.send(data);
      },
      mesageEvent(data) {
        if (data.address === this.data.settings.address) this.value = data.value;
      },
    },
  };
</script>

<style lang="stylus">
</style>

