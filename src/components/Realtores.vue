<template>
  <div class="realtors">
    <h3 class="heading-3">Top 3 Realtors</h3>
    <div class="realtors__list">
      <img src="img/r1.jpg" alt="r1" class="realtors__img" />
      <div class="realtors__details">
        <h4 class="heading-4 heading-4--light">Ruben Dias</h4>
        <p class="realtors__sold">456 houses sold</p>
      </div>

      <img src="img/r2.jpg" alt="r2" class="realtors__img" />
      <div class="realtors__details">
        <h4 class="heading-4 heading-4--light">Tania Balde</h4>
        <p class="realtors__sold">256 houses sold</p>
      </div>

      <img src="img/r5.jpg" alt="r3" class="realtors__img" />
      <div class="realtors__details">
        <h4 class="heading-4 heading-4--light">Nerdilicious Grey</h4>
        <p class="realtors__sold">756 houses sold</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.realtors {
  background-color: $color-secondary;
  grid-column: col-start 7 / full-end;
  padding: 3rem;

  display: grid;
  align-content: center;
  justify-content: center;
  grid-row-gap: 2rem;
  justify-items: center;

  &__list {
    display: grid;
    grid-template-columns: min-content max-content;
    grid-column-gap: 2rem;
    grid-row-gap: 5vh;
    align-items: center;
  }
  &__img {
    width: 7rem;
    border-radius: 50%;
    display: block;
  }
  &__sold {
    text-transform: uppercase;
    color: $color-grey-light-2;
    margin-top: -3px;
  }
}
</style>
