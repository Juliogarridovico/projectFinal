<template>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
    />
<footer>
      <div
        class="row justify-content-around text-center text-md-start"
        id="footer-container"
      >
      <hr>

        <div class="class col-md-2 text-center">
          <img
            class="mt-5"
            src="../assets/images/logo_expand.svg"
            width="70"
            height="70"
          />
          <h4 class="fw-bold ps-3 text-white">TRYLLO</h4>
        </div>
        <div class="col-md-2">
          <ul class="list-unstyled">
            <li class="fw-bold my-2 text-white">ABOUT TRYLLO</li>
            <hr class="md-3 text-white">
            <li>
              <p class="text-white">What's tryllo ?</p>
            </li>
            <li>
              <p class="text-white"><i class="bi bi-code text-white"></i> An easy place to create and share tasks with your colleagues! <i class="bi bi-code-slash text-white"></i> </p>
            </li>
          </ul>
        </div>
        <div class="col-md-2 ">
          <ul class="list-unstyled">
            <li class="fw-bold my-2 text-white"> FOUNDERS </li>
            <hr class="mb-3 text-white">
            <li id="linkdirecto">
              <a href="#" class="text-decoration-none text-white">Julio </a>
            </li>
            <li id="linkdirecto">
              <a href="#" class="text-decoration-none text-white"> Robert </a> 
            </li>
            <li id="linkdirecto">
              <a href="#" class="text-decoration-none text-white" > Gema </a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2">
          <ul class="list-unstyled" >
            <li class="fw-bold my-2 text-white"  id="footertitles">CONTACT</li>
            <hr class="mb-3 text-white">
            <li id="linkdirecto">
              <a href="https://goo.gl/maps/YRfuvQP2xiYkkSrv6" class="text-decoration-none text-white" ><i class="bi bi-house-fill text-white"></i> IronHack, BCN 08018, ES</a>
            </li>
            <li>
              <p class="text-white"><i class="bi bi-envelope-heart-fill text-white"></i> tryllo@contact.com </p>
            </li>
            <li>
              <p class="text-white"><i class="bi bi-telephone-inbound-fill text-white"></i> +34 625418221</p>
            </li>
          </ul>
        </div>
        <div>
          <br class="mb-5">
          <div class="text-center">
            <p class="text-white">&copy; 2022 Copyright <a href="#" class="text-white text-decoration-none"> All rights reserved </a> </p>
            <ul
            class="list-unstyled list-inline"
          >
            <li class="list-inline-item" id="socialmedia" >
              <a
                href="https://discord.gg/RYgYdqUa"
                class="btn-floating btn-sm text-white"
                style="font-size: 20px"
              >
                <i class="bi bi-discord me-1 fa-1x text-white"></i>
              </a>
            </li>
            <li class="list-inline-item" id="socialmedia">
              <a
                href="https://github.com/TrylloTheCat"
                class="btn-floating btn-sm text-white"
                style="font-size: 20px"
              >
                <i class="bi bi-github mx-1 fa-1x text-white"></i>
              </a>
            </li>
            <li class="list-inline-item" id="socialmedia" >
              <a
                href="https://twitter.com/tryllothecat"
                class="btn-floating btn-sm text-white"
                style="font-size: 20px"
              >
                <i class="bi bi-twitter mx-1 fa-1x text-white"></i>
              </a>
            </li>
            <li class="list-inline-item" id="socialmedia">
              <a
                href="https://www.linkedin.com/in/tryllo-the-cat-947594253/?trk=public-profile-join-page"
                class="btn-floating btn-sm"
                style="font-size: 20px"
              >
                <i class="bi bi-linkedin mx-1 fa-1x text-white"></i>
              </a>
            </li>
          </ul>
          <hr class="text-white">
          </div>
        </div>

      </div>
    </footer>
</template>
<script>
</script>
<style scoped>


 footer{
    background-image: linear-gradient(to right, #1EC49C , #65B6F7);
    color: #ffffff;
}

#socialmedia :hover {
 color:#327566 !important;
}


 #linkdirecto a:hover{
    border-bottom: 2px solid #ffffff;
    color: #ffffff !important;
 } 
</style>