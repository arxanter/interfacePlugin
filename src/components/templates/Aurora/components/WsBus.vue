<template>
  <el-form ref="form" label-width="200px" style=" width: 800px; margin: 20px;">
    <el-form-item label="Адрес">
      <el-input-number v-model="address" placeholder="" :min="0" :max="65535" :controls="false" />
    </el-form-item>

    <el-form-item label="Тип телеграммы">
      <el-select v-model="telegramType">
        <ElOption v-for="(item, index) in telegramTypes" :key="index" :value="item.value" :label="item.label"></ElOption>
      </el-select>
    </el-form-item>
    <el-form-item label="Тип данных">
      <el-select v-model="valueType" placeholder="Тип данных" size="mini" style="width:210px">
        <el-option v-for="(item, index) in dataTypes" :key="index" :label="item.label" :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ index }}</span>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Значение">
      <div v-if="valueType === 1">
        <el-radio v-model="values[1]" :label="0">0</el-radio>
        <el-radio v-model="values[1]" :label="1">1</el-radio>
      </div>
      <el-input-number
        v-else-if="valueType === 2"
        v-model="values[2]"
        :min="0"
        :max="255"
        :step="1"
        controls-position="right"
      />
      <el-input-number
        v-else-if="valueType === 3"
        v-model="values[3]"
        :min="-127"
        :max="127"
        :step="1"
        controls-position="right"
      />
      <el-select v-else-if="valueType === 4" v-model="values[4]">
        <ElOption v-for="(item, index) in gateValues" :key="index" :value="item.value" :label="item.label"></ElOption>
      </el-select>
      <el-input-number
        v-else-if="valueType === 5"
        v-model="values[5]"
        :min="0"
        :max="65535"
        :step="1"
        controls-position="right"
      />
      <el-input-number
        v-else-if="valueType === 6"
        v-model="values[6]"
        :min="-32765"
        :max="32765"
        :step="1"
        controls-position="right"
      />
      <div v-if="valueType === 7" class="box-input">
        <span>Red</span>
        <el-input-number v-model="values[7][0]" :min="0" :max="255" controls-position="right" />
        <span>Green</span>
        <el-input-number v-model="values[7][1]" :min="0" :max="255" controls-position="right" />
        <span>Blue</span>
        <el-input-number v-model="values[7][2]" :min="0" :max="255" controls-position="right" />
      </div>
      <div v-if="valueType === 8" class="box-input">
        <span>Часы</span>
        <el-input-number v-model="values[8][0]" :min="0" :max="12" controls-position="right" />
        <span>Мин</span>
        <el-input-number v-model="values[8][1]" :min="0" :max="59" controls-position="right" />
        <span>Сек</span>
        <el-input-number v-model="values[8][2]" :min="0" :max="59" controls-position="right" />
      </div>
      <div v-if="valueType === 9" class="box-input">
        <span>День</span>
        <el-input-number v-model="values[9][0]" :min="1" :max="31" controls-position="right" />
        <span>Месяц</span>
        <el-input-number v-model="values[9][1]" :min="1" :max="12" controls-position="right" />
        <span>Год</span>
        <el-input-number v-model="values[9][2]" :min="0" :max="65535" controls-position="right" />
      </div>
      <el-input-number
        v-else-if="valueType === 10"
        v-model="values[10]"
        :min="0"
        :max="9999999999"
        :step="1"
        controls-position="right"
      />
      <el-input-number
        v-else-if="valueType === 11"
        v-model="values[11]"
        :min="-9999999999"
        :max="9999999999"
        :step="1"
        controls-position="right"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Отправить</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
  export default {
    name: 'WsBus',
    data() {
      return {
        valueType: 1,
        telegramType: 1,
        address: 0,
        gateValues: [
          {
            value: 0xf0,
            label: 'STOP',
          },
          {
            value: 0xff,
            label: 'UP',
          },
          {
            value: 0x0f,
            label: 'DOWN',
          },
        ],
        telegramTypes: [
          {
            label: 'Запись',
            value: 0,
          },
          {
            label: 'Чтение',
            value: 1,
          },
        ],
        dataTypes: [
          {
            label: 'Дискретное значение',
            info: '1 byte',
            value: 1,
          },
          {
            label: 'Беззнаковое число',
            info: '1 byte',
            value: 2,
          },
          {
            label: 'Знаковое число',
            info: '1 byte',
            value: 3,
          },
          {
            label: 'Управление',
            info: '1 byte',
            value: 4,
          },
          {
            label: 'Беззнаковое число',
            info: '2 byte',
            value: 5,
          },
          {
            label: 'Знаковое число c запятой',
            info: '4 byte',
            value: 6,
          },
          {
            label: 'HEX color',
            info: '4 byte',
            value: 7,
          },
          {
            label: 'Время и день',
            info: '4 byte',
            value: 8,
          },
          {
            label: 'Дата',
            info: '4 byte',
            value: 9,
          },
          {
            label: 'Беззнаковое число',
            info: '4 byte',
            value: 10,
          },
          {
            label: 'Знаковое число',
            info: '4 byte',
            value: 11,
          },
        ],
        values: {
          1: 1,
          2: 22,
          3: -50,
          4: 0xf0,
          5: 50,
          6: 50,
          7: [255, 255, 255],
          8: [8, 30, 0],
          9: [1, 1, 2018],
          10: 0,
          11: 0,
        },
      };
    },
    methods: {
      onSubmit() {
        const sendData = {
          address: this.address,
          dataType: this.valueType,
          telegramType: this.telegramType,
          value: this.values[this.valueType],
        };
        console.log({ type: 'telegram', data: sendData });
        this.$root.socket.send({ type: 'telegram', data: sendData });
      },
    },
  };
</script>
<style lang="stylus">
  .box-input
    display: flex;
    & > span
      margin: 5px;
</style>
