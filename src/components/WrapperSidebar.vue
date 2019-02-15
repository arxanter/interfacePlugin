<template functional>
  <section class="container">
    <header>{{props.name}}</header>
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="sass" scoped>
  .container
  header
    background-color: #303133
    line-height: 30px
    font-size: 13px
    color: #FFF
  .content
    height: calc(100% - 30px)
    overflow-x: auto;
</style>
