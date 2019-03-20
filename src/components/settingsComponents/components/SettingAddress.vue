<template>
  <el-select :value="value" @change="changeEvent" filterable>
    <ElOption v-for="(item, key) in addresses" :key="key" :label="item.name" :value="item.id">
      <div style="display: flex; justify-content: space-between; align-items: center">
        <span>{{ item.name }}</span>
        <span>{{ item.id }}</span>
      </div>
    </ElOption>
  </el-select>
</template>

<script>
  export default {
    props: ['value'],
    name: 'SettingAddress',
    computed: {
      addresses() {
        // !!! Подправить когда произойдет перенос в конфигуратор
        // return _.flatten(this.$store.state.structData.addresses.tree.elements).filter(el => el.bus === 1);
        return [
          {
            name: 'адрес',
            id: 12,
          },
          {
            name: 'адрес2',
            id: 20,
          },
        ];
      },
    },
    methods: {
      changeEvent(val) {
        this.$emit('change', val);
      },
    },
  };
</script>

