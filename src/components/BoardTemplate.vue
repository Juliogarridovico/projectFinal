<template>
  <div
    :id="id"
    class="board card col-10 col-lg-2 rounded-3 bg-white shadow column mx-4 mb-3"
    @dragover.prevent
    @drop.prevent="drop"
    :style="color"
  >
    <h3>{{ columnName }}</h3>
    <!-- Columna -->

    <!-- Add task -->
    <div class="mb-4 mt-1 add-task-btn border-0 border-bottom card-footer">
      <!-- <button
        class="me-1 mt-2 mb-2"
        data-bs-toggle="modal"
        data-bs-target="#addingTask"
      >
        <span>Add Task <i class="far fa-plus-square"></i></span>
      </button> -->
    </div>
    <!-- End of add task -->

    <!-- {{double}} -->
    <slot />
  </div>
</template>

<script>
import { supabase } from "../supabase";

export default {
  props: ["id", "columnName", "idCard"],
  data() {
    return {};
  },
  methods: {
    drop: async (e) => {
      const card_id = e.dataTransfer.getData("id");

      const card = document.getElementById(card_id);

      card.style.display = "block";

      e.target.appendChild(card);
      console.log(card);
      
      // alert(card.parentNode.id);

      // MODIFICACIÓN DE CARTA

      const { data, error } = await supabase
        .from("tasks")
        .update({ statusTask: card.parentNode.id })
        .eq("id", card_id);
      console.log(error);
    },
    changeStatus(idStatus) {
      console.log(idStatus);
    },
  },

  computed: {
    color() {
      const style = "border-top: 5px solid ";
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      const styleFinal = style + color;
      return styleFinal;
    },
  },

  // mounted() {
  //   this.randomColor();
  // },
};
</script>

<style scoped>
.board-column {
  height: 100vh;
  display: flex;
  align-items: flex-start;
}

.column {
  min-width: 300px;
  min-height: 100vh;
  max-width: 500px;
  height: 100%;
  padding: 30px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* border: none;
  border-top: 5px  solid;
  border: #ce7ee1; */
}

.column h3 {
  margin-top: 10px;
  text-align: left;
  font-size: 1em;
  color: #787796;
}

.add-task-btn {
  text-align: center;
  font-size: 12px;
  background-color: white;
}

.add-task-btn button {
  background-color: #1ec49c;
  border: none;
  border-radius: 20px;
}

.add-task-btn button i {
  color: white;
}

.add-task-btn button:hover {
  background-color: #23ad88;
}
</style>
