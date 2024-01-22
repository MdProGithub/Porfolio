<template>
  <header>
    <headerPage style="position: relative; z-index:2"/>
  </header>
  <main>
    <div :style="mainContent">
      <h1 style="margin-top:0">404 - Page Introuvable</h1>
      <p style="margin-top:0">Désolé, la page que vous cherchez est intouvable.</p>
      <div >
        <img style="width:120px" src="../img/erreur.png" alt="">
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref} from 'vue';
import headerPage from "./components/barreMenu.vue";

const mainContent = ref ({
  display:'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: '50%',
  bottom: '50%',
  transform: 'translateY(25%)',
  width:'100%',
})
</script>

<style scoped>
/* Styles spécifiques à la page 404 */
h1 {
  color: red;
}


</style>
