export default {
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
    changeSetting(val, name) {
      const newSettings = Object.assign({}, this.item.settings);
      newSettings[name] = val;
      this.$store.commit('CHANGE_SETTINGS', newSettings);
    },
  },
};
