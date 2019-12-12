<template>
  <div id="app">
    <base-layout>
      <router-view></router-view>
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from "./layout/MainLayout.vue";

export default {
  components: {
    BaseLayout
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #292961;
}
</style>
