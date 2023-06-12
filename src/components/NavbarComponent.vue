<template>
  <nav id="mainNavbar" class="navbar navbar-expand-lg navbar-dark fixed-top" style="z-index: 99;">
    <div class="container-fluid">
      <a href="/" class="navbar-brand ms-5">Selimhan Baltaş</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :class="'nav-link' + isActive('')" to="/"><span> Home </span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects"  :class="'nav-link' + isActive('projects')"> <span> Projects </span> </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link disabled"  to="/"><span> Mini Game </span></router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" target="blank"
              href="https://www.linkedin.com/in/kas%C4%B1m-selimhan-balta%C5%9F-2b3832201/"><img
                src="../assets/img/linkedin.png" alt=""></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="blank" href="mailto:selimhanbaltas@gmail.com"><img src="../assets/img/gmail.png"
                alt=""></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="blank" href="https://github.com/kasimselimhanbaltas"><img
                src="../assets/img/github.png" alt=""></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">


console.log(location.pathname)
const fileName = location.pathname.split('/').pop();

function isActive(linkName: string) {

  if (fileName === linkName) {
    console.log("filename: ",fileName)
    console.log("linkname: ", linkName)
    return " active"
  }
  else return ""
}
function navbarMobile() {
  const nCollapsible = document.body.querySelector("#mainNavbar");

  if (!nCollapsible) {
    return;
  }
  if (window.scrollY === 0) {
    nCollapsible.classList.remove("navbar-mobile");
  } else {
    nCollapsible.classList.add("navbar-mobile");
  }
}
navbarMobile();
document.addEventListener("scroll", navbarMobile);


</script>

<style>
.nav-item img {
  height: 4vh;
}

.nav-link span {
  position: relative;
}

.nav-link span::before {
  position: absolute;
  content: '';
  bottom: -20%;
  left: 50%;
  background-color: white;
  height: 2px;
  width: 0;
  transition: all .3s;
}

.nav-link span:hover::before {
  width: 100%;
  left: 0%;
  bottom: -20%;
}

.show,
.collapsing {
  background: #212529;
  text-align: center;
  padding-top: 10px;
}

#mainNavbar {
  background-color: #212529;
  height: 7.5vh;
  transition: all .3s ease-in-out;
  background-color: transparent !important;
  padding-top: 2rem;
}

#mainNavbar.navbar-mobile .navbar-brand {
  font-size: 1.20em;
}

#mainNavbar.navbar-mobile {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  background-color: #212529 !important;
}
</style>