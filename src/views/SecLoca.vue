<template>
  <div class="main-seclocat">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15638.202236927189!2d104.8804897!3d11.5123092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1733025802073!5m2!1sen!2skh"
      style="border: 0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "SecLoca",
};
</script>
<style scoped>
.main-seclocat{
    
    padding: 100px 0px;
    width: 100%;
    height: auto;
    display: flex;
    margin: auto;
}
iframe{
    width: 80%;
    height: 400px;
    margin: auto;
}
</style>
