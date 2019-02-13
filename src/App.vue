<template>
  <div id="app">
    <InterfacePlugin/>
  </div>
</template>

<script>
  import InterfacePlugin from "./components/InterfacePlugin";

  export default {
    name: "app",
    components: {
      InterfacePlugin
    }
  };
</script>
<style lang="sass">
  body
    height: 100vh;
    overflow: hidden;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
  #app
    border: 1px solid gray;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
</style>
