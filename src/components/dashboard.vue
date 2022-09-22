<template>
  {{ tarea }}
  <div id="dashboard">
    <button @click="consultarDashboard">test consulta</button>
    <div id="porHacer">
      <!-- {{tareas.filter(tareas.statusTask =1)}} -->
      <ul>
        <li
          v-for="tarea in tareas.filter((test) => test.statusTask === 1)"
          :key="tarea.id"
        >
          {{ tarea }}
        </li>
      </ul>
    </div>
    <div id="enCurso">
      porHacer
      <ul>
        <li
          v-for="tarea in tareas.filter((test) => test.statusTask === 2)"
          :key="tarea.id"
        >
          {{ tarea }}
        </li>
      </ul>
    </div>
    <div id="finalizado">
      finalizado
      <ul>
        <li
          v-for="tarea in tareas.filter((test) => test.statusTask === 3)"
          :key="tarea.id"
        >
          {{ tarea }}
        </li>
      </ul>
    </div>
  </div>
</template>
    <script>
import { supabase } from "../supabase";
import { store } from "../store";
export default {
  name: "dashboard",
  props: {}, // Props
  data() {
    return {
      mensaje: "",
      tittle: "",
      tareas: [],
    };
  }, // Data variables
  computed: {}, // Computed props
  methods: {
    async consultarDashboard() {
      let { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("usuarioID", store.user.id);

      this.tareas = tasks;
      return {
        store,
      };
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
  },
  mounted() {
    console.log(store.user.id);
    this.consultarDashboard();
  }, // Mounted hook (lifecycle)
};
</script>