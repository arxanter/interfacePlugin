<template>
  <div>
    <SettingsWrapper name="Имя">
      <el-input :value="item.settings.name" @input="changeSetting($event, 'name')" />
    </SettingsWrapper>
    <SettingsWrapper name="Иконка">
      <SettingIcon :value="item.settings.icon" @change="changeSetting($event, 'icon')" />
    </SettingsWrapper>
    <SettingsWrapper name="Шаблон">
      <el-select :value="item.settings.templateType" @change="changeSetting($event, 'templateType')">
        <ElOption v-for="(item, index) in templates" :key="index" :value="item.value" :label="item.label" :disabled="item.disabled"></ElOption>
      </el-select>
    </SettingsWrapper>
  </div>
</template>

<script>
  import SettingsWrapper from './SettingsWrapper';
  import SettingIcon from './components/SettingIcon';
  export default {
    name: 'SettingsMenuItem',
    props: ['item'],
    components: {
      SettingsWrapper,
      SettingIcon,
    },
    data() {
      return {
        templates: [
          {
            label: 'Колонки',
            value: 'ColumnsTemplate',
          },
          {
            label: 'Один виджет',
            value: 'SingleWidgetTemplate',
            disabled: true
          },
        ],
      };
    },
    computed: {},
    methods: {
      changeSetting(val, name) {
        const newSettings = Object.assign({}, this.item.settings);
        newSettings[name] = val;
        this.$store.commit('CHANGE_SETTINGS', newSettings);
      },
    },
  };
</script>
