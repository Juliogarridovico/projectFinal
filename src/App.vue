<template>
  
  <p>Count: {{ count }}</p>
  <div class="container" style="padding: 50px 0 100px 0">
    <Profile v-if="store.user" />
    <Auth v-else />
    <!-- <button @click="insertar">test patata</button> -->
  </div>
  <AddTask :tarea="modificar"></AddTask>
  <dashboard @estoEsElNombreDelEmit="creoElMetodo"  ></dashboard>
</template>

<script>
import { store } from "./store";
import { supabase } from "./supabase";
import Auth from "./components/Auth.vue";
import Profile from "./components/Profile.vue";
import AddTask from "./components/addTask.vue";
import Dashboard from "./components/dashboard.vue";

export default {
  data(){
    return{
      modificar: {
        
      } 
    }
  },
  components: {
    Auth,
    Profile,
    AddTask,
    Dashboard,
  },
  methods:{
    creoElMetodo(parametro){
      this.modificar =  parametro
      console.log(this.modificar)


    }
  },

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
