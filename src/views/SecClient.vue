<template>
    <div class="main-secclient">
        <div class="container">
            <div class="header text-center mt-5">
            <p class="p1">Insurance Policy</p>
            <br>
            <p class="p2">Nearly all major insurance plans accepted</p>
            <br>
            <br>
            <p class="p3">I'm a paragraph. Click here to add your own text and edit me. <br>I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <br>
        <br>
        <hr style="width: 60%; margin: auto;">
        <br>
        <br>
        <!-- <div class="img-in">
            <img src="../assets/insurance.png" alt="">
            <img src="../assets/insurance.png" alt="">
            <img src="../assets/insurance.png" alt="">
            <img src="../assets/insurance.png" alt="">
        </div> -->
        </div>
        <br>
        <br>
        <button class="button" style="width: 200px;">
        <div class="backdrop">
          <span>Read More</span>
        </div>
        <div class="overlay" style="background-color:aquamarine; color: #2D8C87 ;">
          <span>Read More</span>
        </div>
      </button>
    </div>
</template>
<script>
export default {
    name:'SecClient',
}

</script>
<style scoped>
@import '../css/button.css';
.main-secclient{
    width : 100%;
    height: auto;
    background: whitesmoke;
}
.container{
    margin-top: 100px;
}
.header .p1{
    font-size: 40px;
    font-weight: bold;
}
.header .p2{
    font-size: 27px;
    font-weight: 100;
}
.img-in{
    text-align: center;
    width: 100%;
    height: auto;
    margin: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 30px;
    margin-top:20px ;
}
button{
    text-align: center;
    margin: auto;
    display: flex;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #2D8C87;
    margin-bottom: 10px;
}
@media (max-width: 768px) {
    .img-in{
        /* flex-direction: column; */
        gap: 10px;
        width: 30px;
        
    }
}
@media (max-width: 450px) {
    .img-in{
        /* flex-direction: column; */
        gap: 2px;
        width: 25px;
        
    }
}

</style>