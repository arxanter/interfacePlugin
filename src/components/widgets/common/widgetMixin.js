export default {
  computed: {
    viewMode() {
      return this.$store.state.visio.mode;
    },
    isDisabledRoot() {
      return this.viewMode !== 'production';
    },
    isEditElement() {
        return this.$store.state.visio.editElement === this.data;
    },
  },
}