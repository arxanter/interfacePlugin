<template>
  <el-select :value="value" @change="changeIcon" filterable>
    <ElOption v-for="(item, key) in icons" :key="key" :label="item.name" :value="item.value">
      <div style="display: flex; justify-content: space-between; align-items: center">
        <span>{{ item.name }}</span>
        <icon :icon="item.value" style="font-size: 20px"></icon>
      </div>
    </ElOption>
  </el-select>
</template>

<script>
  export default {
    props: ['value'],
    name: 'SettingIcon',
    computed: {
      icons() {
        return this.$store.state.visio.iconsArray;
      },
    },
    methods: {
      changeIcon(val) {
        this.$emit('change', val);
      }
    },
  };
</script>

