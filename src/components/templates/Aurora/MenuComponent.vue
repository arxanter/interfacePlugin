<template>
  <nav class="menu">
    <ul class="menu__list">
      <li v-for="item in menuItems" :key="item.uid" class="menu__item">
        {{item.name}}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['menuItems'],
  name: 'MenuComponent'
}
</script>

