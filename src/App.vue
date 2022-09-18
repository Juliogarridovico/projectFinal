<template>
  test
  <div class="container" style="padding: 50px 0 100px 0">
    <Profile v-if="store.user" />
    <Auth v-else />
    <button @click="insertar">test patata</button>
  </div>
</template>

<script>
import { store } from "./store";
import { supabase } from "./supabase";
import Auth from "./components/Auth.vue";
import Profile from "./components/Profile.vue";
export default {
  components: {
    Auth,
    Profile,
  },
  methods: {
    async patata() {
      let { data: tasks, error } = await supabase.from("tasks").select("id");
      console.log(tasks);
      return {
        store,
      };
    },
    async insertar() {
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ tittle: "test titulo", comment: "test Comment" }]);
    },
  },
  mounted() {
    this.patata();
    console.log(this.store.user)
  },
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
