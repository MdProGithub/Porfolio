<template>
    <section id="section1">
           <div id="contactCard">
            
              <h2>Contactez-moi</h2>
              <form id="formulaire" @submit.prevent="submitName, submitEmail, submitObject, submitMessage">

                <Transition>
                  <div :style="container" v-if="nameOpen">
                  <div :style="inputBox">
                    <div :style="inputStyle">
                      <i class="fa-solid fa-user fa-xs" style="color: #1160e8;"></i>
                      <input v-model="formData.name" @input="updateNameError" type="text" placeholder="Insérez votre nom ou prénom...">
                      <i class="fa-solid fa-check" style="color: #1160e8;cursor: pointer;" @click="submitName" @mouseenter="isSubmitNameHovered"></i>
                    </div>
                    <div :style="errorContainerStyle">
                      <div   v-if="errorText"   style="width: max-content;"> {{ getErrorMessage(v$.name.$errors) }}</div>
                    </div>
                  </div> 
                </div>
                </Transition>
                

                <Transition>
                <div :style="container" v-if="emailOpen">
                  <div :style=buttonReturn v-if="seeButton" @click="returnInput" @mouseenter="returnButtonHovered = true" @mouseleave="returnButtonHovered = false">
                    <i class="fa-solid fa-arrow-left fa-xs" style="color: gold;"></i>
                  </div>
                  <div :style="inputBox">
                    <div :style="inputStyle">
                      <i class="fa-solid fa-at fa-xs" style="color: #1160e8;"></i>
                      <input v-model="formData.email" @input="updateEmailError" type="text" placeholder="Insérez votre e-mail...">
                      <i class="fa-solid fa-check" style="color: #1160e8;cursor: pointer;" @click="submitEmail" @mouseenter="isSubmitEmailHovered"></i>
                    </div>
                    <div :style="errorContainerStyle">
                      <div   v-if="errorText"   style="width: max-content;"> {{ getErrorMessage(v$.$errors) }}</div>
                    </div>
                  </div>
                </div>
                </Transition>
                

                <Transition>
                <div :style="container" v-if="objectOpen">
                  <div :style=buttonReturn v-if="seeButton" @click="returnInput" @mouseenter="returnButtonHovered = true" @mouseleave="returnButtonHovered = false">
                    <i class="fa-solid fa-arrow-left fa-xs" style="color: gold;"></i>
                  </div>
                  <div :style="inputBox">
                    <div :style="inputStyle">
                      <i class="fa-solid fa-question fa-xs" style="color: #1160e8;"></i>
                      <input v-model="formData.object" @input="updateObjectError" type="text" placeholder="inserez le sujet de votre demande...">
                      <i class="fa-solid fa-check" style="color: #1160e8;cursor: pointer;" @click="submitObject" @mouseenter="isSubmitObjectHovered"></i>
                    </div>
                    <div :style="errorContainerStyle">
                      <div   v-if="errorText"   style="width: max-content;"> {{ getErrorMessage(v$.$errors) }}</div>
                    </div>
                  </div>
                </div>
                </Transition>
                
                <Transition>
                  <div :style="container" v-if="messageOpen">
                  <div :style=buttonReturn v-if="seeButton" @click="returnInput" @mouseenter="returnButtonHovered = true" @mouseleave="returnButtonHovered = false">
                    <i class="fa-solid fa-arrow-left fa-xs" style="color: gold;"></i>
                  </div>
                  <div :style="inputBox">
                    <div :style="inputStyle">
                      <i class="fa-solid fa-comment fa-xs" style="color: #1160e8;"></i>
                      <input v-model="formData.message" @input="updateMessageError" type="text" placeholder="veuillez expliquer votre besoin...">
                      <i class="fa-solid fa-check" style="color: #1160e8;cursor: pointer;" @click="submitMessage" @mouseenter="isSubmitMessageHovered"></i>
                    </div>
                    <div :style="errorContainerStyle">
                      <div   v-if="errorText"   style="width: max-content;"> {{ getErrorMessage(v$.$errors) }}</div>
                    </div>
                  </div>
                </div>
                </Transition>

                <div style="display: flex; justify-content: center;">
                  <div v-if="successMessage" :style="successMessageStyle" @mouseenter="successMessageHovered = true" @mouseleave="successMessageHovered = false" @click="resetForm">
                  <p style="font-family: 'Super Spicy';">Votre demande a bien été prise en compte,
                     vous serez recontacté sous peu...
                  </p>
                  </div>
                </div>
                

              </form>   
           </div>
    </section>
