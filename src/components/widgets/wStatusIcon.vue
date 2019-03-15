<template>
  <WidgetWrapper :isEditElement="isEditElement" :isCanEdit="isCanEdit">
    <span slot="name">{{data.settings.name}}</span>
    <icon slot="controll" :icon="data.settings.icon" :class="iconClass" class="icon-value" />
  </WidgetWrapper>
</template>

<script>
  import WidgetWrapper from './common/WidgetWrapper';
  import widgetMixin from './common/widgetMixin';
  export default {
    name: 'wStatusIcon',
    components: {
      WidgetWrapper
    },
    props: ['data', 'isCanEdit'],
    mixins: [widgetMixin],
    data() {
      return {
        value: 1,
      };
    },
    computed: {
      iconClass() {
        let obj = '';
        if (this.value === 1) obj += 'icon-value--active'
        // if (this.value === 2)
        return obj;
      },
      currentIcon() {
        if (this.data.settings.isMultiIcon) return this.data.settings.statusIcon[this.value];
        return this.data.settings.icon
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .icon-value
    font-size: 1.2em;
  .icon-value--active
    color: goldenrod;
</style>

