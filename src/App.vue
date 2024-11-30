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
 </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import SecAboutme from './views/SecAboutme.vue'
import SecBook from './views/SecBook.vue';
import SecHome from './views/SecHome.vue'
import SecServices from './views/SecServices.vue'


export default {
  name: 'App',
  components: {
    HeaderBar,
    SecHome,
    SecAboutme,
    SecServices,
    SecBook,
    
  }
}
</script>

<style>
@import './main.css';
</style>
