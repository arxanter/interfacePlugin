<template>
  <SettingsWrapper name="Имя">
    <el-input :value="item.settings.name" @input="changeSetting($event, 'name')"></el-input>
  </SettingsWrapper>
</template>

<script>
  import SettingsWrapper from './SettingsWrapper';
  import mixinSettings from './mixins/mixinSettings';
  export default {
    name: 'wSettingsHeader',
    props: ['item'],
    mixins: [mixinSettings],
    components: {
      SettingsWrapper,
    },

  };
</script>
