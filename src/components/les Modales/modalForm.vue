<!-- ModalEC.vue -->

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
    :imgSupport3="imgSupport3"
    :altSupport3="altSupport3"

    :dateTime="datetime"
  />
</template>

<script setup>
import {ref} from "vue"
import Modal from './styleModal.vue';

import imageElement from "../../../img/bloc-notes.png";
const imgElement = ref(imageElement);
const altElement = ref("image representant un logo commentaire");
const title = ref("Formulaire de contact");

const modalTitle = ref("Formulaire de contact");
const description = ref("Ceci est la creation d'un formulaire <strong>simple</strong> uniquement avec le language de balisage <strong>HTML</strong> et toute sa technologie concernant les formulaires.");

import imageCreation from "../../../img/formCreation.png"
const imgCreation = ref(imageCreation);
const altCreation = ref("image representant un espace commentaire dynamique");
const link = ref ("https://github.com/MdProGithub/formulaire");

import imageSupport1 from "../../../img/html5.png"
const imgSupport1 = ref(imageSupport1);
const altSupport1 = ref("cette image represente le logo HTML");

const imgSupport2 = ref("");
const altSupport2 = ref("");

const imgSupport3 = ref("");
const altSupport3 = ref("");

const datetime = ref("2023-11-17T19:22");
</script>
