<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Profile v-if="store.user" />
    <Auth v-else />
    <!-- <button @click="insertar">test patata</button> -->
  </div>
  <AddTask></AddTask>
  <dashboard></dashboard>
</template>

<script>
import { store } from "./store";
import { supabase } from "./supabase";
import Auth from "./components/Auth.vue";
import Profile from "./components/Profile.vue";
import AddTask from "./components/addTask.vue";
import Dashboard from "./components/dashboard.vue";

export default {
  components: {
    Auth,
    Profile,
    AddTask,
    Dashboard,
  },
  method() {},

  mounted() {},
  setup() {
    store.user = supabase.auth.user();
    supabase.auth.onAuthStateChange((_, session) => {
      store.user = session.user;
    });

    return {
      store,
    };
  },
};
</script>
