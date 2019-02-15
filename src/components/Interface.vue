<template>
  <div
    class="box-interface"
    :style="{ width: `${currentSize.width}px`, height: `${currentSize.height}px` }"
  >
    <div class="interface">
      <TemplateAurora mode="develop" :data="projectData"/>
    </div>
  </div>
</template>

<script>
import TemplateAurora from './templates/Aurora/index';
  export default {
    name: 'Interface',
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
        },
      };
    },
    computed: {
      currentSize() {
        // Добавляем к размерам экрана размер отступа для правильного отображения.
        const currentSize = Object.assign({}, this.size[this.type]);
        currentSize.width = currentSize.width * this.scale / 100 + 20;
        currentSize.height = currentSize.height * this.scale / 100 + 20;
        return currentSize;
      },
      projectData() {
        return {
          name: 'Проект 1',
          menuItems: [
            { name: "Главная", templateType: 'columns', icon: "", uid: 'ca3321q'},
            { name: "Гостиная", templateType: 'columns', icon: "", uid: 'ca33222q'}
          ]
        }
      }
    }
  };
</script>

<style lang="sass" scoped>
  .box-interface
    padding: 20px;
    .interface
      border: 1px solid gray;
      box-shadow: 0px 0px 10px 10px grey;
      border-radius: 10px
      height: 100%;
</style>
