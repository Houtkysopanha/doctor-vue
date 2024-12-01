<template>
 <div class="wrapper">
    <div class="header">
        <HeaderBar />
    </div>
    <div class="section-welcome">
          <section>
            <SecHome />
          </section>
    </div>
    <div class="section-aboutme">
      <section>
        <SecAboutme />
      </section>
    </div>
    <div class="section-services">
      <section>
        <SecServices />
      </section>
    </div>
    <div class="section-bookservice">
      <section>
        <SecBook />
      </section>
    </div>
    <div class="section-client">
      <section>
        <SecClient />
      </section>
    </div>
    <div class="section-contact">
      <section>
        <SecContact /> 
      </section>
    </div>
    <div class="section-location">
      <section>
        <SecLoca />
      </section>
    </div>
    <div class="section-footer">
      <section>
        <SecFoot /> 
      </section>
    </div>
 </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import SecAboutme from './views/SecAboutme.vue'
import SecBook from './views/SecBook.vue';
import SecHome from './views/SecHome.vue'
import SecServices from './views/SecServices.vue'
import SecClient from './views/SecClient.vue'
import SecContact from './views/SecContact.vue';
import SecLoca from './views/SecLoca.vue';
import SecFoot from './views/SecFoot.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
    SecHome,
    SecAboutme,
    SecServices,
    SecBook,
    SecClient,
    SecContact,
    SecLoca,
    SecFoot,
    
  }
}
</script>

<style>
@import './main.css';
</style>
