<template>
  <div id="app">
    <base-layout>
      <router-view></router-view>
    </base-layout>
  </div>
</template>

<script>
import Layout from "./layout/MainLayout.vue";

export default {
  components: {
    "base-layout": Layout
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #292961;
}
</style>
