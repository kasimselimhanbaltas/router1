<template>
  <h4 class="text-center" style="padding-top: 9vh;">Some of my projects</h4>
  <section id="projectscontainer" class="projectscontainer text-light text-center position-relative"
    style="background-color: #161616;">
    <h5 id="project-name"> {{ selectedProject.projectName }}</h5>

    <div id="project-container" class="project-container row d-flex justify-content-center pt-5 m-0 fade-in">

      <div class="pr col-xl-6 col-md-12">
        <div class="image-container" style="transform: translateY(-7%);">
          <img class="img-fluid" :src="getSelectedImage()" alt="" id="project-image" style="max-height: 45vh;">
          <div id="btn-click" class=" my-3 d-flex justify-content-center">

            <button id="image-prev-btn" @click="updateImage(-1)" class="btn btn-primary bg-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
              </svg>
            </button>
            <span style="margin-top: auto; margin-bottom: auto; padding: 0 10px;" id="image-info">{{ store.imageIndex + 1
            }}
              / {{ store.projects[store.projectIndex].images.length }}</span>

            <button id="image-next-btn" @click="updateImage(1)" class="btn btn-primary bg-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div class="pl col-xl-4 col-md-10 text-light pe-5 pe-md-1 ms-5" style="padding-bottom: 5%;">
        <p id="project-description">{{ selectedProject.description }}</p>
        <a id="project-github" href="">{{ selectedProject.githubLink }}</a>
      </div>

    </div>
    
  </section>
  <div class="project-navigation my-3 d-flex justify-content-center col-12">
      <button @click="updateProject(-1)" id="prev-btn" class="btn btn-primary bg-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-left-short"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
        </svg>
      </button>
      <p style="display: inline; margin-top: auto; margin-bottom: auto; padding: 0 10px;" id="project-number">{{
        store.projectIndex + 1 }} / {{ store.projects.length }}</p>
      <button @click="updateProject(1)" id="next-btn" class="btn btn-primary bg-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-right-short"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </button>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/myStore";

const store = useMainStore();
let selectedProject = store.projects[store.projectIndex];
let selectedImage: string = selectedProject.images[store.imageIndex];

function getImagePath(image: string) {
  return require(`../assets/${image}`);
}

function getProjectImage() {
  return store.projects[store.projectIndex].images[store.imageIndex];
}
function getProjectTitle() {
  return store.projects[store.projectIndex].projectName;
}
function getProjectInfo() {
  return store.projects[store.projectIndex].description;
}
function updateProject(direction: number) {
  const projectContainer = document.getElementById('projectscontainer');
  if (projectContainer) {
    projectContainer.classList.add('projectFade');
    setTimeout(() => {
      store.projectIndex += direction;
      store.imageIndex = 0;
      if (store.projectIndex === -1) {
        store.projectIndex = store.projects.length - 1;
      }
      else if (store.projectIndex === store.projects.length) {
        store.projectIndex = 0;
      }
      selectedProject = store.projects[store.projectIndex]
      setTimeout(() => {
        projectContainer.classList.remove('projectFade');
      }, 300);
    }, 300);
  }

}
function updateImage(direction: number) {
  const imageContainer = document.getElementById('project-image');
  if (direction === 1 && imageContainer) {
    imageContainer.classList.add('slideRight');
    setTimeout(() => {

      store.imageIndex += direction;
      if (store.imageIndex === -1) {
        store.imageIndex = selectedProject.images.length - 1;
      }
      else if (store.imageIndex === selectedProject.images.length) {
        store.imageIndex = 0;
      }
      selectedImage = selectedProject.images[store.imageIndex];
      setTimeout(() => {
        imageContainer.classList.remove('slideRight');
      }, 300);

    }, 300);
  } else if (direction === -1 && imageContainer) {
    imageContainer.classList.add('slideLeft');
    setTimeout(() => {

      store.imageIndex += direction;
      if (store.imageIndex === -1) {
        store.imageIndex = selectedProject.images.length - 1;
      }
      else if (store.imageIndex === selectedProject.images.length) {
        store.imageIndex = 0;
      }
      selectedImage = selectedProject.images[store.imageIndex];
      setTimeout(() => {
        imageContainer.classList.remove('slideLeft');
      }, 300);
    }, 300);
  }
}


function getSelectedImage() {
  selectedImage = selectedProject.images[store.imageIndex];
  return getImagePath(selectedImage);
}


</script>

<style>
.projectFade {
  animation: projectFade .6s ease-in-out;
}
@keyframes projectFade {
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100% {
    opacity: 1
  }
}
.main-container{
  min-height: 92.5vh;
}
.slideRight {
  animation: slideRight .6s ease-in-out;
}

@keyframes slideRight {
  0% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }

  49% {
    opacity: 0;
    transform: translateX(-100px) scale(0.95);
  }

  50% {
    opacity: 0;
    transform: translateX(150px) scale(0.95);
  }

  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.slideLeft {
  animation: slideLeft .6s ease-in-out;
}

@keyframes slideLeft {
  0% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }

  49% {
    opacity: 0;
    transform: translateX(100px) scale(.95);
  }

  50% {
    opacity: 0;
    transform: translateX(-150px) scale(.95);
  }

  100% {
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
}

#project-description {
  display: block;
  text-align: left;
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

html {
  scroll-behavior: smooth;
}

.main-container {
  overflow: auto;
}

#home {
  background-color: #161616;
}

p,
h2,
a,
h4,
text {
  color: white;
}

.project-images {
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.project-card img {
  width: 300px;
}
</style>