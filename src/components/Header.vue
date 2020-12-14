<template>
  <div class="header">
    <img src="img/logo.png" alt="Logo" class="header__logo" />
    <h3 class="heading-3">Your own home</h3>
    <h1 class="heading-1">The ultimate personal freedom</h1>
    <button class="btn header__btn">View our properties</button>
    <div class="header__seenon-text">Seen on</div>
    <div class="header__seenon-logos">
      <img src="img/logo1.png" alt="Seen on logo 1" />
      <img src="img/logo2.png" alt="Seen on logo 2" />
      <img src="img/logo3.png" alt="Seen on logo 3" />
      <img src="img/logo4.png" alt="Seen on logo 4" />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  background-color: $color-grey-dark-1;
  grid-column: full-start / col-end 6;
  background-image: linear-gradient(
      rgba($color-secondary, 0.93),
      rgba($color-secondary, 0.93)
    ),
    url("~@/assets/h12.jpg");
  background-size: cover;
  background-position: center;
  padding: 8rem;
  padding-top: 4rem;
  display: grid;

  grid-template-rows: 1fr min-content 6rem 1fr;
  grid-template-columns: max-content;
  grid-row-gap: 1.5rem;
  justify-content: center;
  &__logo {
    height: 3rem;
    justify-self: center;
  }
  &__btn {
    align-self: start;
    justify-self: start;
  }
  &__seenon-text {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 1.5rem;
    align-items: center;
    font-size: 1.6rem;
    color: $color-grey-light-2;

    &::before,
    &::after {
      content: "";
      height: 1px;
      display: block;
      background-color: currentColor;
    }
  }

  &__seenon-logos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 3rem;
    justify-items: center;
    img {
      height: 2.5rem;
      filter: brightness(70%);
    }
  }
}
</style>
