<template>
    <section :style="styleSection">
        <div :style="styleCreationCard">
            <div id="partieDroite" :style="partieDroite">
                <h2>Mes Créations</h2>
                <div :style="{width : '60%',}">
                  <img :style="ampouleEffect" @click="ampouleClickedFunction" src="../../img/ampoule.png" alt="image representant une amoule" @mouseenter="isHovered = true" @mouseleave="isHovered = false">   
                </div>
            </div>
        </div> 
        
        <div  :style="styleSelecteurCreation">
           <Transition >
            <modalCDC v-if="modalYes"/>
           </Transition>
           <Transition >
            <modalCV v-if="modalYes"/>
           </Transition>
           <Transition >
            <modalEC v-if="modalYes"/>
           </Transition>
           <Transition >
            <modalForm v-if="modalYes"/>
           </Transition>         
        </div>
      
    </section>
</template>



<script setup>
 
import {ref, computed} from "vue";
import modalCDC from "./les Modales/modalCDC.vue";
import modalCV from "./les Modales/modalCV.vue";
import modalEC from "./les Modales/modalEC.vue";
import modalForm from "./les Modales/modalForm.vue";

const ampouleClicked = ref(false);
const modalYes = ref (false);

const ampouleClickedFunction = ()=> {
    if (!ampouleClicked.value) 
    {ampouleClicked.value = true
    setTimeout(() => {
    modalYes.value = true
    }, 1010);}
    else if (ampouleClicked.value) 
    {ampouleClicked.value = false
    modalYes.value = false
    }
    
}

const styleSection = ref ({
    marginTop:'95px',
    display :'flex',
    flexDirection:'row-reverse',
    gap: '20px',
    height: '29em',
});

const styleCreationCard = computed (()=>(
    {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius :  '25px',
    margin: '0px 20px 0px 20px',
    width:  '85%',
    }
));
     


const partieDroite = ref ({
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
});

const styleSelecteurCreation = computed (()=> ((
    {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: ampouleClicked.value ? '40%' : '5%',
    gap: '10px',
    backgroundColor: 'beige',
    borderRadius: '15px',
    padding: '20px 0 20px 0px',
    marginLeft: '30px',
    border: 'solid 0.5px',
    overflow: 'auto',
    transition: ampouleClicked.value ? 'width 1s cubic-bezier(1, -0.08, 1, 0.73)': 'width 1.5s cubic-bezier(0, 0.33, 1,-0.18)'
} 
)));


const isHovered = ref(false);
const ampouleEffect = computed (()=>(
    {
    opacity: ampouleClicked.value ? '1' : (isHovered.value ? '0.5' : '0.1'),
    width:'100%',
    cursor: 'pointer',
    transition: '0.7s ease-in-out',
    filter: ampouleClicked.value ? 'drop-shadow(yellow 0px 6px 30px)': 'none',
}
));

</script>



<style scoped>

h3 { 
    color: white;
    background-color: black;
    margin: 15px 0px 0px;
    padding: 2px;}

h4 {
    font-size: large;
    background-color: black;
    color: white;
    padding: 10px 14px 10px 15px;
    border-radius: 15px;
    width: max-content;
}
</style>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>