<template>
  <div class="container-btn-menu" :class="{ 'item--edit': isEditElement, 'item--active': isActive }">
    <el-button class="btn-menu" v-on="$listeners" @click="selectMenu">
      <icon :icon="item.settings.icon" class="btn-menu__icon" />
      <span class="btn-menu__name">{{ item.settings.name }}</span>
    </el-button>
    <BoxActionEdit v-if="isDevelopRoot" @remove="removeItemMenu" @settings="configItemMenu" class="container-edit"/>
  </div>
</template>

<script>
  import BoxActionEdit from '@/components/widgets/common/BoxActionEdit';
  export default {
    props: {
      item: Object,
      isEditable: {
        type: Boolean,
        default: true,
      },
      
    },
    name: 'BtnMenu',
    components: {
      BoxActionEdit,
    },
    computed: {
      viewMode() {
        return this.$store.state.visio.mode;
      },
      isDevelopRoot() {
        return this.viewMode !== 'production' && this.isEditable;
      },
      isEditElement() {
        return this.$store.state.visio.editElement === this.item;
      },
      isActive() {
        return this.$store.state.visio.activeMenu === this.item;
      }
    },
    methods: {
      removeItemMenu() {
        this.$store.commit('REMOVE_ITEM_MENU', this.item);
      },
      configItemMenu() {
        this.$store.commit('SELECT_EDIT', this.item);
      },
      selectMenu() {
        this.$store.commit('SELECT_ACTIVE_MENU', this.item);
      }
    },
  };
</script>



<style lang="stylus" scoped>
  .container-btn-menu
    position: relative;
    z-index: 100;
    margin: auto;
  .btn-menu
    font-size: 1em;
    min-height: 5.5em;
    width: 5.5em;
    padding: 0.2em 0.4em;
    background-color: transparent;
    border-radius: 1em;
    color: #FFF;
    span
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    .btn-menu__icon
      overflow: hidden;
      font-size: 3em;
    .btn-menu__name
      font-size: 0.8em;
      word-break: break-word;
      margin-top: 2px;
  .item--active > button
    border: 2px solid #409EFF;
  .item--edit > button
    border: 2px solid orange;
  .container-edit
    visibility: hidden;
  .container-btn-menu:hover .container-edit
    visibility: visible;
</style>
