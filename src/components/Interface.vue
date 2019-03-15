<template>
  <div
    class="box-interface"
    :style="{ width: `${currentSize.width}px`, 
    height: `${currentSize.height}px`, 
    transform: transformValue }"
  >
    <div class="interface">
      <TemplateAurora mode="develop" :data="projectData"/>
    </div>
  </div>
</template>

<script>
  import TemplateAurora from "./templates/Aurora/index";
  export default {
    name: "Interface",
    components: {
      TemplateAurora
    },
    props: {
      type: {
        default: "desktop",
        type: String
      },
      template: {
        dafault: "default",
        type: String
      },
      scale: {
        type: Number
      }
    },
    data() {
      return {
        size: {
          desktop: {
            width: 1440,
            height: 1024
          },
          mobile: {
            width: 360,
            height: 640
          },
          ipad: {
            width: 768,
            height: 1024
          }
        }
      };
    },
    computed: {
      currentSize() {
        // Добавляем к размерам экрана размер отступа для правильного отображения.
        const currentSize = Object.assign({}, this.size[this.type]);
        currentSize.width = (currentSize.width * this.scale) / 100 + 20;
        currentSize.height = (currentSize.height * this.scale) / 100 + 20;
        return currentSize;
      },
      transformValue() {
        const translateX = -this.currentSize.width * (1 - this.scale / 100)/2;
        const translateY = -this.currentSize.height * (1 - this.scale / 100)/2;
        return `translate(${translateX}px,${translateY}px) scale(${this.scale / 100})`;
      },
      projectData() {
        return this.$store.state.visio.data;
      }
    }
  };
</script>

<style lang="sass" scoped>
  .box-interface
    padding: 20px;
    .interface
      border: 1px solid black;
      box-shadow: 0px 0px 10px 10px grey;
      overflow: hidden
      border-radius: 10px
      height: 100%;
</style>
