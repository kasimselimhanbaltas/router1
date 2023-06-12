<template>
  <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <Title>Selimhan Baltaş</Title>
  </Head>
  <div id="#app">
    <NavbarComponent></NavbarComponent>
    <div id="maincontainer">
      <router-view/>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue"
import NavbarComponent from "@/components/NavbarComponent.vue"


</script>

<style>
#maincontainer {
  min-height: 85vh;
}
#app{
  background-color: #161616;
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>