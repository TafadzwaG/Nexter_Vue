<template>
  <section class="gallery">
    <figure class="gallery__item gallery__item--1">
      <img src="img/h1.jpg" alt="Gallery Image" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--2">
      <img src="img/h2.jpg" alt="Galley image 2" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--3">
      <img src="img/h3.jpg" alt="Galley image 3" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--4">
      <img src="img/h4.jpg" alt="Galley image 4" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--5">
      <img src="img/h5.jpg" alt="Galley image 5" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--6">
      <img src="img/h6.jpg" alt="Galley image 6" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--7">
      <img src="img/h7.jpg" alt="Galley image 7" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--8">
      <img src="img/h8.jpg" alt="Galley image 8" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--9">
      <img src="img/h9.jpg" alt="Galley image 9" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--10">
      <img src="img/h10.jpg" alt="Galley image 10" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--11">
      <img src="img/h11.jpg" alt="Galley image 11" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--12">
      <img src="img/h12.jpg" alt="Galley image 12" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--13">
      <img src="img/h13.jpg" alt="Galley image 13" class="gallery__img" />
    </figure>
    <figure class="gallery__item gallery__item--14">
      <img src="img/h14.webp" alt="Galley image 14" class="gallery__img" />
    </figure>
  </section>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.gallery {
  background-color: $color-grey-light-1;
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  grid-gap: 1.5rem;
  padding: 1.5rem;

  &__item {
    &--1 {
      grid-row: 1 / span 2;
      grid-column: 1 / span 2;
    }

    &--2 {
      grid-row: 1 / span 3;
      grid-column: 3 / span 3;
    }

    &--3 {
      grid-row: 1 / span 1;
      grid-column: 1 / 2;
    }

    &--3 {
      grid-row: 1 / span 2;
      grid-column: 6 / 7;
    }
    &--4 {
      grid-row: 1 / span 2;
      grid-column: 7 / -1;
    }
    &--5 {
      grid-row: 3 / span 3;
      grid-column: 1 / span 2;
    }
    &--6 {
      grid-row: 4 / span 2;
      grid-column: 3 / span 2;
    }
    &--7 {
      grid-row: 4 / 5;
      grid-column: 5 / 6;
    }
    &--8 {
      grid-row: 3 / span 2;
      grid-column: 6 / span 2;
    }
    &--9 {
      grid-row: 3 / span 3;
      grid-column: 8 / -1;
    }
    &--10 {
      grid-row: 6 / span 2;
      grid-column: 1 / 2;
    }
    &--11 {
      grid-row: 6 / span 2;
      grid-column: 2 / span 2;
    }
    &--12 {
      grid-row: 6 / span 2;
      grid-column: 4 / 5;
    }
    &--13 {
      grid-row: 5 / span 3;
      grid-column: 5 / span 3;
    }
    &--14 {
      grid-row: 6 / span 2;
      grid-column: 8 / -1;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  //Selecting All of the Child Elements
  & > * {
    width: 100%;
  }
}
</style>
