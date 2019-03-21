<template>
  <div>
    <SettingsWrapper name="Тип данных">
      <el-select
        :value="address.dataType"
        @change="changeEvent($event, 'dataType')"
        filterable
        :disabled="isTypeDisabled"
      >
        <ElOption v-for="(item, key) in dataTypes" :key="key" :label="item" :value="item" />
      </el-select>
    </SettingsWrapper>
    <SettingsWrapper :name="name">
      <el-select v-if="address.value !== undefined" :value="address.value" @change="changeEvent($event, 'value')" filterable clearable>
        <ElOption v-for="(item, key) in filteredAddresses" :key="key" :label="item.name" :value="item.id">
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span>{{ item.id }}</span>
            <span>{{ item.name }}</span>
          </div>
        </ElOption>
      </el-select>
    </SettingsWrapper>
    <SettingsWrapper v-if="address.status !== undefined" :name="statusName" >
      <el-select :value="address.status" @change="changeEvent($event, 'status')" filterable clearable>
        <ElOption v-for="(item, key) in filteredAddresses" :key="key" :label="item.name" :value="item.id">
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span>{{ item.id }}</span>
            <span>{{ item.name }}</span>
          </div>
        </ElOption>
      </el-select>
    </SettingsWrapper>
  </div>
</template>

<script>
  import SettingsWrapper from '../SettingsWrapper';
  export default {
    props: {
      address: Object,
      dataTypes: Array,
      name: String,
      statusName: {
        type: String,
        default: 'Адрес статуса',
      },
    },
    name: 'SettingAddress',
    components: {
      SettingsWrapper,
    },
    computed: {
      addresses() {
        // !!! Подправить когда произойдет перенос в конфигуратор
        // return _.flatten(this.$store.state.structData.addresses.tree.elements).filter(el => el.bus === 1);
        return [
          {
            name: 'адрес',
            id: 12,
            dataType: 1,
          },
          {
            name: 'адрес2',
            id: 20,
            dataType: 2,
          },
        ];
      },
      filteredAddresses() {
        return this.addresses.filter(el => {
          return el.dataType === this.address.dataType || el.dataType === null;
        });
      },
      isTypeDisabled() {
        // !!! Подправить когда произойдет перенос в конфигуратор
        /*
            let dataTypeAddress = null;
            let dataTypeStatus = null;
            if (this.address.value)
              dataTypeAddress = this.$store.state.structData.addresses.getElementByID(this.address.value).dataType;
            if (this.address.status)
              dataTypeStatus = this.$store.state.structData.addresses.getElementByID(this.address.status).dataType;
            return dataTypeBase !== null || dataTypeStatus !== null;
            */
        return false;
      },
    },
    methods: {
      changeEvent(val, name) {
        const newValue = Object.assign({}, this.address);
        newValue[name] = val;
        this.$emit('change', newValue);
      },
    },
  };
</script>

