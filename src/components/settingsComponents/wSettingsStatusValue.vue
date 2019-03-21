<template>
  <div>
    <SettingsWrapper name="Имя">
      <el-input :value="item.settings.name" @input="changeSetting($event, 'name')"></el-input>
    </SettingsWrapper>
    <SettingAddress
      :address="item.settings.address"
      name="Адрес управ."
      :dataTypes="dataTypes"
      @change="changeSetting($event, 'address')"
    />
  </div>
</template>

<script>
  import SettingsWrapper from './SettingsWrapper';
  import SettingAddress from './components/SettingAddress';
  import mixinSettings from './mixins/mixinSettings';
  export default {
    name: 'wSettingsStatusValue',
    props: ['item'],
    mixins: [mixinSettings],
    components: {
      SettingsWrapper,
      SettingAddress,
    },
    data() {
      return {
        dataTypes: [1, 2],
      };
    },
  };
</script>
