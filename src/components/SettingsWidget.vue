<template>
  <WrapperSidebar name="Настройки">
    <SettingsMenuItem v-if="editItem.type === 'menuItem'"  :item="editItem" />
  </WrapperSidebar>
</template>

<script>
  import WrapperSidebar from './WrapperSidebar';
  import SettingsMenuItem from './settingsComponents/SettingsMenuItem';
  export default {
    name: 'SettingsWidget',
    components: {
      WrapperSidebar,
      SettingsMenuItem
    },
    data() {
      return {

      }
    },
    computed: {
      editItem() {
        return this.$store.state.visio.editElement || {};
      },
    }
  };
</script>

<style lang="sass" scoped>

</style>

