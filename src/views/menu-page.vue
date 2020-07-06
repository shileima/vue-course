<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-sub-menu>
        <div slot="title">333</div>
        <a-menu-item>333-11</a-menu-item>
        <a-menu-item>333-22</a-menu-item>
        <a-sub-menu>
          <div slot="title">333-33</div>
          <a-menu-item>333-33-11</a-menu-item>
          <a-menu-item>333-33-22</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>-->
    <a-menu>
      <template v-for="(item,index) in list">
        <a-menu-item v-if="!item.children" :key="`item_${index}`">{{item.title}}</a-menu-item>
        <re-sub-menu v-else :key="`item_${index}`" :parent="item" :index="index"></re-sub-menu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import menuComponent from '_c/menu'
import ReSubMenu from './re-submenu'
const { AMenu, AMenuItem } = menuComponent

export default {
  name: 'menu_page',
  components: {
    AMenu,
    AMenuItem,
    // ASubMenu,
    ReSubMenu
  },
  data () {
    return {
      list: [
        {
          title: '1111'
        },
        {
          title: '2222'
        },
        {
          title: '3333',
          children: [
            {
              title: '3333-111'
            },
            {
              title: '3333-222'
            },
            {
              title: '3333-333',
              children: [
                {
                  title: '3333-333-11'
                },
                {
                  title: '3333-333-12',
                  children: [
                    {
                      title: '3333-333-12-1'
                    },
                    {
                      title: '3333-333-12-2'
                    },
                    {
                      title: '3333-333-12-3',
                      children: [
                        {
                          title: '3333-333-12-3-1'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less">
.menu-box {
  width: 300px;
  height: 400px;
}
div,
ul,
li {
  text-align: left;
}
</style>
