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

    :dateTime="datetime"
  />
</template>

<script setup>
import {ref} from "vue"
import Modal from './styleModal.vue';

import imageElement from "../../../img/cahierCharges.png";
const imgElement = ref(imageElement);
const altElement = ref("image representant un bloc notes");
const title = ref("Cahier des charges");

const modalTitle = ref("Cahier des charges");
const description = ref("Ceci est un cahier des charges que j'ai pu faire pour l'entreprise <strong>La Socketterie</strong> en détaillant, les besoins, la situation des concurants et diverses autres paramètre et ce afin de trouver des solutions pour avoir le meilleur livrable possible.");

import imageCreation from "../../../img/cahierdescharges_site_internet.pdf.png"
const imgCreation = ref(imageCreation);
const altCreation = ref("image de la premiere de couverture de mon cahier des charges");
const link = ref ("https://drive.google.com/file/d/1y3op-gUD3xyogdmEh9RptYHpxqAcpdcs/view?usp=drive_link")

import imageSupport1 from "../../../img/pdf.png";
const imgSupport1 = ref(imageSupport1);
const altSupport1 = ref("image d'un logo PNG");

// import imageSupport2 from "";
// const imgSupport2 = ref(imageSupport2);
// const altSupport2 = ref("");

// import imageSupport3 from "";
// const imgSupport3 = ref(imageSupport3);
// const altSupport3 = ref("");

const datetime = ref("2023-10-23T08:30");
</script>
