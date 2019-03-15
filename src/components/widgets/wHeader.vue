<template>
  <div class="header-container" :class="{'widget--edit': isEditElement}">
    <BoxActionEdit v-if="viewMode !== 'production' && isCanEdit" class="container-edit" v-on="$listeners" />
    <span slot="name">{{ data.settings.name }}</span>
  </div>
</template>

<script>
  // import WidgetWrapper from './WidgetWrapper';
  import BoxActionEdit from './common/BoxActionEdit';
  import widgetMixin from './common/widgetMixin';
  export default {
    name: 'wHeader',
    components: {
      BoxActionEdit,
    },
    props: ['data', 'isCanEdit'],
    mixins: [widgetMixin],
    data() {
      return {
        value: 0,
      };
    },
  };
</script>

<style lang="stylus" scoped>
  .header-container
    position: relative;
    text-align: left;
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.9em;
    font-weight: 500;
    border-radius: 5px;
    cursor: default;
    user-select: none;
  .widget--edit
    border: 2px solid orange;
  .container-edit
    visibility: hidden;
  .header-container:hover .container-edit
    visibility: visible;
</style>

