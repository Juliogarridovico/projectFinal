<template>
<main>

 <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center  bg-imgae-home">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Team #10</h1>
        <p class="lead font-weight-normal">Le presentamos nuestro proyecto</p>
        <a class="btn btn-outline-light rounded-5" href="/auth" target="_blank">Your Porfile</a>
      </div>
  </div>

  <!-- Articles -->

       <div class="row justify-content-center articles">
          <div class="col-lg-3 text-center">
            <img class="rounded-circle" src="../assets/images/gema.png" alt="Generic placeholder image" width="140" height="140">
            <h2>Gema</h2>
            <p> mujer estresada que vive en correos. Fan del jpop 🤷‍♀️	 y del metalcore y las cosas cutes</p>
            <p>Y obsesionada de Kuromi que por cierto ya la conocen todos gracias a mi.</p>
            <p><a class="btn btn-success rounded-5 btn-details" href="#" role="button">Detalles &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3 text-center">
            <img class="rounded-circle" src="../assets/images/Julio.png" alt="Generic placeholder image" width="140" height="140">
            <h2>Julio</h2>
            <p>Según me fui creciendo cree mi primer Script para Mirc, aprendí PHP, CSS, HTML, JavaScript, SQL, Powershell para administrar sistemas... hasta llegar donde estoy ahora aprendiendo NodeJS para el desarrollo web y Godot Script para la creación de videojuegos.</p>
            <p><a class="btn btn-success rounded-5 btn-details" href="#" role="button">Detalles &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3 text-center">
            <img class="rounded-circle" src="../assets/images/Rob.png" alt="Generic placeholder image" width="140" height="140">
            <h2>Robert</h2>
            <p>El secreto del éxtio lo descubrí hace poco y es: Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a class="btn btn-success rounded-5 btn-details" href="#" role="button">Detalles &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->

   
</main>
</template>
<script>

</script>
<style scoped>
.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

.bg-imgae-home{
    background-image: url("../assets/images/bg-app-hero.png");
    background-repeat: no-repeat;
    background-size: cover;
}

/* Nosotros  */

.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}

.articles{
margin-top: 60px;
}
.articles img{
margin-bottom: 20px;
}

 .articles h2, .articles p{
  color: #787796;
}

.btn-details{
  background-color: #1ec49c;
  border: none;
}

</style>
