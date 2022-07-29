<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar v-show="$route.path.indexOf('detail') == -1"/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
