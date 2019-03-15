<template>
  <draggable v-model="widgetList" v-bind="draggableOptions" style="width:100%; height: 100%;">
    <component
      v-for="(widget, key) in widgetList"
      :key="key"
      :is="widget.type"
      :data="widget"
      :isCanEdit="true"
      @remove="eventRemove(widget)"
      @settings="eventSettings(widget)"
    />
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable';
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
    name: 'WidgetsColumn',
    props: {
      value: Array,
      indexColumn: Number,
      menuUID: String,
    },
    components: {
      draggable,
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
      return {};
    },
    computed: {
      viewMode() {
        return this.$store.state.visio.mode;
      },
      dataSendTemplate() {
        return {
          indexColumn: this.indexColumn,
          menuUID: this.menuUID,
        };
      },
      draggableOptions() {
        return {
          disabled: this.viewMode !== 'develop',
          ghostClass: 'placeholder-draggable',
          group: {
            name: 'widgets',
            put: ['widgetsList', 'widgets'],
          },
        };
      },
      widgetList: {
        get() {
          return this.value;
        },
        set(data) {
          const dataSend = Object.assign({}, this.dataSendTemplate);
          dataSend.data = data;
          this.$store.commit('REPLACE_WIDGET', dataSend);
        },
      },
    },
    methods: {
      eventRemove(widget) {
        const dataSend = Object.assign({}, this.dataSendTemplate);
        dataSend.data = widget;
        this.$store.commit('REMOVE_WIDGET', dataSend);
      },
      eventSettings(widget) {
        this.$store.commit('SELECT_EDIT', widget);
      },
    },
  };
</script>

<style lang="stylus">
  .placeholder-draggable
    background-color: #409EFF;
</style>
