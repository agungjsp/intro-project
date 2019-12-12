<template>
  <div v-bind:style="{ padding: `25px 15px`}">
    <Breadcrumb>
      <BreadcrumbItem v-for="nav in navs" v-bind:key="nav.key" :to="nav.href">{{ nav.title }}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    navs: Array
  }
};
</script>