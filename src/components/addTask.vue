<template>
  <div id="taskForm">
    <form>
      <input v-model="taskTitle" placeholder="Titulo de la tarea" />
      <textarea
        v-model="mensaje"
        placeholder="Descripcion tarea a realizar"
      ></textarea>
    </form>

    <button v-if="tarea == false" @click="insertar">test insertar</button>
    <button v-else @click="modificarTask(taskTitle, mensaje, tarea)">
      test modificar
    </button>
    {{ tarea }}
    {{ mensaje }}
  </div>
</template>
  <script>
import { supabase } from "../supabase";
import { store } from "../store";
export default {
  name: "taskForm",
  props: {
    tarea: false,
  }, // Props
  data() {
    return {
      mensaje: this.tarea.comment,

      taskTitle: this.tarea.tittle,
    };
  }, // Data variables
  computed: {}, // Computed propss
  methods: {
    async borrarTask(taskTitle, mensaje, tarea) {
      console.log("terea ejecutada");
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", "this.tarea.id");
    },
    async modificarTask(taskTitle, mensaje, tarea) {
      console.log(taskTitle);
      console.log(mensaje);
      console.log(tarea);
      console.log("terea modificar ejecutada");
      const { data, error } = await supabase
        .from("tasks")
        .update({ tittle: this.taskTitle, comment: this.mensaje })
        .eq("id", this.tarea.id);
      console.log(error);
    },
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



<style scoped>
* {
  background: #000;
}
</style>