<template>
  <div class="form-area">
    <div class="container">
      <div class="single-form">
        <div class="row col-sm-12 bg-warning m-0 col-lg-6">
          <div class="left">
            <h2>
              <span>Get in touch </span><br />with TRYLLO
              <br />
            </h2>
          </div>
        </div>
        <div class="col-sm-12 col-lg-6" id="right">
          <div class="right">
            <i class="bi bi-caret-left-fill"></i>
            <form id="myForm">
              <div class="mb-3">
                <label for="exampleInputText1" class="form-label"
                  >Your Name*</label
                >
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="exampleInputText1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email*</label
                >
                <input
                  type="email"
                  class="form-control rounded-pill"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  validate="required:true"
                  pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputText1" class="form-label"
                  >Message</label
                >
                <textarea
                  class="form-control"
                  id="exampleInputText1"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-success rounded-pill ms-1">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>
<script>
// const myForm = document.getElementById("myForm");
//       myForm.addEventListener("submit", (e) => {
//         e.preventDefault();

//        alert("Form has been submitted!");
//       });
</script>

<style scoped>
body {
  background: #ffffff;
}

.form-area {
  padding-top: 7%;
  margin-bottom: 50px;
}

.single-form {
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
}

.row.single-form {
  box-shadow: 0 2px 20px -5px rgba(0, 0, 0, 0.5);
}

.left {
  background: linear-gradient(to right, #1ec49c, #65b6f7);
  padding: 200px 93px;
}

.left h2 {
  color: #ffffff;
  font-weight: 700;
  font-size: 48px;
}

.left h2 span {
  font-weight: 100;
}

.right {
  padding: 70px 100px;
  position: relative;
}

.right i {
  position: absolute;
  font-size: 80px;
  left: -12px;
  top: 40%;
  color: #ffffff;
}

.form-control {
  border: 2px solid #1ec49c;
}
/* #right{
  margin-left: 620px;
  margin-top: -500px;
} */

.right button {
  border: none;
  background: #1ec49c;
  width: 160px;
  color: #ffffff;
  padding: 15px 0;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  margin-right: 40%;
  cursor: pointer;
}

.right button:hover {
  background: #65b6f7;
}

@media (min-width: 500px) and (max-width: 991px) {
  .right i {
    top: -70px;
    margin-left: -25px;
    transform: rotate(90deg);
    left: 50%;
  }
}

@media (max-width: 991px) {
  .single-form {
    display: flex;
    flex-direction: column;
    
  }
  .right{
   width: 90%;
   padding: 10px;
    
  }

  .right i {
  display: none;
}
}

@media (min-width: 747px) and (max-width: 991px) {
  .left h2 {
    margin-left: 23%;
  }
}
</style>
