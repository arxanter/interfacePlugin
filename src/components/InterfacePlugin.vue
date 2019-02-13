<template>
  <div id="interfacePlugin">
    <SettingsVidget/>
    <Editor/>
    <ListComponents/>
  </div>
</template>

<script>
  import draggable from "vuedraggable";
  import ListComponents from "./ListComponents";
  import Editor from "./Editor";
  import SettingsVidget from "./SettingsVidget";
  export default {
    name: "InterfacePlugin",
    components: {
      ListComponents,
      Editor,
      SettingsVidget
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
    display: flex;
    align-items: stretch;
    height: 100%;

</style>
