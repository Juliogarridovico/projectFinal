<template>
  <div id="navigationBar" class="container">
    <nav class="navbar fixed-top navbar-expand-sm navbar-light">
      <div class="container-fluid">
        <img
          class="d-inline-block aling-top me-5 ms-4"
          src="../assets/images/logo_expand.svg"
          width="50"
          height="50"
        />

        <button
          class="
            navbar-toggler
            d-flex d-sm-none
            flex-column
            justify-content-around
            collapsed
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="toggler-icon top-bar"></span>
          <span class="toggler-icon middle-bar"></span>
          <span class="toggler-icon bottom-bar"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarNav" style="">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a href="/" class="nav-link text-center" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item active">
              <a href="aboutus" class="nav-link text-center"> About us </a>
            </li>
            <li class="nav-item-active">
              <a href="contactus" class="nav-link text-center"> Contact us </a>
            </li>
          </ul>

          <div
            v-if="store.user"
            class="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0"
            id="login-link"
          >
            <a href="profile" class="nav-link text-center"> Profile </a>
            <img
              class="aling-top me-4 ms-3"
              id="img-user"
              src="../assets/images/user-img.png "
              width="50"
              height="50"
            />
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="margeTop"></div>
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
        // alert(error.message);
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
<style>
nav {
  background-image: linear-gradient(to right, #1ec49c, #65b6f7);
}
.navbar-light .navbar-nav .nav-link {
  color: #f9fafb;
}
#login-link {
  color: #ffffff;
}
/* animacion menu hamburguesa*/
.navbar-toggler {
  width: 20px;
  height: 20px;
  position: relative;
  transition: 0.5s ease-in-out;
}
.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbartoggler-icon:focus {
  outline: none;
  box-shadow: none;
  border: 0;
}
.navbar-toggler span {
  margin: 0;
  padding: 0;
}
.toggler-icon {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #ffffff;
  border-radius: 1px;
  opacity: 1;
  left: 0;
  transition: rotate(0deg);
  transition: 0.25s ease-in-out;
}
.middle-bar {
  margin-top: 0;
}
.navbar-toggler .top-bar {
  margin-top: 0px;
  transform: rotate(135deg);
}
.navbar-toggler .middle-bar {
  opacity: 0;
  filter: alpha(opacity=0);
}
.navbar-toggler .bottom-bar {
  margin-top: 0px;
  transform: rotate(-135deg);
}
.navbar-toggler.collapsed .top-bar {
  margin-top: -20px;
  transform: rotate(0deg);
}
.navbar-toggler.collapsed .middle-bar {
  opacity: 1;
  filter: alpha(opacity=100);
}
.navbar-toggler.collapsed .bottom-bar {
  margin-top: 20px;
  transform: rotate(0deg);
}
@media only screen and (min-width: 576px) {
  #login-link {
    border-left: 2px solid #ffffff;
    padding-left: 30px;
  }
}
@media only screen and (max-width: 576px) {
  #img-user {
    display: none !important;
  }
}
a:hover {
  border-bottom: 2px solid #ffffff !important;
  color: #ffffff !important;
}
#login-link a:hover {
  width: 100%;
  border-top: 10px;
}
.margeTop {
  height: 66px;
}
</style>