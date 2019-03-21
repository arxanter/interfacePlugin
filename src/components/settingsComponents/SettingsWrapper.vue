<template functional>
  <div class="settings-item">
    <span class="settings-item__name">{{props.name}}</span>
    <div class="settings-item__content">
      <slot/>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .settings-item
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 5px
  .settings-item__content
    width: 120px;
</style>
