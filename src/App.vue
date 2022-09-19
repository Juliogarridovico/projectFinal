<template>
  
  <div class="container" style="padding: 50px 0 100px 0">
    <Profile v-if="store.user" />
    <Auth v-else />
    <!-- <button @click="insertar">test patata</button> -->
  </div>
  <AddTask></AddTask>
</template>

<script>
import { store } from "./store";
import { supabase } from "./supabase";
import Auth from "./components/Auth.vue";
import Profile from "./components/Profile.vue";
import AddTask from "./components/addTask.vue";

export default {
  components: {
    Auth,
    Profile,
    AddTask
},
  methods: {
    async patata() {
      let { data: tasks, error } = await supabase.from("tasks").select("*");
      console.log(tasks);
      return {
        store,
      };
    },
    async insertar() {
      const { data, error } = await supabase.from("tasks").insert([
        {
          usuarioID: this.store.user.id,
          tittle: "test Comment",
          comment: "test Comment",
          statusTask: 3,
        },
      ]);
    },
  },
  mounted() {
    this.patata();
    console.log(this.store.user.id);
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
