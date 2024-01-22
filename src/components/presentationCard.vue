<template>
     <section :style="sectionStyle">
            <div :style="styleCard">
                <div :style="styleDivTxt">
                    <div>
                       <p style="color: grey; margin-bottom : 0; font-size: 4vh;">Bonjour, je suis</p>
                       <p><span style="color: orangered; font-family: 'Tommy';font-size: 11vh;">M</span>ohamed<br><span style="color: orangered;font-family: 'Tommy';">D</span>iaby...</p>
                    </div>
                    <h2 style="color: gold; ">Developper Web Junior</h2>
                </div>
                <div :style="styleDivIcon">
                
                    <div style="width: 85px"><img class="grpIcon" src="../../img/html5.png" alt="icon représentant un symbole HTML"></div>
                    <div style="width: 85px"><img class="grpIcon" src="../../img/css-3.png" alt="icon représentant un symbole CSS"></div>
                    <div style="width: 85px"><img class="grpIcon" src="../../img/js.png" alt="icon représentant un symbole Javascript"></div>
                </div>  
            </div>
     </section>
</template>


<script setup>
import {ref} from "vue";

const sectionStyle = ref ({
    marginTop: '150px',
    display:'flex',
    justifyContent: 'left',
})

const styleCard = ref ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px', 
    width: '800px',
    height: '450px',
    marginRight: '130px',
    });

const styleDivTxt = ref ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: '30px',
})

const styleDivIcon = ref ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '20%',
    marginRight:'30px'
})


</script>

<style scoped>

img {width: 100%;}


p {color: white;
    font-size: 8vh;
    margin: 0;
    }





</style>