</template>

<script setup>

import {reactive, computed, ref} from 'vue';
import useVuelidate from '@vuelidate/core';
import {required, minLength, maxLength, helpers, email} from '@vuelidate/validators';



const formData = reactive ({
  name: "",
  email:"",
  object:"",
  message:"",
});

const rules = computed (()=>{
  return {
  name:{required:  helpers.withMessage(' Ce champ est obligatoire', required),
        minLength:  helpers.withMessage('2 caractères min. requis', minLength(2)),
        alpha: helpers.withMessage('caractères speciaux non-acceptés', value => {
        return !helpers.req(value) || /^[a-zA-Z]+$/.test(value)}
        )},
        
  email:{required:  helpers.withMessage(' Ce champ est obligatoire', required),
         email: helpers.withMessage('adresse e-mail invalide', email)},

  object:{required:  helpers.withMessage(' Ce champ ne peut être vide', required),
          maxLength:  helpers.withMessage('25 caractères max. requis', maxLength(25))},

  message:{required:  helpers.withMessage(' Ce champ ne peut être vide', required)}
  
  
}
});

const v$ = useVuelidate(rules, formData);


const errorText = ref (false);

const getErrorMessage = (errors) => {
  const priorityOrder = ["email", "alpha", "minLength", "maxLength", "required", ];
  for (const priority of priorityOrder) {
    const error = errors.find((e) => e.$validator === priority);
    if (error) {
      return error.$message;
    }
  }
  return "";
};


const nameOpen = ref(true);
const seeButton = ref (false);

const updateNameError = () => {
  errorText.value = false;
  v$.value.$touch();
  errorContainerStyle.value.background = v$.value.name.$error ? 'red' : 'green';
  errorContainerStyle.value.width = '0px';
};

const isSubmitNameHovered = ()=> {
  if (v$.value.name?.$error) {
    errorText.value = true
    errorContainerStyle.value.width = '105px';
    errorContainerStyle.value.background = 'red';
  }
  else {
    errorText.value = false
    errorContainerStyle.value.width = '0px';
  }
};

const submitName = () => { 
  if (!v$.value.name.$error && formData.name) {
    nameOpen.value = false;
    setTimeout(() => {
    emailOpen.value = true; 
    seeButton.value = true;
    }, 600); 
    
  } else {
    console.log("votre nom est invalide");
  } 
};

const emailOpen = ref(false);

const updateEmailError = () => {
  errorText.value = false;
  v$.value.$touch();
  errorContainerStyle.value.background = v$.value.email?.$error ? 'red' : 'green';
  errorContainerStyle.value.width = '0px';
};

const isSubmitEmailHovered = ()=> {
  if (v$.value.email?.$error) {
    errorText.value = true
    errorContainerStyle.value.width = '105px';
    errorContainerStyle.value.background = 'red';
  }
  else {
    errorText.value = false
    errorContainerStyle.value.width = '0px';
  }
}

const submitEmail = () => { 
  if (!v$.value.email.$error && formData.email) { 
    emailOpen.value = false;
    setTimeout(() => {
      objectOpen.value = true;
    }, 600);
    
  } else {
    console.log("votre e-mail est invalide");
  } 
};


const objectOpen = ref(false);

const updateObjectError = () => {
  errorText.value = false;
  v$.value.$touch();
  errorContainerStyle.value.background = v$.value.object?.$error ? 'red' : 'green';
  errorContainerStyle.value.width = '0px';
};

const isSubmitObjectHovered = ()=> {
  if (v$.value.object?.$error) {
    errorText.value = true
    errorContainerStyle.value.width = '105px';
    errorContainerStyle.value.background = 'red';
  }
  else {
    errorText.value = false
    errorContainerStyle.value.width = '0px';
  }
}

const submitObject = () => { 
  if (!v$.value.object.$error && formData.object) { 
    objectOpen.value = false;
    setTimeout(() => {
      messageOpen.value = true;
    }, 600);
  } else {
    console.log("l'objet du message est incorrect");
  } 
};


const messageOpen = ref(false);

