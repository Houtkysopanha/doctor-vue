<template>
    <div class="main-secbook1">
        <div class="btn-back">
            <router-link to="/">
              <button style="margin-top: 30px;">
                <i class="fa-regular fa-circle-left" style="font-size: 20px;"> <span style="font-size: 20px; font-family: Arial, Helvetica, sans-serif;"> Back</span></i>
            </button>
            </router-link>
        </div>
        <div class="header-book" style="margin: 20px 0px 20px 0px;">
            <p>Flu Shot</p>
        </div>
        <div class="dec2" style="margin-bottom: 10px;">
                <p>Check out our availability and book the date and time that works for you</p>
        </div>
        <div class="timeline">
            <div class="row g-4 text-center">
  <div class="col-sm-6 col-md-8 ">
    <div class="header">
        <div class="date-time">
            <p style="font-size: 25px; font-weight: 500; color: lightcoral;">Select a Date and Time
            </p>
        </div>
        <div class="timeoncounry">
            <p style="font-size: 25px; font-weight: 500;">Indochina Time (GMT+7)</p>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col">
            <dateTime></dateTime>
        </div>
        <div class="col">
            <div class="container">
                <div class="wekk text-start">
                <div class="name">
                    <p style="font-size: 25px; font-weight: 500; color: darkcyan;">Friday, December 19</p>
                </div>
            </div>
            <div class="time">
                <div class="container text-center">
      <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
        <div class="col">
        </div>
        
         <div class="booktime ">
          <button>10:00 PM</button>
        </div>
        <div class="booktime ">
          <button>10:00 PM</button>
        </div>
        <div class="booktime ">
          <button>10:00 PM</button>
        </div>
        <div class="booktime ">
          <button>10:00 PM</button>
        </div>
        <div class="booktime ">
          <button>10:00 PM</button>
        </div>
      </div>
    </div>
            </div>
            </div>
            
        </div>
    </div>
</div>
  <div class="col-6 col-md-4 bg-last">

    <div class="content">
    <div class="headerlast" @click="toggleContent">
      <div class="ser">
        <p style="font-size: 25px; font-weight: 500; color: lightcoral;">services</p>
      </div>
      <div class="icon">
        <i :class="isContentVisible ? 'fa-solid fa-circle-up' : 'fa-regular fa-circle-down'"></i>
      </div>
    </div>

    <!-- Toggle content -->
    <div >
     <transition name="toggle">
        <div v-if="isContentVisible">
        <div class="dec text-start">
        <p>Flu Shot</p>
        <p>Friday, December 19, 2024</p>
        <p>at 10:00 AM</p>
      </div>
      <div class="dec1 text-start">
        <p>Staff Member #1</p>
        <p>25 mn</p>
        <p>$45</p>
      </div>
      </div>
     </transition>
      <hr />
      <div class="button1">
        <button>Next</button>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    </div>
</template>
<script>
import dateTime from './dateTime.vue'

export default{
    name: 'SecBook1',
    components: {
        dateTime,
    },
    data() {
    return {
      isContentVisible: false, // Controls visibility of the content
    };
  },
  methods: {
    toggleContent() {
      this.isContentVisible = !this.isContentVisible;
    },
  },
};
</script>
<style scoped>
.main-secbook1 {
  margin: auto;
  width: 70%; /* Default for laptops/desktops */
  height: auto;
  margin-top: 100px;
}

.header-book p {
  font-size: 50px; /* Default for laptops/desktops */
  font-weight: 600;
  text-align: left;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

.row {
  width: 100%;
  display: flex;
}

.col {
  width: calc(100% / 2); /* Default for laptops/desktops */
}

.container {
  margin: 20px 0;
}

.booktime button {
  background-color: aliceblue;
  padding: 10px;
  width: 100%;
  border-radius: 30px;
  border: 1px solid orange;
}

.headerlast {
  text-align: start;
  padding: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dec p {
  margin-left: 10px;
  font-size: 17px;
  font-weight: 400;
  color: black;
}

.dec1 p {
  margin-left: 10px;
  font-size: 13px;
  font-weight: 400;
  color: lightskyblue;
}

.button1 button {
  font-size: 20px;
  color: white;
  margin-top: 20px;
  background-color: orange;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
}

.button1 button:hover {
  background-color: darkorange;
  transition: 0.4s;
}

.icon i {
  font-size: 20px;
  transition: transform 0.3s;
}

/* Responsive Adjustments for Smaller Screens */
@media (max-width: 768px) {
  .main-secbook1 {
    width: 90%; /* Adjusted width for mobile */
    margin-top: 50px; /* Reduced margin for smaller screens */
  }
  .btn-back{
    margin-top: 100px;
  }
  .header-book p {
    font-size: 40px; /* Smaller font size for mobile */
    text-align: start /* Center text for smaller screens */
  }

  .row {
    flex-wrap: wrap; /* Allow columns to stack */
  }

  .col {
    width: 100%; /* Full width for columns on mobile */
    margin-bottom: 20px; /* Add spacing between rows */
  }



  

  .dec p,
  .dec1 p {
    margin-left: 0; /* Align text for smaller screens */
    text-align: start; /* Center align text */
  }

  .button1 button {
    font-size: 18px; /* Adjust font size */
  }

  .headerlast {
    margin-left: 0; /* Adjust alignment */
  }
  .bg-last{
    width: 100%;
  }
  .button1{
    margin-bottom: 20px;
  }
}
</style>
