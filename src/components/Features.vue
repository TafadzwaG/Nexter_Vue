<template>
  <section class="features">
    <div class="feature">
      <svg class="feature__icon">
        <use xlink:href="icons/sprite.svg#icon-briefcase"></use>
      </svg>
      <h4 class="heading-4 heading-4--dark">World Best Luxury Homes</h4>
      <p class="feature__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, ullam. Lorem
        ipsum dolor sit amet.
      </p>
    </div>

    <div class="feature">
      <svg class="feature__icon">
        <use xlink:href="icons/sprite.svg#icon-spotify-with-circle"></use>
      </svg>
      <h4 class="heading-4 heading-4--dark">Play With Spotify</h4>
      <p class="feature__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, ullam.Lorem7
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </div>

    <div class="feature">
      <svg class="feature__icon">
        <use xlink:href="icons/sprite.svg#icon-map"></use>
      </svg>
      <h4 class="heading-4 heading-4--dark">Discover The World</h4>
      <p class="feature__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, ullam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolore sint commodi nihil
        mollitia et cumque dicta deleniti nobis, harum voluptates.
      </p>
    </div>

    <div class="feature">
      <svg class="feature__icon">
        <use xlink:href="icons/sprite.svg#icon-mail"></use>
      </svg>
      <h4 class="heading-4 heading-4--dark">Send To The World</h4>
      <p class="feature__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et autem
        consequuntur soluta unde nisi laborum cupiditate?
      </p>
    </div>

    <div class="feature">
      <svg class="feature__icon">
        <use xlink:href="icons/sprite.svg#icon-camera"></use>
      </svg>
      <h4 class="heading-4 heading-4--dark">Take Some Pictures</h4>
      <p class="feature__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sunt iste
        doloremque id sapiente! Voluptas sint maiores delectus iure ratione, omnis natus
        sit!
      </p>
    </div>

    <div class="feature">
      <svg class="feature__icon">
        <use xlink:href="icons/sprite.svg#icon-install"></use>
      </svg>
      <h4 class="heading-4">Make An Installment</h4>
      <p class="feature__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!
      </p>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.features {
  //   background-color: $color-grey-light-2;
  grid-column: center-start / center-end;
  margin: 15rem;
  display: grid;
  // grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 6rem;
  align-items: start;
  font-family: $font-primary;
}

.feature {
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;

  &__icon {
    fill: $color-primary;
    width: 4.5rem;
    height: 4.5rem;
    grid-row: 1 / span 2;
    transform: translateY(-1rem);
  }

  &__text {
    font-size: 1.7rem;
  }
}
</style>
