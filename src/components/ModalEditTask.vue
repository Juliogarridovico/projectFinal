<template>
  <div>
    <div class="conatiner-fluid">
      <div class="modal fade" id="editTask">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exModalLabel">Edit task 🖊</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form class="d-flex flex-column justify-center" action="">
                <input
                  type="text"
                  class="form-control rounded-5 input-style"
                  id="usuario"
                  :placeholder="tareaEditar.tittle"
                />
                <textarea
                  class="form-control rounded-2 textarea-style mt-2"
                  name=""
                  id=""
                  cols="40"
                  rows="10"
                  placeholder="Description"
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
                    type="submit"
                    class="col-12 btn btn-style btn-primary rounded-5 w-50 mt-3 mx-1"
                  >
                    Save
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
  </div>
</template>

<script>
export default {
  props: {
    tareaEditar: {
    }
  },
  mounted(){
    console.log(this.tareaEditar)
    
  }
};
</script>

<style scoped>

h5{
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
