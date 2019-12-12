<template>
  <Card>
    <p slot="title" v-if="header">{{ title }}</p>
    <slot></slot>
  </Card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    header: Boolean
  }
};
</script>