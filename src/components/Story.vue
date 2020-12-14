<template>
  <div class="story__pictures">
    <img src="img/h15.jpg" alt="Car" class="story__img--1" />
    <img src="img/h16.jpg" alt="Asus" class="story__img--2" />
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.story {
  &__pictures {
    // background-color: $color-primary;
    grid-column: full-start / col-end 4;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    background-image: linear-gradient(
        rgba($color-primary, 0.5),
        rgba($color-primary, 0.5)
      ),
      url("~@/assets/h12.jpg");
    // background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__img--1 {
    width: 100%;
    grid-row: 2 / 6;
    grid-column: 2 / 6;
    box-shadow: 0 2rem 5rem rgba(#000, 0.1);
  }
  &__img--2 {
    width: 115%;
    grid-row: 4 / 6;
    grid-column: 4 / 7;
    z-index: 20;
    box-shadow: 0 2rem 5rem rgba(#000, 0.2);
  }
}
</style>
