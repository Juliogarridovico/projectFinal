<template>

  <!-- Modelo anterior -->
  <main class="container-fliud dashboard-main">

    <!-- Modal Add task -->

    <ModalAddTask/>

    <!-- Modal Edit Task -->
    <ModalEditTask />
    <div class="row justify-content-center justify-content-md-between m-0">
      <div class="d-none d-md-block col-md-1 col-lg-1 border bg-danger vh-100">
        3
      </div>
      <div class="col-12 col-md-10 p-0 m-0 h-100">
        <div class="mt-4 mb-3   text-center">
          <h2 class="board-h2">BOARD</h2> 
          <hr>
        </div>
        <div
          class="row mx-0 col-12 justify-content-center justify-content-md-start"
        >
          <BoardTemplate columnName="Column Robert" id="board-1">
            <CardTemplate id="card-1" draggable="true" />  
          </BoardTemplate>

          <BoardTemplate columnName="Column Julio" id="board-2">
             <CardTemplate id="card-4" draggable="true" />
             <CardTemplate id="card-5" draggable="true" />
          </BoardTemplate>
          
          <BoardTemplate columnName="Column Gema" id="board-3">
             <CardTemplate id="card-6" draggable="true" />
             <CardTemplate id="card-7" draggable="true" />
          </BoardTemplate>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BoardTemplate from "./BoardTemplate.vue";
import CardTemplate from "./CardTemplate.vue";
import ModalEditTask from "./ModalEditTask.vue";
import ModalAddTask from "./ModalAddTask.vue";
// import DropBoardButton from "./components/DropBoardButton.vue";

export default {
  name: "App",
  components: {
    BoardTemplate,
    CardTemplate,
    ModalEditTask,
    ModalAddTask
    // DropBoardButton
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dashboard-main{
  background-color: #f4f4f4;
  height: 100%;
  padding-bottom: 40px;
}

.flexbox {
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 768px;
  height: 100vh;

  overflow: hidden;

  margin: 0 auto;
  padding: 15px;
}

.board-h2{
    color: #a4a5b9;
}

</style>
