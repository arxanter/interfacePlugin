<template>
  <WrapperSidebar name="Настройки">
    <SettingsMenuItem v-if="editItem.type === 'menuItem'"  :item="editItem" />
    <component v-else :is="componentsSettingsList[editItem.widgetType]" :item="editItem"/>
  </WrapperSidebar>
</template>

<script>
  import WrapperSidebar from './WrapperSidebar';
  import SettingsMenuItem from './settingsComponents/SettingsMenuItem';
  import wSettingsHeader from './settingsComponents/wSettingsHeader';
  import wSettingsStatusValue from './settingsComponents/wSettingsSwitch';
  import wSettingsSwitch from './settingsComponents/wSettingsSwitch';
    
  export default {
    name: 'SettingsWidget',
    components: {
      WrapperSidebar,
      SettingsMenuItem,
      wSettingsStatusValue,
      wSettingsSwitch,
      wSettingsHeader,
      
    },
    data() {
      return {
        componentsSettingsList: {
          wHeader: 'wSettingsHeader',
          wStatusValue: 'wSettingsStatusValue',
          wSwitch: 'wSettingsSwitch',
        }
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

