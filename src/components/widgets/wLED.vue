<template>
  <WidgetWrapper :isEditElement="isEditElement" :isCanEdit="isCanEdit">
    <span slot="name">{{ data.settings.name }}</span>
    <el-switch slot="controll" v-model="value2" :disabled="isDisabledRoot"></el-switch>

    <div slot="box-controll" class="container-slider">
      <ColorSlider v-model="value3" :disabled="isDisabledRoot || !value2" @input="changeColor" />
      <SliderLabel :value="value">
        <el-slider v-model="value" @change="changeEvent" :disabled="isDisabledRoot || !value2" />
      </SliderLabel>
    </div>
  </WidgetWrapper>
</template>

<script>
  import SliderLabel from './common/SliderLabel';
  import ColorSlider from './common/ColorSlider';
  import WidgetWrapper from './common/WidgetWrapper';
  import widgetMixin from './common/widgetMixin';
  export default {
    name: 'wLED',
    components: {
      WidgetWrapper,
      SliderLabel,
      ColorSlider,
    },
    props: ['data', 'isCanEdit'],
    mixins: [widgetMixin],
    data() {
      return {
        value: 25,
        value2: 0,
        value3: [22, 22, 255],
      };
    },
    mounted() {
      // this.$root.socket.subscribeOnMessage(this.mesageEvent);
    },
    methods: {
      changeColor(value) {
        console.log(value);
      },
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
    },
  };
</script>

<style lang="stylus">
  .container-slider
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
</style>

