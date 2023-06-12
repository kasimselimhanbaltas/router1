<template>
    <div id="home" class="fade-in">

        <section class="hero" id="home">
            <div class="introduce d-sm-flex align-items-center pt-5 pt-xl-1">
                <div class="row d-flex align-items-center justify-content-center" style="margin-right: 0px;">
                    <div class="col-xl-5 col-md-6 col-sm-9 col-10">
                        <img src="@/assets/img/campus.jpg" class="w-100 img-fluid rounded">
                    </div>
                    <div class="col-xl-5 col-md-9 col-sm-12 mb-5">
                        <div class="text-light text-center mt-3">
                            <h2>Hello, I am <span style="color: darkred">Kasım Selimhan BALTAŞ</span></h2>
                            <h4 @click="console.log('Button clicked!')">I am studying Computer Engineering <br> at Marmara
                                University.</h4>
                            <!-- <h4>I am a Front-End Developer.</h4> -->
                        </div>
                    </div>
                </div>


            </div>
        </section>
        <div class="middlesec"></div>
        <section class="about text-light text-center fade-in" id="about" style="background-color: #212529;">
            <h2 class="pt-2">What do I do?</h2>
            <div class="row m-0" style="padding: 8vh 0 0 0; margin-right: 0px;">
                <div class="col-xl-5 ps-5 col-md-12 ">
                    <h2>Profession</h2>
                    <p class="pt-3">I am developing Front-End or Full-Stack web applications. I am familiar with VueJS and
                        NuxtJS.
                        I am improving myself in Web Development. I started my web development journey with Spring Boot and
                        VueJS during my first internship.

                        Currently, I am trying to get better in NuxtJS.

                    </p>
                </div>
                <div class="skillscontainer col-xl-7 col-md-12 pb-5">
                    <h2 style="width: 100%;">My Skills</h2>

                    <div class="skills" id="skills">
                        <div v-for="skill in skillsArray" :key="skill.name" class="skillc px-1-xl px-md-5">
                            <div :title="skill.name" class="skill position-relative">
                                <img src="@/assets/img/skills/badge.png" class="myBadge" style="z-index: 5;" alt="">
                                <img class="skillImage position-absolute" :src="getImagePath(skill.image)" alt=""
                                    style="z-index: 6;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="middlesec" style="transform: rotate(180deg);"></div>
        <section class="pt-5 text-light">
            <h2 class="text-center pt-3">My projects</h2>
            <div class="d-flex flex-wrap py-5" style="justify-content: space-around;">

                <div v-for="project in store.projects" :key="project.projectId" class="m-2 py-3">
                    <div class="card text-light" style="width: 20rem;">
                        <img :src="getImagePath(project.images[0])" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.projectName }}</h5>
                            <div class="project-info">
                                <p>{{ project.description }}</p>
                            </div>
                            <div class="readmore pt-1">
                                <button @click="goToProjects(project.projectId)" class="btn btn-primary">Read More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>


    </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { useMainStore } from "@/stores/myStore";

const store = useMainStore();

function getImagePath(image: string) {
    return require(`../assets/${image}`);
}

function goToProjects(projectID: number) {
    store.projectIndex = projectID - 1;
    router.push("/projects")

}

const skillsArray = [
    { name: "VueJS", image: "img/skills/Vue.png" },
    { name: "NuxtJS", image: "img/skills/nuxt.png" },
    { name: "Spring Boot", image: "img/skills/springboot.png" },
    { name: "CSS", image: "img/skills/css.png" },
    { name: "JavaScript", image: "img/skills/js.png" },
    { name: "Java", image: "img/skills/java.png" },
    { name: "Python", image: "img/skills/python.png" },
];


</script>

<style>
.middlesec {
    height: 50px;
    background: rgb(22, 22, 22);
    background: linear-gradient(180deg, rgba(22, 22, 22, 1) 0%, rgba(33, 37, 41, 1) 35%);
}

.card {
    background-color: #212529 !important;
    overflow: hidden;
}

.card-img-top {
    aspect-ratio: 1.8;
}

.card {
    background-color: #212529 !important;
    height: 24rem;
}


.project-info p {
    height: auto;
    overflow: hidden;
    max-height: 6rem;
    height: auto;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-width: 60ch;
}

.card-body {
    overflow: hidden;
    position: relative;
}

.readmore {
    position: absolute;
    bottom: 0;
    right: 5%;
    width: 100%;
    height: 50px;
    background-color: #212529;
    align-content: center;
    align-items: center;
}

.card-body .btn {
    margin-left: auto !important;
    float: right;

}

#home {
    background-color: #161616;
}

h1 {
    color: white;
}

html {
    scroll-behavior: smooth;
}

.hero {
    height: 85vh;
}

.introduce {
    /* background-color: rgb(199, 199, 199); */
    width: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.introduce img {
    transition: transform .5s;
}

.introduce h1 {
    text-align: center;
    font-size: 35px;
    padding: 50px;
    letter-spacing: 2px;
}

.introduce h1 span {
    color: darkred;
}

.introduce h2 {
    text-align: center;
    color: white;
    font-size: 28px;
}

.introduce img:hover {
    transform: scale(1.1);
}

body {
    background-color: #212529;
}

.navbar {
    height: 7.5vh;
    background-color: #212529;
}

.nav-item img {
    height: 4vh;
}

footer {
    height: 7.5vh;
}

.skills {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.skillc {
    padding: 0 40px;
}

.skill {
    width: 100px;
    height: 110px;
    position: relative;
    padding: 0 5px;
    margin: 10px 0;
    transition: transform .5s;
}

.skill:hover {
    transform: rotate(360deg);
}

.skillImage {
    max-height: 75px;
    padding: 10px;
    padding-bottom: 30px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-40%);
}

.myBadge {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.fade-in {
    animation: fadeIn 1s;
    -webkit-animation: fadeIn 1s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>