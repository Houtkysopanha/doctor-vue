<template>
    <div class="main-secaboutme">
      <div class="row">
        <div class="col">
          <div class="content">
            <div class="name">
              <p class="p1">About Night ChierSa MD</p>
            </div>
            <br>
            <br>
            <div class="describe">
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
            </div>
            <br>
            <br>
            <div class="educ">
              <p class="p3">Education</p>
              <br>
              <div class="detail">
                <p>Medical School - University of Dulton <br> Health Science Center.</p>
                <p>
Residency in Family Medicine - University <br> of Dulton Health Science Center.</p>
              </div>
              <div>
                <br>
                <br>
                <button class="button" style="width: 200px;" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="backdrop">
          <span>Read More</span>
        </div>
        <div class="overlay">
          <span>Read More</span>
        </div>
      </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col p-0">
          <img
            src="../assets/IMG1.jpg"
            alt=""
          />
        </div>
      </div>
      <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content" style="margin-top: 90px;">
      <div class="modal-header">
        <!-- <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
  <div class="col" style="flex: 1; position: relative;">
    <div class="image" style="width: 100%; height: 100%; overflow: hidden;">
      <img src="../assets/IMG2.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
  </div>
  <div class="col">
    <div class="content" style="padding: 100px; margin-top: 100px;">
      <div class="name">
        <p class="p1">About CheirSa MD</p>
      </div>
      <div class="describe">
          <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
          <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
            Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
      </div>
    </div>
  </div>
</div>
        <!-- row2 -->
        <div class="row">
          <div class="col">
    <div class="content" style="padding: 100px; margin-top: 100px;">
      <div class="describe">
          <p>At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wix ellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!</p>
          
      </div>
      <div class="educ">
              <p class="p3">Education</p>
              <br>
              <div class="detail">
                <p>Medical School - University of Dulton <br> Health Science Center.</p>
                <p>
Residency in Family Medicine - University <br> of Dulton Health Science Center.</p>
              </div>
              <div>
                <br>
                <br>
              </div>
            </div>
    </div>
  </div>
          <div class="col ">
            <div class="image" style="width: 100%;">
              <img src="../assets/IMG3.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SecAboutMe",
  };
  </script>
  
  <style scoped>
  /* Main container styles */
  .main-secaboutme {
    background-color: whitesmoke;
    width: 100%;
    /* padding: 20px 0; */
  }
  
  /* Row styles */
  .row {
    display: flex;
    flex-wrap: wrap; /* Allow wrapping for smaller screens */
    width: 100%;
    margin: 0 auto;
  }
  
  /* Column styles */
  .col {
    flex: 1; /* Default
  padding: 20px; /* Add some padding for spacing */
}

.col img {
  width: 100%;
  height: auto;
  object-fit: cover; 
}

/* Content styles */
.content {
  padding: 100px;
  margin-top: 100px;
}

.name .p1 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2D8C87 ;
}

.describe p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.educ .p3 {
  font-size: 30px;
  font-weight: bold;
  color: #2D8C87 ;
}
button{
    width: 130px;
    padding: 8px;
    border: none;
    border-radius: 10px;
    background-color: #FFB74D;
}
.row{
  width: 100%;
  display: flex;
}
.col{
  width: calc(1005/2);
}

/* Responsive Design for Smaller Screens */
@media (max-width: 768px) {
  .row {
    flex-direction: column; /* Stack columns vertically */
  }

  .col {
    width: 100%; /* Make columns full-width */
    padding: 10px; /* Reduce padding */
  }

  .content {
    padding: 20px; /* Adjust padding for smaller screens */
  }

  .name .p1 {
    font-size: 28px; /* Adjust font size for headings */
  }

  .describe p {
    font-size: 16px; /* Adjust font size for text */
    line-height: 1.5;
  }

  .educ .p3 {
    font-size: 24px; /* Adjust font size for "Education" */
  }
}

/* Responsive Design for Extra Small Screens (Mobile) */
@media (max-width: 480px) {
  .content {
    padding: 15px;
  }

  .name .p1 {
    font-size: 24px;
  }

  .describe p {
    font-size: 14px;
  }

  .educ .p3 {
    font-size: 20px;
  }

  .col img {
    margin-top: 10px; /* Add spacing between image and text content */
  }
}
</style>
  