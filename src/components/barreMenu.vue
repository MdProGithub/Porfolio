<template>
   <div :style= "styleFullHeader">
      <div :style= "styleHeader">
          <a :href="generatePageLink()" >
          <img :style="styleLogo"  @click="logoOnClick" src="../../img/logo.jpg" alt="Logo d'entreprise">
          </a>
          <menu :style ="styleMenu" >
            <Transition name="bounce">
              <ul :style="styleSelecteurMenu" id="selecteurMenu" v-if="showSelector">
                <li :style="presentationLink"><a @click='presentationOnClick'>Présentation</a></li>
                <li :style="creationLink" ><a @click='creationOnClick'>Créations</a></li>                  
                <li :style="contactLink"><a @click='contactOnClick'>Contact</a></li>
              </ul>
            </Transition>
          </menu>
          <div :style="styleLogoMenu"  @click="showSelector = !showSelector">
              <img :style="rightMove" src="../../img/menu_icon.png" alt="ligne du haut de d'un icon menu">
              <img src="../../img/menu_icon.png" alt="ligne du millieu d'un icon menu">
              <img :style="leftMove" src="../../img/menu_icon.png" alt="ligne du bas de d'un icon menu">
          </div>
      </div>
      <div :style="styleTitre">
          <h1>Portfolio Web Developper</h1>
      </div>
  </div>     
</template>

<script setup>
import { ref, computed, onMounted, watch} from "vue";
import { useRoute } from 'vue-router';


// Header + languette Portfolio
 const styleFullHeader = ref({
    position: 'fixed',
    zIndex: '1',
    width: '100%',
    top: '0',
 });

// Header 
const styleHeader = ref ({
    backgroundColor: 'black',
    display: 'flex',
    padding: '1%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
});

// element logo à gauche du header
const styleLogo = ref ({
    width: '30px',
    height: '30px',
    cursor:'pointer',
});

// apres un clic sur l'element gauche du header la page remonte en haut
const logoOnClick = () => {
  document.documentElement.scrollTop = 0;
}

const presentationOnClick = () => {
  presentationLink.value.textDecoration = "underline";
  presentationLink.value.textDecorationColor = "gold";
  document.documentElement.scrollTop = 40;
  creationLink.value.textDecoration = "none";
  contactLink.value.textDecoration = "none";

}

const creationOnClick = () => {
  creationLink.value.textDecoration = "underline";
  creationLink.value.textDecorationColor = "gold";
  document.documentElement.scrollTop = 590;
  presentationLink.value.textDecoration ="none";
  contactLink.value.textDecoration = "none";
}

const contactOnClick = () => {
  contactLink.value.textDecoration = "underline";
  contactLink.value.textDecorationColor = "gold";
  document.documentElement.scrollTop = 1125;
  presentationLink.value.textDecoration ="none";
  creationLink.value.textDecoration = "none";
};



onMounted(() => {
  window.addEventListener('scroll', ()=>{
    const scroll = document.documentElement.scrollTop + 1
    // console.log(scroll)
    if (scroll>= 40 && scroll <= 200) {
      console.log('Présentation')
      presentationLink.value.textDecoration = "underline";
      presentationLink.value.textDecorationColor = "gold";
      creationLink.value.textDecoration = "none";
      contactLink.value.textDecoration = "none";
    }
    else if (scroll>= 550 && scroll <= 650)
     {
      console.log('Création')
      creationLink.value.textDecoration = "underline";
      creationLink.value.textDecorationColor = "gold";
      presentationLink.value.textDecoration ="none";
      contactLink.value.textDecoration = "none";
    }
    else if (scroll>= 1000 && scroll <= 1300){
      console.log('Contact')
      contactLink.value.textDecoration = "underline";
      contactLink.value.textDecorationColor = "gold";
      presentationLink.value.textDecoration ="none";
      creationLink.value.textDecoration = "none";
    }
    else if (scroll>= 0 && scroll <= 40) {
      presentationLink.value.textDecoration ="none";
      creationLink.value.textDecoration = "none";
      contactLink.value.textDecoration = "none";
    }

    
  });
});


const styleMenu = ref({
  paddingLeft: '0px',
  marginTop: '0px',
  marginBottom: '0px',
  display: 'flex'
});


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
    styleMenu.value = {
    display : 'flex',
    color : 'white',
    justifyContent: 'space-evenly',
    margin: '0px',
    padding: '0px',
    listStyleType: 'none', 
    gap: '10%',    
    };
    styleTitre.value = {
    color: 'black',
    margin: '0',
    backgroundColor: 'white',
    marginRight: '30%',
    marginLeft: '30%',
    border:' 0.5px solid black',
    borderRadius: '0px 0px 10px 10px',
    fontSize: 'xx-small',
    textAlign: 'center',};
    styleFullHeader.value = {
    position: 'fixed',
    zIndex: '1',
    width: '100%',
    top: '0',
    }

  } else {
    // Styles par défaut pour les autres pages
    styleMenu.value = {
      display:'none',
    };
    styleTitre.value = {
      display:'none',
    };
    styleLogoMenu.value = {
      display:'none',
    };
    styleFullHeader.value = {
      
    }
  }
};

const generatePageLink = () => {
  // Vérifiez si la route actuelle est différente de '/'
  if (route.value.path !== '/') {
    return "/";
  }
  // Si la route est '/', renvoyez null ou une chaîne vide
  return null; // ou return ''; selon vos préférences
};

const presentationLink = ref ({
  textDecoration: 'none'
})

const creationLink = ref ({
  textDecoration: 'none'
})

const contactLink = ref ({
  textDecoration: 'none'
})

// element enfant du menu dans le header
const styleSelecteurMenu = ref ({
    display : 'flex',
    color : 'white',
    justifyContent: 'space-evenly',
    margin: '0px',
    padding: '0px',
    listStyleType: 'none', 
    gap: '10%',       
    
});

const styleLogoMenu = ref ({
    width: '20px',
    height: '20px',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    cursor:'pointer',
})

// animation du bouton menu et du selecteur
const showSelector = ref (false);




const styleTitre = ref ({color: 'black',
    margin: '0',
    backgroundColor: 'white',
    marginRight: '30%',
    marginLeft: '30%',
    border:' 0.5px solid black',
    borderRadius: '0px 0px 10px 10px',
    fontSize: 'xx-small',
    textAlign: 'center',
    });

const rightMove = computed (()=>({
  transform: showSelector.value ? 'translateX(5px)': 'translateX(0px)',
  transition: 'transform 0.3s cubic-bezier(0.69, -0.6, 0.63, 1.48) 0s',
}));

const leftMove = computed (()=> ({
  transform: showSelector.value ? 'translateX(-5px)': 'translateX(0px)',
  transition: 'transform 0.3s cubic-bezier(0.69, -0.6, 0.63, 1.48) 0s', 
}));
</script>

<style scoped> 
#selecteurMenu a {
  text-decoration: none;
  color: white;
  font-family: 'Bogista';
}

#selecteurMenu a:hover {text-decoration: underline;
                        text-decoration-color: white;
                        cursor: pointer;}
h1 {margin: 4px;
    font-family: 'Cashrole';
    font-size:25px}
</style>

<style>

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.10);
  }
  100% {
    transform: scale(1);
  }
}

</style>