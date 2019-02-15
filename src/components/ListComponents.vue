<template>
  <WrapperSidebar name="Доступные виджеты">
  <ul class="list-items">
    <draggable v-model="widgets" :options="options">
      <li v-for="(item, index) in widgets" :key="index">{{item.name}}</li>
    </draggable>
  </ul>
  </WrapperSidebar>
</template>

<script>
  import draggable from "vuedraggable";
  import WrapperSidebar from './WrapperSidebar';
  export default {
    name: "ListComponents",
    components: {
      draggable,
      WrapperSidebar
    },
    data() {
      return {
        widgets: [
          {
            name: "Item1"
          },
          {
            name: "Item2"
          },
          {
            name: "Item3"
          },
          {
            name: "Item4"
          }
        ],
        options: {
          group: {
            name: 'list',
            put: false,
            pull: 'clone',
          },
          sort: false,
          ghostClass: "placeholder"
        }
      };
    }
  };
</script>

<style scoped lang="stylus">
  ul.list-items
    list-style: none;
    margin: 0;
    padding: 0;
    li
      border: 1px solid black;
      background-color gray;
    .placeholder
      background-color: orange;
</style>

