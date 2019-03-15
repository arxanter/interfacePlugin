<template>
  <WidgetWrapper :isEditElement="isEditElement" :isCanEdit="isCanEdit">
    <span slot="name">{{ data.settings.name }}</span>
    <SliderLabel :value="value">
      <el-slider v-model="value" @change="changeEvent" :disabled="isDisabledRoot" />
    </SliderLabel>
  </WidgetWrapper>
</template>

<script>
  import WidgetWrapper from './common/WidgetWrapper';
  import widgetMixin from './common/widgetMixin';
  import SliderLabel from './common/SliderLabel';
  export default {
    name: 'wSlider',
    components: {
      WidgetWrapper,
      SliderLabel,
    },
    props: ['data', 'isCanEdit'],
    mixins: [widgetMixin],
    data() {
      return {
        value: 22,
      };
    },
    mounted() {
      // this.$root.socket.subscribeOnMessage(this.mesageEvent.bind(this));
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
        if (data.address === this.data.settings.address) this.value = +data.value;
      },
    },
  };
</script>

<style lang="stylus">
</style>

