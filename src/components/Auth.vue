<template>

  <div class="container">
    <div class="row justify-content-center align-items-center row-style">
      <!-- Imagen -->

      <div
        class="bg-light col-12 col-md-12 col-lg-4 d-flex flex-column align-items-center shadow-sm p-4 bg-img-style"
      >
        <img
          class="mt-4 mb-4"
          src="../assets/images/michicorporativo_2.png"
          alt="Micho"
        />
        <h3 class="text-center tryllo-cat-h3 mt-4 mb-4">Be a Tryllo Cat!</h3>
        <p class="tryllo-cat-p mt-4 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          voluptates esse? Incidunt molestiae
        </p>
      </div>

      <!-- Fin imagen -->

      <!-- Formulario -->
      <form
        @submit.prevent="handleLogin"
        class="col-12 col-lg-4 d-flex flex-column align-items-center form-style shadow ms-0"
      >
        <div
          class="base-form col-9 d-flex flex-column align-items-center rounded shadow p-3"
        >
          <div class="text-center mt-5 mb-4">
            <img
              src="../assets/images/logo-3.png"
              class="rounded h-100 logo-form"
              alt="Logo"
            />
          </div>
          <div class="inputField w-100 mb-3">
            <input
              type="email"
              class="form-control rounded-5 input-style"
              placeholder="Your email"
              v-model="email"
            />
          </div>

          <button
            type="submit"
            :value="loading ? 'Loading' : 'Send magic link'"
            :disabled="loading"
            class="btn btn-primary rounded-5 w-100"
          >
            SEND MAGIC LINK
          </button>
          <div class="w-100 d-flex justify-content-end mt-2">
            <a href="#" target="_blank" class="links-style mt-4 mb-4"
              >Need Help?</a
            >
          </div>
          <!-- <div class="create-account">
                        <p>Don’t have an account yet?</p>
                        <a href="#" target="_blank"> Create an account</a>
                    </div> -->
        </div>
      </form>
      <!-- Fin formulario -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
export default {
  setup() {
    const loading = ref(false);
    const email = ref("");
    const handleLogin = async () => {
      try {
        loading.value = true;
        const { error } = await supabase.auth.signIn({ email: email.value });
        if (error) throw error;
        alert("Check your email for the login link!");
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        loading.value = false;
      }
    };
    return {
      loading,
      email,
      handleLogin,
    };
  },
};
</script>

<style scoped>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  background-image: url("../assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
a {
  text-decoration: none;
  font-size: 13px;
}
p {
  color: #889399;
}
/* Container */
.row-style {
  margin-top: 10%;
}
/* Form  */
.form-style {
  background-color: #1ec49c;
  padding: 5rem 0;
}
.base-form {
  background-color: white;
}
.input-style {
  background-color: #fcfcfd;
  font-size: 13px;
  height: 40px;
  border-color: #ecf0f3;
  color: #454749;
}
.form-control::-webkit-input-placeholder {
  color: #889399;
  opacity: 0.3;
}
.btn {
  height: 40px;
  font-size: 13px;
  background-color: #1ec49c;
  border: none;
}
.btn:hover {
  background-color: #23ad88 !important;
}
.links-style {
  color: #889399;
}
.links-style:hover {
  color: #23ad88;
}
.create-account {
  margin: 40px 0;
  text-align: center;
  font-size: 13px;
}
/* Image */
.bg-img-style {
  background-image: url("../assets/images/bg-michu.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.tryllo-cat-h3 {
  color: #889399;
  font-weight: 300;
}
.tryllo-cat-p {
  font-weight: 300;
}
/* Media Query */
@media (max-width: 992px) {
  .row-style {
    margin-top: 0;
  }
  .tryllo-cat-h3,
  .tryllo-cat-p {
    display: none;
  }
  .bg-img-style img {
    width: 35%;
  }
}
</style>