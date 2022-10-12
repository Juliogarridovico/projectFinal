<template>
  <div class="conatiner-fluid">
    <div class="modal fade" id="addingTask">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exModalLabel">Add task 🖊</h5>
            <button class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form class="d-flex flex-column justify-center" action="">
              <input
                type="text"
                class="form-control rounded-5 input-style"
                id=""
                 v-model="taskTitle"
                placeholder="Title of task"
              />
              <textarea
                class="form-control rounded-2 textarea-style mt-2"
                name=""
                id=""
                cols="40"
                rows="10"
                placeholder="Description"
                 v-model="description"
              ></textarea>
              <label class="textarea-style mt-2" for="dead-line"
                >Deadline</label
              >
              <input
                class="form-control textarea-style"
                id="dead-line"
                type="date"
                value="2022-10-01"
              />
              <div class="row justify-content-center">
                <button
                  
                  @click="insertar"
                  type="submit"
                  class="col-12 btn btn-style btn-primary rounded-5 w-50 mt-3 mx-1"
                >
                  Save
                </button>
                <button
                
                  @click="modificarTask(taskTitle, description, tarea)"
                  class="col-12 btn btn-style btn-primary rounded-5 w-50 mt-3 mx-1"
                >
                  test modificar
                </button>
                <button
                  data-bs-dismiss="modal"
                  class="col-12 btn btn-style-cancel btn-danger rounded-5 w-50 mt-3 mx-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
      description: "",
      taskTitle: "",
    };
  }, // Data variables
  computed: {}, // Computed props
  methods: {
    async borrarTask(taskTitle, description, tarea) {
      console.log(taskTitle);
      console.log(description);
      console.log(tarea);
      console.log("terea ejecutada");
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", "47");
    },
    async modificarTask(taskTitle, description, tarea) {
      console.log(taskTitle);
      console.log(description);
      console.log(tarea);
      console.log("terea modificar ejecutada");
      const { data, error } = await supabase
        .from("tasks")
        .update({ tittle: "111", comment: "222ent" })
        .eq("idd", "49");
      console.log(error);
    },
    async insertar() {
      const { data, error } = await supabase.from("tasks").insert([
        {
          usuarioID: this.store.user.id,
          tittle: this.taskTitle,
          comment: this.description,
          statusTask: 0,
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
h5 {
  color: #454749;
}

.input-style {
  background-color: #fcfcfd;
  font-size: 13px;
  height: 40px;
  border-color: #ecf0f3;
  color: #454749;
}

.textarea-style {
  background-color: #fcfcfd;
  font-size: 13px;
  border-color: #ecf0f3;
  color: #454749;
}

form p {
  color: #d9d9e5;
}

.btn-style {
  height: 40px;
  font-size: 13px;
  background-color: #1ec49c;
  border: none;
  margin: auto;
  color: white;
}
.btn-style-cancel {
  height: 40px;
  font-size: 13px;
  border: none;
  margin: auto;
  color: white;
}

.btn-style:hover {
  background-color: #23ad88 !important;
  color: white;
}
</style>
>
