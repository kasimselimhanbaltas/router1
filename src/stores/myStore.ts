import { defineStore } from 'pinia'
// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore('main', {
  // a function that returns a fresh state
  state: () => ({
    projects: [
      {
        projectId: 1,
        projectName: "Baltaş Auto Gallery",
    
        description: "This is my favorite project that I have completed and periodically made improvements on. While researching data for the backend of this project, I signed up for a website and obtained a CSV file with approximately 70,000 car records. Using Python, I created a table from this CSV file. The data in this table was very complex, so I used normalization techniques to create 7 tables from 1 and removed some unnecessary columns. With the Selenium module in Python, I saved approximately 10 images for each car from Google Images, totaling more than 65,000 images into my Postgres database. Initially, I used Python's pyautogui module for this image-saving process, but Selenium's ability to run in the background saved me a lot of time.",
        images: [
          "img/projectimages/c11.png",
          "img/projectimages/c12.png",
          "img/projectimages/c13.png",
          "img/projectimages/c14.png",
          "img/projectimages/c15.png",
        ],
        githubLink: "",
      },
      {
        projectId: 2,
        projectName: "Car Gallery Management System",
        description: "This project is an enhanced version of the previous project, with an improved database. Additionally, I designed a system for a car dealership and its dealers. I added many functions, such as adding and removing dealers, buying and selling cars, saving customers datas, hiring or firing employees, and more. To save a car, I created a registration screen using the car data I prepared in my previous project. When selecting a car model to register, default values are automatically filled in, and the fields that need to be changed (such as repair history or mileage for a second hand car) can be edited, speeding up the process.",
        images: [
          "img/projectimages/cc1.png",
          "img/projectimages/cc2.png",
          "img/projectimages/cc3.png",
          "img/projectimages/cc4.png",
          "img/projectimages/cc5.png",
          "img/projectimages/cc6.png",
        ],
        githubLink: "",
      },
      {
        projectId: 3,
        projectName: "Earth Info",
        description: "This is the first web project I finished. During my first internship, I learned a lot. I developed a full-stack web application and then fully dockerized the project. Initially, I created a database dump file and restored my local database inside the Postgres container. After that, I created a Postgres image. I also generated a JAR file with Maven wrapper for my backend and then used it to create a Java image. Finally, I built my Vue.js project using npm and created a Node.js image. I published all of these images on Docker Hub. Lastly, I created a docker-compose file to run all the images as containers that are connected to each other via appropriate ports.",
        images: [
          "img/projectimages/ei1.png",
          "img/projectimages/ei2.png",
        ],
        githubLink: "",
      },
      {
        projectId: 4,
        projectName: "Visual Exploration Assistant",
        description: "This project is a mobile application that my two friends and I developed during our Introduction to Artificial Intelligence course in school. Using an artificial intelligence model that covers certain objects in our campus, the app is designed to help visually impaired people by identifying and providing information on the objects they encounter while walking, such as their type, direction, and distance. To prepare the dataset for this project, we took a total of 2139 photos of objects in our school, such as doors, banks, and stairs, and manually labeled them for higher accuracy. We then integrated the labeled photos into our mobile application. To maximize the output of our model, we used the label location and size when an object is detected to provide more detailed guidance to visually impaired users.",
        images: [
          "img/projectimages/bg1.png",
          "img/projectimages/bg2.png",
          "img/projectimages/bg3.png",
          "img/projectimages/bg4.png"
        ],
        githubLink: "",
      },
    ],
    projectIndex: 0,
    imageIndex: 0,
  
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    getProjects: (state) => state.projects,
    // use getters in other getters
  },
  // optional actions
  actions: {
    // reset() {
    //   // `this` is the store instance
    //   this.counter = 0
    // },
  },
})