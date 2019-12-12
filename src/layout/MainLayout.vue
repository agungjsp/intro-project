<template>
  <div class="layout">
    <Content class="cstm-container">
      <Card>
        <div class="cstm-card-content">
          <slot></slot>
        </div>
      </Card>
    </Content>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cstm-container {
  padding: 50px;
}
.cstm-card-content {
  min-height: 800px;
}
</style>