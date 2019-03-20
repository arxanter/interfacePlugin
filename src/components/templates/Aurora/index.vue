<template>
  <div class="container-template" :class="classList">
    <resize-observer @notify="checkViewMode"/>
    <MenuComponent :menuItems="data.menuItems"></MenuComponent>
    <main v-if="activeMenu" style="width: 100%">
      <WsBus v-if="activeMenu.type === 'settings'"/>
      <component
        v-else
        :is="activeMenu.settings.templateType"
        :data="activeMenu.widgets"
        :viewMode="viewMode"
        :menuUID="activeMenu.uid"
      />
    </main>
  </div>
</template>

<script>
  import MenuComponent from './components/MenuComponent';
  import ColumnsTemplate from './mainTemplates/ColumnsTemplate';
  import WsBus from './components/WsBus';
  export default {
    name: 'AuroraTemplate',
    components: {
      MenuComponent,
      ColumnsTemplate,
      WsBus,
    },
    props: {
      data: {
        type: Object,
      },
    },
    data() {
      return {
        projectData: null,
        viewMode: null,
      };
    },
    computed: {
      classList() {
        return {
          mobile: this.viewMode === 'mobile',
          tablet: this.viewMode === 'tablet',
          desktop: this.viewMode === 'desktop',
        };
      },
      activeMenu() {
        return this.$store.state.visio.activeMenu;
      }
    },
    mounted() {
      // Check current width
      this.checkViewMode();
      // Select first item menu as active
      if (this.data) this.$store.commit('SELECT_ACTIVE_MENU', this.data.menuItems[0]);
    },
    methods: {
      checkViewMode() {
        const width = this.$el.offsetWidth;
        if (width > 1024) this.viewMode = 'desktop';
        else if (width < 760) this.viewMode = 'mobile';
        else this.viewMode = 'tablet';
      },
    },
  };
</script>

<style lang="stylus">
  .container-template
    display: flex;
    position: relative;
    height: 100%;
    font-size: 12px;
    overflow: hidden;
  main
    overflow-y: auto;
  ul
    margin: 0;
    padding: 0;
    list-style: none;
  button, button:focus, button:active
    outline: none;
    border: none;
  .container-template.mobile
    font-size: 12px;
  .container-template.tablet
    font-size: 15px;
  .el-slider
    width: 100%;
  .el-slider__runway
    margin: 10px 0 !important;
</style>



