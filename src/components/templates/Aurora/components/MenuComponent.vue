<template>
  <nav class="menu">
    <ul class="menu__list">
      <li v-for="item in menuItems" :key="item.uid" class="menu__item">
        <BtnMenu :item="item" />
      </li>
      <li class="menu__item">
        <BtnMenu :item="btnConfig" :isEditable="false" />
      </li>
      <li v-if="isDevelopRoot" class="menu__item" @click="addItemMenu">
        <el-button class="item__btn--add" type="success">
          <icon icon="plus" />
        </el-button>
      </li>
    </ul>
  </nav>
</template>

<script>
  import BtnMenu from './BtnMenu';
  export default {
    name: 'MenuComponent',
    props: ['menuItems', 'mode'],
    components: {
      BtnMenu,
    },
    data() {
      return {
        btnConfig: {
          settings: {
            icon: 'cogs',
            name: 'Настройки',
          },
          type: 'settings',
        },
      };
    },
    computed: {
      viewMode() {
        return this.$store.state.visio.mode;
      },
      isDevelopRoot() {
        return this.viewMode !== 'production';
      },
    },
    methods: {
      addItemMenu(ev) {
        this.$store.commit('ADD_ITEM_MENU');
      },
    },
  };
</script>

<style lang="sass" scoped>
  .menu
    width: 6em;
    background-color: grey;
    height: 100%
    padding-top: 0.5em
    font-size: 1em
    flex-shrink: 0
  .menu__item
    margin: auto;
    position: relative;
  .item__btn--add
    font-size: 3em;
    padding: 0.2em 0.3em;
    border-radius: 0.5em
  .menu__item + .menu__item
    margin-top: 0.5em;
</style>
