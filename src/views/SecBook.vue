<template>
    <div class="main-secbook">
       <div class="container">
        <p class="p1">Get a free flu Today.!!</p>
        <button>Book a flu short</button>
       </div>
    </div>  
</template>
<script>
export default {
    name: 'SecBook',
}
</script>
<style scoped>
.main-secbook{
    margin: auto;
    width: 85%;
    height: 400px;
    background-image: url(../assets/bg-home.jpg);
    background-position: center;
    background-repeat: none;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-self: center;
    aspect-ratio: 1;
}
.container{
    margin: auto;
    text-align: center;
}
.p1{
    font-size: 60px;
    color: black;
    font-weight: bold;
}
button{
    width: 150px;
    padding: 8px;
    border: none;
    border-radius: 10px;
}
@media (max-width: 768px) {
    .main-secbook {
        width: 100%;
        height: 600px; /* Reduce height for smaller screens */
    }

}

@media (max-width: 480px) {
    .main-secbook {
        width: 100%;
        height: 400px; /* Further reduce height for mobile */
    }
}
</style>