<template>
    <div class="main-secservices">
        <div class="container">
            <div class="header text-center">
                <p>How can I help you ?</p>
            </div>
            <div class="list-service">
                <div class="row text-center row-cols-1 row-cols-lg-3 g-2 g-lg-3">
        <div class="col">
          <div class="p-3 bg-box">
            <div class="img mt-5">
                <img style="width: 80px;" src="../assets/blood-test.png" alt="">
            </div>
            <div class="name-list">
                <p>Blood Work</p>
            </div>
            <router-link to="/Books" style="text-decoration: none;">
              <button class="button" style="width: 180px; margin: auto;">
        <div class="backdrop">
          <span>Book</span>
        </div>
        <div class="overlay">
          <span>Book</span>
        </div>
      </button>
            </router-link>
        </div>
        </div>
        <div class="col">
            <div class="p-3 bg-box">
            <div class="img mt-5">
                <img style="width: 80px;" src="../assets/medical-care.png" alt="">
            </div>
            <div class="name-list">
                <p>Blood Work</p>
            </div>
            <router-link to="/Books" style="text-decoration: none;">
              <button class="button" style="width: 180px; margin: auto;">
        <div class="backdrop">
          <span>Book</span>
        </div>
        <div class="overlay">
          <span>Book</span>
        </div>
      </button>
            </router-link>
        </div>
        </div>
        <div class="col">
            <div class="p-3 bg-box">
            <div class="img mt-5">
                <img style="width: 80px;" src="../assets/medical-checkup.png" alt="">
            </div>
            <div class="name-list">
                <p>Blood Work</p>
            </div>
            <router-link to="/Books" style="text-decoration: none;">
              <button class="button" style="width: 180px; margin: auto;">
        <div class="backdrop">
          <span>Book</span>
        </div>
        <div class="overlay">
          <span>Book</span>
        </div>
      </button>
            </router-link>
        </div>
      </div>
      <div class="col">
            <div class="p-3 bg-box">
            <div class="img mt-5">
                <img style="width: 80px;" src="../assets/mental-health.png" alt="">
            </div>
            <div class="name-list">
                <p>Blood Work</p>
            </div>
            <router-link to="/Books" style="text-decoration: none;">
              <button class="button" style="width: 180px; margin: auto;">
        <div class="backdrop">
          <span>Book</span>
        </div>
        <div class="overlay">
          <span>Book</span>
        </div>
      </button>
            </router-link>
        </div>
      </div>
      <div class="col">
            <div class="p-3 bg-box">
            <div class="img mt-5">
                <img style="width: 80px;" src="../assets/syringe.png" alt="">
            </div>
            <div class="name-list">
                <p>Blood Work</p>
            </div>
            <router-link to="/Books" style="text-decoration: none;">
              <button class="button" style="width: 180px; margin: auto;">
        <div class="backdrop">
          <span>Book</span>
        </div>
        <div class="overlay">
          <span>Book</span>
        </div>
      </button>
            </router-link>
        </div>
      </div>
      <div class="col">
            <div class="p-3 bg-box">
            <div class="img mt-5">
                <img style="width: 80px;" src="../assets/home.png" alt="">
            </div>
            <div class="name-list">
                <p>Blood Work</p>
            </div>
            <router-link to="/Books" style="text-decoration: none;">
              <button class="button" style="width: 180px; margin: auto;">
        <div class="backdrop">
          <span>Book</span>
        </div>
        <div class="overlay">
          <span>Book</span>
        </div>
      </button>
            </router-link>
        </div>
      </div>
      <div class="col">
            <div class="p-3 bg-box">
            <div class="img mt-5">
                <img style="width: 80px;" src="../assets/home.png" alt="">
            </div>
            <div class="name-list">
                <p>Blood Work</p>
            </div>
            <router-link to="/Books" style="text-decoration: none;">
              <button class="button" style="width: 180px; margin: auto;">
        <div class="backdrop">
          <span>Book</span>
        </div>
        <div class="overlay">
          <span>Book</span>
        </div>
      </button>
            </router-link>
        </div>
      </div>
      <div class="col">
            <div class="p-3 bg-box">
            <div class="img mt-5">
                <img style="width: 80px;" src="../assets/home.png" alt="">
            </div>
            <div class="name-list">
                <p>Blood Work</p>
            </div>
            <router-link to="/Books" style="text-decoration: none;">
              <button class="button" style="width: 180px; margin: auto;">
        <div class="backdrop">
          <span>Book</span>
        </div>
        <div class="overlay">
          <span>Book</span>
        </div>
      </button>
            </router-link>
        </div>
      </div>
      <div class="col">
            <div class="p-3 bg-box">
            <div class="img mt-5">
                <img style="width: 80px;" src="../assets/home.png" alt="">
            </div>
            <div class="name-list">
                <p>Blood Work</p>
            </div>
            <router-link to="/Books" style="text-decoration: none;">
              <button class="button" style="width: 180px; margin: auto;">
        <div class="backdrop">
          <span>Book</span>
        </div>
        <div class="overlay">
          <span>Book</span>
        </div>
      </button>
            </router-link>
        </div>
      </div>
        
      </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "ServicePage",
}
</script>
<style scoped>
@import '../css/button.css';
.main-secservices{
    width: 100%;
    margin-top: 100px;
}
.header p{
    margin: 60px;
    font-size: 40px;
    font-weight: bold;
}
.bg-box{
    background-color: whitesmoke;
}
.bg-box img{
    margin-bottom: 5rem;
}
.name-list p{
    margin-bottom: 20px;
}
button{
    /* width: 120px; */
    padding: 6px;
    border-radius: 10px;
    background-color: #FF7043;
    /* border: 2px solid #FFB74D; */
}
</style>