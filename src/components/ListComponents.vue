<template>
  <WrapperSidebar name="Доступные виджеты">
    <ul class="list-items">
      <draggable v-model="widgetsList" v-bind="draggableOptions">
        <component v-for="(widget, key) in widgetsList" :key="key" :is="widget.type" :data="widget" :isCanEdit="false"/>
      </draggable>
    </ul>
  </WrapperSidebar>
</template>

<script>
  import draggable from 'vuedraggable';
  import WrapperSidebar from './WrapperSidebar';
  // UI components
  import wSwitch from '@/components/widgets/wSwitch';
  import wSlider from '@/components/widgets/wSlider';
  import wHeader from '@/components/widgets/wHeader';
  import wInputNumber from '@/components/widgets/wInputNumber';
  import wStatusValue from '@/components/widgets/wStatusValue';
  import wStatusIcon from '@/components/widgets/wStatusIcon';
  import wClimate from '@/components/widgets/wClimate';
  import wDimmer from '@/components/widgets/wDimmer';
  import wScenes from '@/components/widgets/wScenes';
  import wLED from '@/components/widgets/wLED';
  export default {
    name: 'ListComponents',
    components: {
      draggable,
      WrapperSidebar,
      wSwitch,
      wSlider,
      wHeader,
      wInputNumber,
      wStatusValue,
      wStatusIcon,
      wClimate,
      wDimmer,
      wScenes,
      wLED,
    },
    data() {
      return {
      };
    },
    computed: {
      draggableOptions() {
        return {
          disabled: this.viewMode !== 'develop',
          ghostClass: 'placeholder-draggable',
          group: 'addWidgetList',
          sort: false,
          pull: 'clone',
        };
      },
      widgetsList() {
        return this.$store.state.visio.widgetsList;
      },
    },
  };
</script>

<style scoped lang="stylus">
  ul.list-items
    list-style: none;
    margin: 5px;
    padding: 0;
    li
      border: 1px solid black;
      background-color: gray;
    .placeholder
      background-color: orange;
</style>

