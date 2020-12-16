<template>
  <div class="signup">
    <h1 class="heading-1">SignIn</h1>
    <div class="signup__form">
      <form>
        <div class="form-control">
          <label for="email" class="heading-3">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>

        <div class="form-control">
          <label for="password" class="heading-3">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>

        <base-spinner v-if="isLoading"></base-spinner>
        <button v-else class="btn btn-signup" @click.prevent="signin">SignIn</button>
      </form>
    </div>
  </div>
</template>
<script>
import BaseSpinner from "../../components/ui/BaseSpinner";
export default {
  components: { BaseSpinner },
  data() {
    return {
      email: "",
      password: "",

      formIsValid: false,
      isLoading: false,
      error: null,
    };
  },
  computed: {
    getToken() {
      return this.$store.getters.token;
    },
  },
  methods: {
    async signin() {
      this.formIsValid = true;
      if (this.email === "" || !this.email.includes("@") || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;

      const signInDetails = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("signIn", signInDetails);

        this.$router.replace("/");
      } catch (error) {
        this.isLoading = false;
        this.error = error.message || "Failed to Signin";
      }
      location.reload();
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss">
.signup {
  background-color: $color-grey-dark-1;
  grid-column: full-start / col-end 6;
  background-image: linear-gradient(
      rgba($color-secondary, 0.93),
      rgba($color-secondary, 0.93)
    ),
    url("~@/assets/h12.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  h1 {
    grid-column: 6 / span 2;
    grid-row: 2 / 3;
    text-align: center;
  }
  &__form {
    grid-row: 3 / span 2;
    grid-column: 5 / span 4;
    justify-content: center;
    margin: 2rem;
    padding: 2rem;
    background-color: $color-secondary;
    // height: auto;
  }
  .form-control {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    label {
      display: flex;
    }

    input {
      border: none;
      border-radius: 0.4rem;
      height: 3rem;
      background-color: $color-secondary 0.7;

      &:focus {
        outline: none;
        border: none;
        background-color: #ccc;
      }
    }
  }

  .btn-signup {
    margin-top: 2rem;
  }
}
</style>
