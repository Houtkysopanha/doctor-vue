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
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col p-0">
          <img
            src="https://img.freepik.com/free-photo/successful-doctor-working-office_1098-19735.jpg?t=st=1732961882~exp=1732965482~hmac=adcdb921c69e792e51af225a04974f1d779d3cffc5b920624ecad2ba464af303&w=900"
            alt=""
          />
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
  