<template>
  <div id="interfacePlugin">
    <SettingsWidget/>
    <Editor/>
    <ListComponents/>
  </div>
</template>

<script>
  import draggable from "vuedraggable";
  import ListComponents from "./ListComponents";
  import Editor from "./Editor";
  import SettingsWidget from "./SettingsWidget";
  export default {
    name: "InterfacePlugin",
    components: {
      ListComponents,
      Editor,
      SettingsWidget
    },
    data() {
      return {
        options: {
          group: {
            name: "column",
            put: ["list", "column"],
            pull: true
          },
          ghostClass: "placeholder"
        }
      };
    }
  };
</script>

<style lang="sass">
  #interfacePlugin
    display: grid;
    display: grid;
    grid-template-columns: 250px calc(100% - 500px) 250px;
    grid-template-rows: 100%;
    height: 100%;
  .box-settings
    .el-input__inner
      height: 20px !important;
      line-height: 20px !important;
      padding: 0 5px !important;
    .el-button
      padding: 3px 7px !important;
</style>
