<template>
  <section class="container editor">
    <header class="editor__settings box-settings">
      <span>Режим отображения:</span>
      <el-select v-model="activeVisualMode" style="width: 100px; margin: 0 5px">
        <el-option
          v-for="(item, index) in visualModes"
          :key="index"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span>Выбор проекта:</span>
      <el-select v-model="activeVisualMode" style="width: 100px; margin: 0 5px">
        <el-option
          v-for="(item, index) in visualModes"
          :key="index"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="primary">Добавить</el-button>
    </header>
    <div class="editor__canvas" @wheel="wheelEvent">
      <Interface :type="activeVisualMode" :scale="scale"/>
    </div>
  </section>
</template>

<script>
  import Interface from "./Interface";
  export default {
    name: "VisualEditor",
    props: ["activeWidget"],
    components: {
      Interface
    },
    data() {
      return {
        activeVisualMode: "desktop",
        activeMenu: null,
        visualModes: [
          {
            label: "Desktop",
            value: "desktop"
          },
          {
            label: "Ipad",
            value: "ipad"
          },
          {
            label: "Mobile",
            value: "mobile"
          }
        ],
        scale: 100,
      };
    },
    methods: {
      wheelEvent(ev) {
        if (ev.metaKey || ev.ctrlKey) {
          ev.preventDefault();
          if (ev.deltaY > 0 && this.scale >= 15) this.scale -= 5;
          else if (ev.deltaY < 0 && this.scale <= 95) this.scale += 5;
        }
      }
    }
  };
</script>

<style lang="sass" scoped>
  .container.editor
    width: 100%
    height: 100%
    border-left: 1px solid gray
    border-right: 1px solid gray
  header.editor__settings
    background-color: #303133
    line-height: 30px
    font-size: 13px
    color: #FFF
  .editor__canvas
    height: calc(100% - 30px);
    overflow: auto
    box-sizing: border-box;
</style>
