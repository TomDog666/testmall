<template>
  <div class="goods">
    <good-list-item v-for="item in goods" :key="item" :goodsItem ="item"/>
  </div>
</template>

<script>
  import GoodListItem from 'components/content/goods/GoodListItem'

  export default {
    components: {
      GoodListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>