<template>
  <div>
    <router-view></router-view>
  </div>
  <footer>
  <footerPart :updatedDate="formattedDate"/>
  </footer>
</template>

<script setup>
import { onBeforeUpdate, ref, } from 'vue';
import footerPart from "./components/footerPart.vue";

  
  
  
  const updatedDate = ref(new Date());
  
  const formatDate = (date) => {
      const optionsDate = { 
          day: 'numeric', 
          month: 'numeric', 
      };
  
      const optionsTime = { 
          hour: 'numeric', 
          minute: 'numeric', 
          hour12: false 
      };
  
      const formattedDate = new Date(date).toLocaleDateString('fr-FR', optionsDate);
      const formattedTime = new Date(date).toLocaleTimeString('fr-FR', optionsTime);
  
      return `${formattedDate} à ${formattedTime}`;
  }
  
  const updateDate = () => {
      updatedDate.value = new Date();
  }
  
  onBeforeUpdate(() => {
    
    updateDate();
  })
  
  const formattedDate = formatDate(updatedDate.value);
  console.log(formattedDate)
   

 
</script>