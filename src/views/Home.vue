<template>
  <div class="container">
    <side-bar></side-bar>
    <Header></Header>
    <Realtores></Realtores>
    <Features></Features>
    <Story></Story>
    <StoryContent></StoryContent>
    <Homes></Homes>
    <Gallery></Gallery>
    <Footer></Footer>
  </div>
</template>
<script>
import SideBar from "../components/SideBar.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Features from "../components/Features.vue";
import Gallery from "../components/Gallery.vue";
import Homes from "../components/Homes.vue";
import Realtores from "../components/Realtores.vue";
import Story from "../components/Story.vue";
import StoryContent from "../components/StoryContent.vue";

export default {
  components: {
    SideBar,
    Header,
    Footer,
    Features,
    Homes,
    Gallery,
    Realtores,
    Story,
    StoryContent,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,300&family=Nunito:ital,wght@1,300&display=swap");
.container {
  display: grid;
  grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
  font-family: $font-display;
}
</style>
