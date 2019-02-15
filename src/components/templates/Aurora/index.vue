<template>
  <div class="container">
    <MenuComponent :menuItems="data.menuItems" @change="selectMenu"></MenuComponent>
    <main></main>
  </div>
</template>

<script>
  import MenuComponent from "./MenuComponent";
  export default {
    name: "AuroraTemplate",
    components: {
      MenuComponent
    },
    props: {
      data: {
        type: Object
      },
      mode: {
        type: String,
        default: "production"
      }
    },
    data() {
      return {
        activeMenu: null,
        projectData: null
      };
    },
    computed: {},
    mounted() {
      if (this.mode === "production") {
        const init = {
          method: "POST"
        };
        fetch("/currentProject", init)
          .then(res => res.json())
          .then(data => {
            this.projectData = data;
          })
          .catch(err => {
            console.log('Что-то произошло не по плану')
          });
      } else {
        this.projectData = this.data;
      }
    },
    methods: {
      selectMenu(ev) {
        this.activeMenu = ev;
      }
    }
  };
</script>



