<template>
  <div class="box-widgets" :class="classList">
    <section class="box-widgets__column" v-for="(widgetsArray, index) in data" :key="index">
      <WidgetsColumn :value="widgetsArray" :indexColumn="index" :menuUID="menuUID"/>
    </section>
  </div>
</template>

<script>
  import WidgetsColumn from '../components/WidgetsColumn';
  export default {
    props: {
      data: Array,
      menuUID: String,
      viewMode: {
        default: '',
        type: String,
      },
    },
    name: 'ColumnsTemplate',
    components: {
      WidgetsColumn,
    },
    data() {
      return {};
    },
    computed: {
      classList() {
        return {
          mobile: this.viewMode === 'mobile',
          tablet: this.viewMode === 'tablet',
          desktop: this.viewMode === 'desktop',
        };
      },
    },
  };
</script>



<style scoped lang="stylus">
  .box-widgets
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    width: 100%;
    height: calc(100% - 40px);
    font-size: 15px;
  .box-widgets__column
    height: 100%;
    width: 30%;
    max-width: 320px;
    min-width: 220px;
    overflow-y: auto;
    overflow-x: hidden;
  .box-widgets__column + .box-widgets__column
    margin-left: 1em;
  .box-widgets.mobile
    flex-direction: column;
    height: auto;
    .box-widgets__column
      width: 90%;
      margin: 0;
    .box-widgets__column + .box-widgets__column
      margin-top: 10px;
</style>


/*
border: 1px solid gray
border-raduis: 5px
*/