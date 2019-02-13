<template>
  <ul class="list-items">
    <draggable v-model="vidgets" :options="options">
      <li v-for="(item, index) in vidgets" :key="index">{{item.name}}</li>
    </draggable>
  </ul>
</template>

<script>
  import draggable from "vuedraggable";

  export default {
    name: "ListComponents",
    components: {
      draggable
    },
    data() {
      return {
        vidgets: [
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
    width: 300px;
    list-style: none;
    li
      border: 1px solid black;
      background-color gray
    .placeholder
      background-color: orange;
</style>

