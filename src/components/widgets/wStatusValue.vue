<template>
  <WidgetWrapper :isEditElement="isEditElement" :isCanEdit="isCanEdit">
    <span slot="name">{{data.settings.name}}</span>
    <span slot="controll">{{value}} {{data.settings.measure}}</span>
  </WidgetWrapper>
</template>

<script>
  import WidgetWrapper from './common/WidgetWrapper';
  import widgetMixin from './common/widgetMixin';
  export default {
    name: 'wStatusValue',
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
  };
</script>

<style lang="stylus" scoped>
</style>

