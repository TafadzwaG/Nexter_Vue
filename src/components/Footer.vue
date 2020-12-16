<template>
  <footer class="footer">
    <ul class="nav">
      <li class="nav__item">
        <a href="#" class="nav__link"> Find your dream home</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link"> Request Proposal</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link"> Download home planner</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link"> Submit Your property</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link"> Come work with us</a>
      </li>
      <li class="nav__item"><a href="#" class="nav__link"> Contact us</a></li>
    </ul>

    <p class="copyright">
      &copy; Copyright 2020 Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Quae ipsum facere dolores odio sint eos praesentium minima unde
      quam? Qui quae quasi nemo consectetur ipsa.
    </p>
  </footer>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-secondary;
  grid-column: full-start / full-end;
  padding: 8rem;
}
.nav {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  align-items: center;

  &__link:link,
  &__link:visited {
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    font-family: $font-display;
    text-transform: uppercase;
    text-align: center;
    padding: 1.5rem;
    display: block;
    transition: all 0.2s;
  }

  &__link:hover,
  &__link:active {
    background-color: rgba(#fff, 0.05);
    transform: translateY(-3px);
  }
}

.copyright {
  font-size: 1.4rem;
  color: $color-grey-light-2;
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 70%;
}
</style>
