<template>
  <div :id="id" :draggable="draggable" @dragstart="dragStart" @dragover.stop>
    <!-- <slot /> -->

    <!-- CARD -->
    <div class="card mb-4 card-border-style shadow-sm">
      <div class="card-body">
        <div class="row card-title-edit">
          <h2 class="col-6 card-title">{{ tareaInfo.tittle }}</h2>

          <!-- EDIT -->
          <button
            class="col-6 edit-button rounded-3 d-flex justify-content-end me-0"
            title="edit Task"
            data-bs-toggle="modal"
            data-bs-target="#editTask"
          >
            <i class="far fa-edit"></i>
          </button>

          <!-- END OF EDIT Button -->
        </div>

        <p class="card-text card-text-syle mt-3">
          {{ tareaInfo.comment }}
        </p>

        <!-- <button v-if="tareaInfo.statusTask ==1" >Botón hermoso</button> -->
        <div class="buttons-move pb-2">
          <h4>Move to:</h4>
          <button
            @click="backlogMove(tareaInfo.id)"
            class="btn-column btn-column-1 btn btn-success rounded-5 mb-2"
          >
            Backlog
          </button>
          <button
            @click="toDoMove(tareaInfo.id)"
            class="btn-column btn-column-2 btn btn-success rounded-5 mb-2 ms-1"
          >
            To Do
          </button>
          <br />
          <button
            @click="doingMove(tareaInfo.id)"
            class="btn-column btn-column-3 btn btn-success rounded-5"
          >
            Doing
          </button>
          <button
            @click="doneMove(tareaInfo.id)"
            class="btn-column btn-column-4 btn btn-success rounded-5 ms-1"
          >
            Done
          </button>
        </div>

        <div class="row justify-content-between">
          <div class="col-4 m-0 d-flex">
            <button
              type="button"
              title="Coments"
              class="btn ms-0 rounded btn-style-card-left"
            >
              <i class="far fa-comment-alt"></i
              ><span class="text-span-style">0</span>
            </button>

            <button type="button" title="Attached" class="btn ms-0 rounded">
              <i class="fas fa-paperclip"></i
              ><span class="text-span-style">0</span>
            </button>
          </div>
          <div class="col-4 m-0 d-flex">
            <button
              type="button"
              title="Invite"
              class="btn ms-0 rounded btn-style-card-right"
            >
              <i class="fas fa-plus-circle"></i>
            </button>

            <!-- BORRAR TASK -->
            <button
              type="button"
              title="Erase Task"
              @click="erraseTask(tareaInfo.id)"
              class="btn ms-0 rounded btn-style-card-right"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <slot> </slot>
  </div>
</template>

<script>
import { supabase } from "../supabase";
import { store } from "../store";

const refresh = () => {
  location.reload();
};

export default {
  props: ["id", "draggable", "tareaInfo"],
  methods: {
    dragStart: (e) => {
      const target = e.target;

      e.dataTransfer.setData("id", target.id);


      console.log("ID DE LA CARD " + target.id);
    },
    backlogMove: async (tareaID) => {
      console.log(tareaID);

      const { data, error } = await supabase
        .from("tasks")
        .update({ statusTask: 0 })
        .eq("id", tareaID);
      console.log(error);
      refresh();
    },

    toDoMove: async (tareaID) => {
      console.log(tareaID);

      const { data, error } = await supabase
        .from("tasks")
        .update({ statusTask: 1 })
        .eq("id", tareaID);
      console.log(error);
      refresh();
    },

    doingMove: async (tareaID) => {
      console.log(tareaID);

      const { data, error } = await supabase
        .from("tasks")
        .update({ statusTask: 2 })
        .eq("id", tareaID);
      console.log(error);
      refresh();
    },
    doneMove: async (tareaID) => {
      console.log(tareaID);

      const { data, error } = await supabase
        .from("tasks")
        .update({ statusTask: 3 })
        .eq("id", tareaID);
      console.log(error);
      refresh();
       
    },

    async erraseTask(tareaID) {
       const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", tareaID);
        
        const card = document.getElementById(tareaID);
        card.style.display = "none";
    },

  },
  computed: {},
  mounted() {
    // this.refreshDashboard()
  },
};
</script>

<style scoped>
.card-border-style,
.card-border-style button {
  border: none;
}

h4 {
  font-size: 14px;
}

.card-border-style {
  /* padding: 15px 25px;
  background-color: #f3f3f3; */

  cursor: pointer;
  margin-bottom: 15px;
}

.paragrpah {
  color: red;
}

.card-title-edit {
  display: flex;
}

.edit-button i,
h4 {
  color: #a4a5b9;
}

.edit-button {
  margin: auto;
  background-color: white;
  color: #a4a5b9;
  width: 40px;
}

.edit-button:hover i {
  margin: auto;
  background-color: white;
  color: #23ad88;
}

.card-title {
  color: #454749;
  font-size: 17px;
}

.subtitle {
  display: flex;
  width: 25%;
  height: 18px;
  background-color: tomato;
  border-radius: 5px;
}

.subtitle {
  /* margin: auto; */
  color: white;
  text-align: center;
  font-size: 9px;
}

.card-text-syle {
  color: #787796;
  font-size: 12px;
}

.fa-paperclip,
.fa-comment-alt {
  margin-right: 5px;
  color: #a4a5b9;
}

.text-span-style {
  color: #a4a5b9;
}

.btn-style-card-left {
  padding-left: 0;
}

.btn-style-card-right i {
  font-size: 30px;
  color: #a4a5b9;
  transition: 0.5s;
}

.btn-style-card-right i:hover {
  color: #23ad88;
}

.btn-column {
  width: 70px;
  font-size: 9px;
}

.buttons-move :nth-child(2) {
  background-color: tomato;
}
.buttons-move :nth-child(2):hover {
  background-color: rgb(193, 19, 19);
}
/* .btn-column-2 {
  background-color: tomato;
} */
.buttons-move :nth-child(3) {
  background-color: #dec312;
}
.buttons-move :nth-child(3):hover {
  background-color: #a18d0f;
}

.btn-column-3 {
  background-color: #23ad88;
}
.btn-column-4 {
  background-color: #1aaaf8;
}
.btn-column-4:hover {
  background-color: #0f8fd4;
}
</style>
