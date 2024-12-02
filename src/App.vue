<template>
  <div id="app">
    <HeaderBar style="position: fixed; width: 100%; top: 0%;"></HeaderBar>
    <router-view />
    <SecFoot />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import SecFoot from './views/SecFoot.vue';
export default {
  components: { HeaderBar, SecFoot },
  name: "App",
};
</script>

<style>
@import './main.css';
#app{
  width: 100%;
}
</style>
