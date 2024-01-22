<template>
    <section :style="sectionStyle">
        <div id="partiReseaux">
            <a href="https://github.com/MdProGithub" target="_blank"><img src="../../img/github.png" alt="icone de Github"></a>
            <a href="https://fr.linkedin.com/" target="_blank"><img src="../../img/linkedin.png" alt="icone de Linkedin"></a>
            <a href="https://m.facebook.com/" target="_blank"><img src="../../img/facebook.png" alt="icone de Facebook"></a>
        </div>
        <hr :style="hrStyle" >
        <p :style="updateText">dernière mise  jour le {{ updatedDate}}</p>
    </section>
</template>


<script setup>
import {  defineProps, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';



const props = defineProps(['updatedDate']);
console.log(props.updatedDate);



const sectionStyle = ref ({
    backgroundColor: 'black',
    margin: '0px',
    padding: '0px',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
});

const hrStyle = ref ({
    margin: '0px 10px',
    height: '10px',
});

const updateText = ref ({
    fontFamily:'Alphabet',
})
const route = ref(useRoute());

// Utilisez le hook onMounted pour s'assurer que le composant est monté
onMounted(() => {
  // Mettez à jour les styles initiaux basés sur la route actuelle
  updateStyles(route.value.path);
});

// Utilisez le hook watch pour réagir aux changements de route
watch(
  () => route.value.path,
  (newPath) => {
    // Mettez à jour les styles en fonction de la nouvelle route
    updateStyles(newPath);
  }
);

// Fonction pour mettre à jour les styles en fonction de la route
const updateStyles = (path) => {
  if (path === '/') {
    sectionStyle.value = {
        backgroundColor: 'black',
    margin: '0px',
    padding: '0px',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',  
    };
    hrStyle.value = {
    margin: '0px 10px',
    height: '10px',
    }
  } else {
    // Styles par défaut pour les autres pages
    sectionStyle.value = {
      position:'fixed',
      width:'100%',
      bottom:'0',
      backgroundColor: 'black',
      margin: '0px',
      padding: '0px',
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50px',  
    };
    hrStyle.value = {
    display: 'none',
    }
    updateText.value = {
    display:'none',
    }
    
  }
};
</script>

<style scoped>

#sectionStyle{background-color: black;
              margin: 0px;
              padding: 0px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 65px;}

#partiReseaux {display: flex;
               justify-content: center;
               gap: 10px;}

#partiReseaux img {height: 25px;
                    margin-top: 10px;
                    filter: drop-shadow(4px 3px 5px orange);}

p {margin: 0px 0px 10px;
    padding-top: 10px;
    color: white;
    text-align: center;
    text-decoration: dotted;
   }



</style>

<style>


</style>