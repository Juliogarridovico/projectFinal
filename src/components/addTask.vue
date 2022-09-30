<template>
  <div id="taskForm">
    <form>
      <input v-model="this.tarea.tittle" placeholder="Titulo de la tarea" />
      <textarea
        v-model="this.tarea.comment"
        placeholder="Descripcion tarea a realizar"
      ></textarea>
    </form>

    <button   @click="insertar">test insertar</button>
    <button @click="modificarTask(taskTitle, mensaje, tarea)">
      test modificar
    </button>
   yyyyyyyyyy {{ tarea.id }}
  </div>
</template>
  <script>
import { supabase } from "../supabase";
import { store } from "../store";
export default {
  name: "taskForm",
  props: {
    tarea: {},
  }, // Propss
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
        .update({ tittle: this.tarea.tittle, comment: this.tarea.comment })
        .eq("id", this.tarea.id);
      console.log(error);
    },
    async insertar() {
      const { data, error } = await supabase.from("tasks").insert([
        {
          usuarioID: this.store.user.id,
          tittle: this.tarea.tittle,
          comment: this.tarea.comment,
          statusTask: 3,
        },
      ]);
      console.log("insertar")
      console.log(this.tarea.comment)
    },
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
  mounted() {}, // Mounted hook (lifecycle)
};
</script>



<style scoped>
textarea{
  color: black;
}
</style>