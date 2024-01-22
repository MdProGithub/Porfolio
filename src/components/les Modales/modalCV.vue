<template>
  <Modal
    :imgElement="imgElement"
    :altElement="altElement"
    :title="title"

    :modalTitle="modalTitle"

    :description="description"
    :imgCreation="imgCreation"
    :altCreation="altCreation"
    :link="link"
    
    :imgSupport1="imgSupport1"
    :altSupport1="altSupport1"
    :imgSupport2="imgSupport2"
    :altSupport2="altSupport2"
    

    :dateTime="datetime"
  />
</template>

<script setup>
import {ref} from "vue"
import Modal from './styleModal.vue';

import imageElement from "../../../img/cv.png";
const imgElement = ref(imageElement);
const altElement = ref("image representant une icone CV");
const title = ref("CV de présentation");

const modalTitle = ref("CV de présentation");
const description = ref("Dans ce cv je me présente dans les grands axes, le tout sous une mise en forme web <strong>esthétique</strong> et <strong>épuré</strong>...");

import imageCreation from "../../../img/cvPresentation.png"
const imgCreation = ref(imageCreation);
const altCreation = ref("image représentation une parti du site web de mon cv");
const link = ref ("https://github.com/MdProGithub/Mon-CV-en-ligne");

import imageSupport1 from "../../../img/html5.png";
const imgSupport1 = ref(imageSupport1);
const altSupport1 = ref("image represantant le logo HTML5");

import imageSupport2 from "../../../img/css-3.png";
const imgSupport2 = ref(imageSupport2);
const altSupport2 = ref("image representant le logo CSS3");

// import imageSupport3 from "";
// const imgSupport3 = ref("");
// const altSupport3 = ref("");

const datetime = ref("2023-10-17T08:33");
</script>