const updateMessageError = () => {
  errorText.value = false;
  v$.value.$touch();
  errorContainerStyle.value.background = v$.value.message?.$error ? 'red' : 'green';
  errorContainerStyle.value.width = '0px';
};

const isSubmitMessageHovered = ()=> {
  if (v$.value.message?.$error) {
    errorText.value = true
    errorContainerStyle.value.width = '105px';
    errorContainerStyle.value.background = 'red';
  }
  else {
    errorText.value = false
    errorContainerStyle.value.width = '0px';
  }
}



const submitMessage = () => { 
  if (!v$.value.message.$error && formData.message) { 
    console.log('voici les informations:' , 'son prénom est', formData.name, 'sont e-mail' ,formData.email, 'au sujet de', formData.object, 'voici son message;', formData.message)
    messageOpen.value = false;
    setTimeout(() => {
      successMessage.value = true;
    }, 600);
  } else {
    console.log("Un message est nécessaire");
  } 
};



const returnInput = ()=> {
  if (emailOpen.value) {
    emailOpen.value = false;
    setTimeout(() => {
    nameOpen.value= true;
    errorContainerStyle.value.background = 'green';
    errorContainerStyle.value.width = '0px';
    errorText.value = false;
    }, 600);
    
  }
  else if (objectOpen.value) {
    objectOpen.value = false;
    setTimeout(() => {
    emailOpen.value = true;
    errorContainerStyle.value.background = 'green';
    errorContainerStyle.value.width = '0px';
    errorText.value = false;
    }, 600);
    
    
  }
  else if (messageOpen.value) {
    messageOpen.value = false;
    setTimeout(() => {
    objectOpen.value = true;
    errorContainerStyle.value.background = 'green';
    errorContainerStyle.value.width = '0px';
    errorText.value = false;  
    }, 600);
    
  }
}


const successMessage = ref (false);

const successMessageStyle = computed (()=>(
  ({
  textAlign: 'center',
  backgroundColor : 'green',
  borderRadius: '10px',
  padding: '0px 60px',
  cursor:'pointer',
  width: '45%',
  transition: '0.5s ease-in',
  transform: successMessageHovered.value ? 'scale(1.02)': 'scale(1)',
})
)) 

const successMessageHovered = ref (false);

const resetForm = () => {
  successMessage.value = false;
  formData.name = "";
  formData.email = "";
  formData.object = "";
  formData.message = "";
  nameOpen.value = true;
}

const container = ref ({

  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  justifyContent: 'center',
  scale:'0.99',
})

const returnButtonHovered = ref (false);
const buttonReturn = computed (()=>({
  backgroundColor: 'white',
  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
  height: '40px',
  width:'40px',
  borderRadius:'10px',
  cursor: 'pointer',
  transform: returnButtonHovered.value ? 'scale(1.08)' : 'scale(1)',
  transition: '0.5s ease-out',
}))

const inputBox = ref ({
  display:'flex',
  flexDirection:'row',
  justifyContent: 'center',


})

const errorContainerStyle = ref ({
  color: 'white',
  background:'#1160e8',
  padding: '10px',
  borderRadius: '0px 10px 10px 0px',
  maxHeight: '20px',
  minHeight: '20px',
  textAlign: 'center',
  fontSize: 'small',
  width: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.5s cubic-bezier(0, 0, 0, 1.16)',

});

const inputStyle = computed (()=> ({
  alignItems: 'center',
  borderRadius: '10px 0px 0px 10px',
  backgroundColor:'white',
  height: '40px',
  display: 'flex',
  padding: '0px 10px',
  justifyContent: 'space-around',
  gap: '5px',
}))

</script>



<style scoped>


h2 {color : white;
    text-align: center;
  }

#formulaire {color : white;
            display: flex;
            flex-direction: column;
            position: relative;
            gap: 30px;}


#section1{
   margin: 100px 0px 100px;
   display: flex;
   justify-content: center;
}


#contactCard {
   background-color: black;
   border-radius: 25px;  
   width: 70%;
   padding: 45px;
   height: 13em;
   display: flex;
   flex-direction: column;
   gap: 20px;
   }


input{border: none;
     width: 210px;
    outline: none;}

</style>

<style>

.v-enter-active {
  transition: all 0.5s ease-out;
}

.v-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>