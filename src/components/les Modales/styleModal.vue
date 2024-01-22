<template>
  <div @click="showModal = !showModal" :style="elementStyle" @mouseenter="isHoveredElement = true" @mouseleave="isHoveredElement = false">
    <div style="padding: 23px">
      <img style="width: 100%" :src="computedImgElement" :alt="computedAltElement">
    </div>
    <div>
      <div style="display: flex; justify-content: center;background: black;">
        <h3 :style="titleStyle" v-html="computedTitle"></h3>
      </div>
    </div>

    <Teleport to="#modal" :disabled="false">
      <Transition name="slide-fade">
      <div :style="modalContainer" v-if="showModal" @click="closeModals">
        <div :style="modal" @click.stop>
          
            <div :style="childCenter">
              <h4 :style="styleModalTitle" v-html="computedModalTitle"></h4>
            </div>
         

   
            <div :style="creationContainer">
              <div :style="{width: '50%'}">
                <p :style="{ wordWrap: 'break-word', fontFamily:'Hegaris', fontSize:'25px',}" v-html="computedDescription"></p>
              </div>
              <hr>
              <div :style="{width: '50%'}">
                <a :href="computedLink" target="_blank">
                  <img :style="imgCreationStyle" :src="computedImgCreation" :alt="computedAltCreation" @mouseenter="imgHovered = true" @mouseleave="imgHovered = false"/>
                </a>
              </div>
            </div>

            
              <div :style="supportContainer">
                <div>
                  <p>Support utilisé :</p>
                </div>
                <div>
                  <img style="width: 38px" :src="computedImgSupport1" :alt="computedAltSupport1">
                  <img style="width: 38px" :src="computedImgSupport2" :alt="computedAltSupport2">
                  <img style="width: 38px" :src="computedImgSupport3" :alt="computedAltSupport3">
                </div>
              </div>
            

            
              <div :style="dateContainer">
                <p style="font-family: 'Alphabet';">Créé le : <time v-html="formattedDateTime"></time></p>
              </div>
            
          

          
            <div :style="childCenter">
              <button @click="showModal = false" :style="buttonStyle" @mouseenter="isHoveredButton = true" @mouseleave="isHoveredButton = false">fermer</button>
            </div>
          
        </div>
      </div>
    </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';


const props = defineProps(["title", "imgElement", "altElement",
                           "modalTitle", "description", "imgCreation", "altCreation","link",
                           "imgSupport1", "imgSupport2", "imgSupport3",
                           "altSupport1", "altSupport2", "altSupport3",
                           "dateTime"]);

const computedImgElement = computed (()=>{
  return props.imgElement;
});
const computedAltElement = computed (() =>{
  return props.altElement;
});
const computedTitle = computed(() => {
  return props.title; 
});

const computedModalTitle = computed (()=>{
  return props.modalTitle;
});
const computedDescription = computed (()=>{
  return props.description;
});


const computedImgCreation = computed (()=>{
  return props.imgCreation;
});
const computedAltCreation = computed (()=>{
  return props.altCreation;
});
const computedLink = computed (()=>{
  return props.link;
})


const computedImgSupport1 = computed (()=>{
  return props.imgSupport1;
});
const computedAltSupport1 = computed (()=>{
  return props.altSupport1;
});

const computedImgSupport2 = computed (()=>{
  return props.imgSupport2;
});
const computedAltSupport2 = computed (()=>{
  return props.altSupport2;
});

const computedImgSupport3 = computed (()=>{
  return props.imgSupport3;
});
const computedAltSupport3 = computed (()=>{
  return props.altSupport3;
});


const computedDatetime = computed (()=>{
  return props.dateTime;
});
const formattedDateTime = computed(() => {
  const date = new Date(computedDatetime.value);
  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
  return formattedDate;
});


const isHoveredElement = ref(false);
const elementStyle = computed(() => ({
  display: 'flex',
  textAlign: 'center',
  borderRadius: '5%',
  width: '150px',
  backgroundColor: 'white',
  border: 'dotted',
  transition: '1s cubic-bezier(0.71, 0.66, 0.1, 1.29)',
  flexDirection: 'column',
  cursor: 'pointer',
  boxShadow: isHoveredElement.value ? '5px 5px 10px rgba(0, 0, 0, 0.5)' : 'none',
  transform: isHoveredElement.value ? 'scale(1.05)' : 'none',
}));

const titleStyle = ref({
  color: 'white',
  backgroundColor: 'black',
  fontSize: '13px',
  margin: '0px 25px',
  minHeight: '44px',
});

const modalContainer = ref({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: '9999',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
});

const modal = ref({
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  width: '500px',
  boxShadow: '0px 0px 10px #cccccc',
  display: 'flex',
  flexDirection: 'column',
});

const childCenter = ref({
  display: 'flex',
  justifyContent: 'center',
});

const styleModalTitle = ref({
  fontSize: 'large',
  backgroundColor: 'black',
  color: 'white',
  padding: '10px 14px 10px 15px',
  borderRadius: '15px',
  width: 'max-content',
  margin: '0px 0px 20px',
});

const creationContainer = ref({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  textAlign: 'left',
});

const imgHovered = ref (false);

const imgCreationStyle = computed (()=>(
{
  width: '100%',
  borderRadius: '10px',
  transform: imgHovered.value ? 'rotateZ(5deg) scale(1.07)': 'rotateZ(0deg) scale(1)',
  filter: imgHovered.value ? 'drop-shadow(4px 3px 5px black)': 'none',
  transition: '0.8s ease',
}
));

const supportContainer = ref({
  display: 'flex',
  flexDirection: 'row',
});

const dateContainer = ref({
  display: 'flex',
  justifyContent: 'center',
});

const isHoveredButton = ref(false);
const buttonStyle = computed(() => ({
  border: 'none',
  borderRadius: '20px',
  height: '30px',
  cursor: 'pointer',
  backgroundColor: isHoveredButton.value ? 'gray' : 'rgb(195, 194, 194)',
  padding: '5px 90px',
  fontFamily: 'Alphabet',
}));

const showModal = ref (false);

const closeModals = () => {
  showModal.value = false;
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}


</style>