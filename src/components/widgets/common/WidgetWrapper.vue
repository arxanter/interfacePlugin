<template>
  <div class="wrapper-widget" :class="{ 'widget--edit': isEditElement }">
    <div class="wrapper-widget__inline-box">
      <slot name="name" />
      <slot name="controll" />
    </div>
    <div class="wrapper-widget__box">
      <slot name="box-controll" />
    </div>
    <slot />
    <BoxActionEdit v-if="isEditable" class="container-edit" @remove="eventRemove" @settings="eventSettings" />
  </div>
</template>

<script>
  import BoxActionEdit from './BoxActionEdit';
  export default {
    components: {
      BoxActionEdit,
    },
    props: {
      isEditElement: Boolean,
      isCanEdit: {
        type: Boolean,
        default: true,
      },
    },
    name: 'WidgetWrapper',
    computed: {
      isEditable() {
        return this.$store.state.visio.mode !== 'production' && this.isCanEdit;
      },
    },
    methods: {
      eventRemove(ev) {
        if (this.$parent.$listeners.remove) this.$parent.$listeners.remove(ev);
      },
      eventSettings(ev) {
        if (this.$parent.$listeners.settings) this.$parent.$listeners.settings(ev);
      },
    },
  };
</script>


<style lang="stylus">
  .wrapper-widget
    position: relative;
    width: 100%;
    padding: 4px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid gray;
    font-size: 1.2em;
    margin-bottom: 5px;
    cursor: default;
    user-select: none;
  .widget--edit
    border: 2px solid orange;
  .wrapper-widget__inline-box
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px 2px;
    & > span
      text-overflow: ellipsis;
      overflow: hidden;
  span.el-switch__core
    width: 50px !important;
    height: 26px;
    border-radius: 13px;
    &:after
      width: 22px;
      height: 22px;
  .el-switch.is-checked .el-switch__core::after
    margin-left: -23px !important;
  .el-slider__button
    width: 18px !important;
    height: 18px !important;
  .container-edit
    visibility: hidden;
  .wrapper-widget:hover .container-edit
    visibility: visible;
</style>
