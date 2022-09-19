<template>
  <div id="taskForm">
    <form>
      <input v-model="taskTitle" placeholder="Titulo de la tarea" />
      <textarea v-model="mensaje" placeholder="Descripcion tarea a realizar"></textarea>
    </form>
    <button @click="insertar">test patata</button>
    {{ mensaje }}
  </div>
</template>
  <script>
import { supabase } from "../supabase";
import { store } from "../store";
export default {
  name: "taskForm",
  props: {}, // Props
  data() {
    return {
      mensaje: "",
      tittle: "",
    };
  }, // Data variables
  computed: {}, // Computed props
  methods: {
    async insertar() {
      const { data, error } = await supabase.from("tasks").insert([
        {
          usuarioID: this.store.user.id,
          tittle: this.taskTitle,
          comment: this.mensaje,
          statusTask: 3,
        },
      ]);
    },
  }, // Functions
  setup() {
    store.user = supabase.auth.user();
    supabase.auth.onAuthStateChange((_, session) => {
      store.user = session.user;
    });

    return {
      store,
    };
  },
  mounted() {}, // Mounted hook (lifecycle)
};
</script>