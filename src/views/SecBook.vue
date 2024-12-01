<template>
    <div class="main-secbook">
      <video autoplay muted loop class="background-video">
        <source src="../assets/coverr-doctor-wearing-mask-2797-1080p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="container">
        <p class="p1">Get a free flu Today.!!</p>
        <button class="button" style="width: 180px; margin: auto;">
          <div class="backdrop">
            <span>Read More</span>
          </div>
          <div class="overlay">
            <span>Read More</span>
          </div>
        </button>
      </div>
    </div>
  </template>
  
<script>
export default {
    name: 'SecBook',
}
</script>
<style scoped>
@import '../css/button.css';

.main-secbook {
  margin: auto;
  width: 85%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  object-fit: cover;
}

.container {
  margin: auto;
  text-align: center;
  z-index: 1;
}

.p1 {
  font-size: 60px;
  color: whitesmoke;
  font-weight: bold;
}

button {
  width: 150px;
  padding: 8px;
  border: none;
  border-radius: 10px;
  color: #2d8c87;
  background-color: whitesmoke;
}

.overlay {
  color: whitesmoke;
}

@media (max-width: 768px) {
  .main-secbook {
    width: 100%;
    height: 600px; /* Adjust height for smaller screens */
  }
}

@media (max-width: 480px) {
  .main-secbook {
    width: 100%;
    height: 400px; /* Further adjust height for mobile */
  }
}
</style>
