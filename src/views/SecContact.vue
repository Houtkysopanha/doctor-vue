<template>
  <div class="main-contact">
    <div class="container mt-5 px-4 text-start">
      <div class="row gx-0">
        <div class="col">
          <div class="p-4 bg1">
            <div class="header">
              <p>Contact</p>
            </div>
            <form action="">
              <div class="Fullname d-flex">
                <div class="FirsName">
                  <label for="fname">First Name:</label>
                  <input type="text" name="" id="" />
                </div>
                <div class="lastName">
                  <label for="fname">Last Name:</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <br />

              <div class="emaail">
                <label for="email">Email:</label>
                <input style="width: 100%" type="email" name="" id="" />
              </div>
              <br />
              <div class="phone">
                <label for="phone">Phone:</label>
                <input style="width: 100%" type="text" name="" id="" />
              </div>
              <br />
              <div class="message">
                <label for="message">Message:</label>
                <textarea
                  style="
                    border: none;
                    width: 100%;
                    border-bottom: 1px solid #ccc;
                  "
                  name=""
                  id=""
                ></textarea>
              </div>
              <br />
              <button class="button" style="width: 150px;">
        <div class="backdrop">
          <span>Submit</span>
        </div>
        <div class="overlay" style="background-color:#2D8C87;">
          <span>Submit</span>
        </div>
      </button>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="bg2">
            <p style="font-size: 20px; font-weight: 500;">Openning Hours</p>
            <p>
              Monday-Friday: 9am to 7pm
              <br />
              Saturday: 9am to 4pm
              <br />
              Sunday: Closed
            </p>
            <hr />
            <p>500 Terry Francine Street, San Francisco, CA 94158</p>
            <p>123-456-7890</p>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
            <div class="social">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin" style="margin: 10px;"></i>
                <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SecContact",
};
</script>
<style scoped>
.main-contact {
  width: 70%;
  margin: auto;
  height: auto;
}
.bg1 {
  border: 1px solid #ccc;
}
.bg2 {
  padding: 50px;
  color: whitesmoke;
  background-color: #ff7043;
}
input {
  border: none;
  border-bottom: 1px solid #ccc;
}
.header p {
  font-size: 30px;
  font-weight: bold;
}
button{
  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 50%;
                  margin: auto;
                  padding: 4px;
                  border: none;
                  border-radius: 10px;
                  background-color: #ff7043;
}
@media (max-width: 768px){
  .Fullname{
    flex-direction: column;
    width: 100%;
  }
  .Fullname, .FirsName{
    width: 100% !important;
    margin-bottom: 10px;
  }
}

@media (max-width: 450px){
  .Fullname{
    flex-direction: column;
  }
  .Fullname .FirsName{
    margin-bottom: 5px;
  }
}

</style>
