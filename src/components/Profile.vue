<template>
  <!-- <form class="form-widget" @submit.prevent="updateProfile">
    <Avatar v-model:path="avatar_url" @upload="updateProfile" />
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="store.user.email" disabled />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="website" v-model="website" />
    </div>

    <div>
      <input
        type="submit"
        class="button block primary"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block btn btn-danger3" @click="signOut" :disabled="loading">
        Sign Out
      </button>
    </div>
  </form> -->
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
        <h3 class="text-center tryllo-cat-h3 mt-4 mb-4">Welcome!!</h3>
        <p class="tryllo-cat-p mt-4 mb-4">
          We are the best tool for your task!!
        </p>
      </div>

      <!-- Fin imagen -->

      <!-- Formulario -->
      <form
        class="col-12 col-lg-4 d-flex flex-column align-items-center form-style shadow ms-0"
        @submit.prevent="updateProfile"
      >
        <div
          class="base-form col-9 d-flex flex-column align-items-center rounded shadow p-3"
        >
          <div class="text-center mt-5 mb-4">
            <!-- <img
              src="../assets/images/logo-3.png"
              class="rounded h-100 logo-form"
              alt="Logo"
            /> -->
             <Avatar v-model:path="avatar_url" @upload="updateProfile" />
          </div>

          <div class="w-100 mb-3">
            <input
              id="username"
              type="text"
              v-model="username"
              class="form-control rounded-5 input-style"
              placeholder="Your name"
            />
            
          </div>

          <div class="w-100 mb-3">
            <input
              type="email"
              class="form-control rounded-5 input-style"
              placeholder="Your email"
              :value="store.user.email"
              disabled
            />
          </div>

          <input
            type="submit"
            :value="loading ? 'Loading ...' : 'UPDATE'"
            :disabled="loading"
            class="btn btn-submit btn-update rounded-5 w-100 text-white"
          />

          <button
          id="sign-out"
            type="submit"
            @click="signOut"
            :disabled="loading"
            class="btn btn-danger rounded-5 w-100 text-white mt-3"
          >
            SIGN OUT
          </button>

          <div class="w-100 d-flex justify-content-end mt-2">
            <a href="#" target="_blank" class="links-style mt-4 mb-4"
              >Need Help?</a
            >
          </div>
        </div>
      </form>
      
      <!-- Fin formulario -->
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase";
import { store } from "../store";
import { onMounted, ref } from "vue";
import Avatar from "./Avatar.vue";

export default {
  components: {
    Avatar,
  },
  setup() {
    const loading = ref(true);
    const username = ref("");
    const website = ref("");
    const avatar_url = ref("");

    async function getProfile() {
      try {
        loading.value = true;
        store.user = supabase.auth.user();

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, website, avatar_url`)
          .eq("id", store.user.id)
          .single();

        if (error && status !== 406) throw error;

        if (data) {
          username.value = data.username;
          website.value = data.website;
          avatar_url.value = data.avatar_url;
        }
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    async function updateProfile() {
      try {
        loading.value = true;
        store.user = supabase.auth.user();

        const updates = {
          id: store.user.id,
          username: username.value,
          website: website.value,
          avatar_url: avatar_url.value,
          updated_at: new Date(),
        };

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        });

        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    async function signOut() {
      try {
        loading.value = true;
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    onMounted(() => {
      getProfile();
    });

    return {
      store,
      loading,
      username,
      website,
      avatar_url,

      updateProfile,
      signOut,
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
  background-image: url("../assets/images/bg.jpg") !important;
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

.btn-submit {
  height: 40px;
  font-size: 13px;
  background-color: #1ec49c;
  border: none;
}


#sign-out{
  background-color: rgb(183, 17, 44);
    height: 40px;
  font-size: 13px;
  border: none;
}
#sign-out:hover{
  background-color: black;
}

.btn-submit:hover {
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
