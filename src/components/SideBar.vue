<template>
  <div class="sidebar">sidebar</div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: $color-primary;
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;
}
</style>
