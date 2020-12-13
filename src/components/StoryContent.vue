<template>
  <div class="story__content">
    <h3 class="heading-3 mb-sm">Happy Customers</h3>
    <h2 class="heading-2 heading-2--dark mb-md">
      &ldquo;The best decison of our lives&rdquo;
    </h2>
    <p class="story__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque aliquam
      distinctio provident. Voluptatum blanditiis tempora sint dicta doloremque rem odio
      accusamus nisi illum eos.
    </p>
    <button class="btn">Find Your Own Home</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.story {
  &__content {
    background-color: $color-grey-light-1;
    grid-column: col-start 5 / full-end;

    // padding: 6rem 12rem;
    padding: 6rem 8vw;

    //Centering Content using Flex Box
    /*
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    */

    //Centering content using Grid
    display: grid;
    align-content: center;
    justify-items: start;
  }

  &__text {
    font-size: 1.5rem;
    font-family: $font-display;
    font-style: italic;
    margin-bottom: 4rem;
  }
}
</style>
