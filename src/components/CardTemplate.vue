<template>
  <div
    :id="id"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
  >
    <!-- <slot /> -->

    <!-- CARD -->
    <div class="card mb-4 card-border-style shadow-sm">
      <div class="card-body">
        <div class="row card-title-edit">
          <h5 class="col-6 card-title">Task title</h5>
          <button
            class="col-6 edit-button rounded-3 d-flex justify-content-end me-0"
            title="edit Task"
            data-bs-toggle="modal"
            data-bs-target="#editTask"
          >
            <i class="far fa-edit"></i>

          </button>
        </div>

        <div class="subtitle">
          <h6 class="">Priority</h6>
        </div>

        <p class="card-text card-text-syle mt-3">
          Lorem ipsum dolor sit amet consectetur
        </p>

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

            <button
              type="button"
              title="Asigned"
              class="btn ms-0  rounded btn-style-card-right"
            >
              <i class="fas fa-user-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  props: ["id", "draggable"],
  methods: {
    dragStart: (e) => {
      const target = e.target;

      e.dataTransfer.setData("card_id", target.id);

      // setTimeout(()=>{
      //     target.style.display='none'
      // }, 0)

      console.log("ESTE ES EL EVENTO" + e);
    },
  },
};
</script>

<style scoped>
.card-border-style,
.card-border-style button {
  border: none;
}

.card-border-style{

  /* padding: 15px 25px;
  background-color: #f3f3f3; */

  cursor: pointer;
  margin-bottom: 15px;
}

.paragrpah{
  color: red;
}


.card-title-edit {
  display: flex;
}

.edit-button i{
  color: #a4a5b9;
}

.edit-button {
  margin: auto;
  background-color: white;
  color: #a4a5b9;
  width: 40px;
}

.edit-button:hover i{
  margin: auto;
  background-color: white;
  color: #23ad88;
}

.card-title {
  color: #454749;
  font-size: 15px;
}

.subtitle {
  display: flex;
  width: 25%;
  height: 18px;
  background-color: tomato;
  border-radius: 5px;
}

.subtitle h6 {
  margin: auto;
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
</style>
