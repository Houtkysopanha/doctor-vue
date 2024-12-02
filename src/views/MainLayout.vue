<template>
    <div class="wrapper">
       <!-- <div class="header">
           <HeaderBar />
       </div> -->
       <div class="section-welcome" id="home">
             <section>
               <SecHome />
             </section>
       </div>
       <div class="section-aboutme" id="meet-dr">
         <section>
           <SecAboutme />
         </section>
       </div>
       <div class="section-services" id="services">
         <section>
           <SecServices />
         </section>
       </div>
       <div class="section-bookservice" id="book">
         <section>
           <SecBook />
         </section>
       </div>
       <div class="section-client" id="cient">
         <section>
           <SecClient />
         </section>
       </div>
       <div class="section-contact" id="contact">
         <section>
           <SecContact /> 
         </section>
       </div>
       <div class="section-location" id="loctaion">
         <section>
           <SecLoca />
         </section>
       </div>
       <!-- <div class="section-footer">
         <section>
           <SecFoot /> 
         </section>
       </div> -->
    </div>
   </template>
   
   <script>
  //  import HeaderBar from '../components/HeaderBar.vue'
   import SecAboutme from '../views/SecAboutme.vue'
   import SecBook from '../views/SecBook.vue';
   import SecHome from '../views/SecHome.vue'
   import SecServices from '../views/SecServices.vue'
   import SecClient from '../views/SecClient.vue'
   import SecContact from '../views/SecContact.vue';
   import SecLoca from '../views/SecLoca.vue';
  //  import SecFoot from '../views/SecFoot.vue';
   
   export default {
     name: 'MainLayout',
     components: {
      //  HeaderBar,
       SecHome,
       SecAboutme,
       SecServices,
       SecBook,
       SecClient,
       SecContact,
       SecLoca,
      //  SecFoot,
       
     }
   }
   </script>
   
   <style>
   @import '../main.css';
   .fade-enter-active, .fade-leave-active {
       transition: opacity 0.5s;
   }
   .fade-enter-from, .fade-leave-to {
       opacity: 0;
   }
   </style>
   