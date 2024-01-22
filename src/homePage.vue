<template>
    <header>
      <barreMenu/>
    </header>
    <main>
      <presentationCard/>
      <creationCard/>
      <contactCard/>
    </main>
   
  </template>
  
  <script setup>
  
  import barreMenu from "./components/barreMenu.vue";
  import presentationCard from "./components/presentationCard.vue"
  import creationCard from "./components/creationCard.vue"
  import contactCard from "./components/contactCard.vue"
  
   
  
  </script>
  
  <style>
  
  body {background-color: gold;
        margin: 0%;
        padding: 0%;}
  
  html {scroll-behavior: smooth;}
  
  </style>
  