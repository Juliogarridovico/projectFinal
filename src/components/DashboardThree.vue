<template>
  <main class="container-fliud dashboard-main">
    <!-- Modal Add task -->


    <ModalAddTask />

    <!-- <div class="row justify-content-center justify-content-md-between m-0"> -->

    <div class="col-12 col-md-10 p-0 m-0 h-100">
      <div class="mt-4 mb-4 text-center ">
        <h2 class="board-h2">PRINCIPAL BOARD</h2>

         <!-- BOTON AGREGAR TASK -->
        <button
          class="me-1 mt-2 mb-2 rounded-5 add-task-btn"
          data-bs-toggle="modal"
          data-bs-target="#addingTask"
        >
          <span>Add Task <i class="far fa-plus-square"></i></span>
        </button>

        <input class="rounded-5 bg-light input-filter" v-model="search" type="text" placeholder="Seacrh tasks">

        <hr />
      </div>
       
      <div class="row mx-0 col-12 justify-content-center mt-5">
        <BoardTemplate columnName="Backlog" id="0">
          <div
            v-for="tarea in fileteredTasks.filter((test) => test.statusTask === 0)"
            :key="tarea.id"
          >
            <card-template :id="tarea.id" :tarea-info="tarea" draggable="true">
              <!-- Modal Edit Task -->
              <slot>
                <ModalEditTask :tareaEditar="tarea" />
              </slot>
            </card-template>
          </div>
        </BoardTemplate>

        <BoardTemplate columnName="To Do" id="1">
          <div
            v-for="tarea in fileteredTasks.filter((test) => test.statusTask === 1)"
            :key="tarea.id"
          >
            <card-template
              :id="tarea.id"
              :tarea-info="tarea"
              draggable="true"
            />
          </div>
        </BoardTemplate>

        <BoardTemplate columnName="Doing" id="2">
          <div
            v-for="tarea in fileteredTasks.filter((test) => test.statusTask === 2)"
            :key="tarea.id"
          >
            <card-template
              :id="tarea.id"
              :tarea-info="tarea"
              draggable="true"
            />
          </div>
        </BoardTemplate>

        <BoardTemplate columnName="Done" id="3">
          <div
            v-for="tarea in fileteredTasks.filter((test) => test.statusTask === 3)"
            :key="tarea.id"
          >
            <card-template
              :id="tarea.id"
              :tarea-info="tarea"
              draggable="true"
            />
          </div>
        </BoardTemplate>
      </div>
    </div>
    <!-- </div> -->
  </main>
</template>
<script>
import { supabase } from "../supabase";
import { store } from "../store";
import BoardTemplate from "./BoardTemplate.vue";
import CardTemplate from "./CardTemplate.vue";
import ModalEditTask from "./ModalEditTask.vue";
import ModalAddTask from "./ModalAddTask.vue";

export default {
  name: "dashboard",
  components: {
    BoardTemplate,
    CardTemplate,
    ModalEditTask,
    ModalAddTask,
  },
  props: {}, // Props
  data() {
    return {
      mensaje: "",
      tittle: "",
      tareas: [],
      search:"",
    };
  }, // Data variables
  computed: {
    tareasEnCurso() {
      return this.tareas.filter((test) => test.statusTask === 2);
    },

    fileteredTasks() {
      return this.tareas.filter((task)=>{
          return task.tittle.toLocaleLowerCase().match(this.search.toLocaleLowerCase())
      });
    },
  }, // Computed props
  methods: {
    emitID(array) {
      this.$emit("estoEsElNombreDelEmit", array);
    },
    modificarTask(a) {
      console.log(a);
    },
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
    // this.idUnico();
  }, // Mounted hook (lifecycle)
  watch: {
    msg: function () {
      this.$root.$emit("send", "hola");
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.column-red {
  /* position: fixed; */
  height: 100vh;
}

.dashboard-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-task-btn{
  background-color: #1ec49c;
  border: none;
  max-width: 300px;
}

.add-task-btn:hover {
  background-color: #23ad88 !important;
  color: white;
}

.board-h2, hr{
  color: #787796
}

.input-filter{
  border: none;
  max-width: 300px;
  color: #787796;
  font-size: 14px;
  padding-left: 10px;
  height: 40px;
  margin-left: 5px;
}


</style>
