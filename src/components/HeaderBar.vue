<template>
  <div class="main-header" >
    <div class="navigation">
      <nav>
        <!-- Logo Section (Placed on the left for mobile) -->
        <div class="logo">
          <router-link to="/">
            <i
            class="fa-solid fa-notes-medical"
            style="font-size: 40px; color: red"
          >
            <span class="logo1" style="color: black">CheirSar.MD</span>
            <span class="logo2">| FamilyDr</span>
          </i>
          </router-link>
         
        </div>
        <!-- Horizontal Navigation Links (Visible on larger screens) -->
        <div class="horizenatal">
          <div class="link">
            <ul class="mb-0">
              <li><router-link to="#meet-dr">Meet Dr</router-link></li>
              <li><router-link to="#services">Service</router-link></li>
              <li><router-link to="#book">Patient Infor</router-link></li>
              <li><router-link to="#contact">Contact</router-link></li>
            </ul>
          </div>
          <!-- Login/Notifications Bar -->
          <div class="loginBar">
            <i class="fa-solid fa-bell" style="font-size: 22px"></i>
            <i class="fa-regular fa-circle" style="font-size: 22px"></i>
            <i class="fa-solid fa-chevron-down" style="font-size: 22px"></i>
          </div>
        </div>
        <!-- Hamburger Menu (Visible only on small screens) -->
        <div class="hamburger-menu" @click="toggleSidebar">
          <div :class="['bar', isSidebarOpen ? 'open' : '']"></div>
          <div :class="['bar', isSidebarOpen ? 'open' : '']"></div>
          <div :class="['bar', isSidebarOpen ? 'open' : '']"></div>
        </div>
      </nav>
    </div>
    <!-- Sidebar (Slides from left) -->
    <div class="sidebar" :class="{ open: isSidebarOpen }">
      <div class="Profile">
        <div class="img">
          <img style="width: 40px; height: 40px; border-radius: 50%; " src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/425749611_1118980949343592_6175213285778934909_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2yN3vuh67B0Q7kNvgESnS58&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=AfMuliPfKzqOpVpyM3huGJI&oh=00_AYA3o-5IcjRpRohCGoo2cCipEtZTBwDnIVNYmrjUeunL0w&oe=67533734" alt="">
        </div>
        <hr>
        <div class="name">
          <p>Houtkysopanha</p>

        </div>
      </div>
      <hr>

      <ul>
        <li><router-link to="#home">Home</router-link></li>
        <hr>
        <li><router-link to="#meet-dr">Meet Dr</router-link></li>
        <hr>
        <li><router-link to="#services">Service</router-link></li>
        <hr>
        <li><router-link to="#book">Patient Infor</router-link></li>
        <hr>
        <li><router-link to="#contact">Contact</router-link></li>
      </ul>
    </div>
    <!-- Backdrop -->
    <div v-if="isSidebarOpen" class="backdrop" @click="toggleSidebar"></div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      isSidebarOpen: false, // Tracks whether the sidebar is open or closed
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // Toggles the sidebar state
    },
  },
};
</script>

<style scoped>
/* Default Styles for Desktop */
.main-header {
  width: 100%;
  padding: 25px 37px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
  z-index: 10000;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  margin-left: 10px;
  white-space: nowrap;
}
.logo2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  margin-left: 10px;
  white-space: nowrap;
  color: #ff7043;
}

/* Horizontal Navigation (Visible on Larger Screens) */
.horizenatal {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.horizenatal ul {
  display: flex;
  gap: 20px; /* Add spacing between menu items */
  list-style: none;
  padding: 0;
  margin: 0;
}

.horizenatal ul li a {
  color: #9e9e9e;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 25px; /* Add padding for clickable area */
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px; /* Add subtle rounding for hover effect */
}

.horizenatal ul li a:hover {
  color: white;
  background-color: #007bff; /* Highlight effect */
}

/* Login/Notifications Bar */
.loginBar {
  display: flex;
  align-items: center;
  gap: 24px; /* Space between icons */
}

.loginBar i {
  cursor: pointer;
  color: black;
  transition: color 0.3s ease;
}

.loginBar i:hover {
  color: #007bff;
}

/* Ensure Navigation Aligns Horizontally */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

ul > li > a:hover {
  color: #007bff; /* Add hover effect */
}

/* Hamburger Menu */
.hamburger-menu {
  display: none; /* Hidden by default on large screens */
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  cursor: pointer;
}

.hamburger-menu .bar {
  width: 100%;
  height: 3px;
  background-color: black;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Hamburger Animation (when sidebar is open) */
.hamburger-menu .bar.open:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger-menu .bar.open:nth-child(2) {
  opacity: 0;
}

.hamburger-menu .bar.open:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 20px;
}

.sidebar.open {
  transform: translateX(250px); /* Slide into view */
  left: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin-bottom: 10px;
}

.sidebar ul li a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  transition: color 0.3s;
}

.sidebar ul li a:hover {
  color: pink; /* Add hover effect */
}

/* Backdrop */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  z-index: 900;
}

/* Responsive Design for Mobile (max-width: 768px) */
@media (max-width: 768px) {
  .horizenatal {
    display: none; /* Hide horizontal links on small screens */
  }

  .hamburger-menu {
    display: flex; /* Display hamburger on small screens */
    position: absolute;
    left: 15px; /* Align hamburger icon to the left */
    top: 20px;
    z-index: 1100; /* Ensure hamburger is above other elements */
  }

  .logo1 {
    font-size: 20px;
    margin-left: 10px;
  }
  .logo2 {
    font-size: 20px;
  }

  .sidebar ul li a {
    font-size: 16px;
  }

  /* Make sure sidebar doesn't cover up logo and other elements */
  nav {
    flex-direction: row;
    align-items: center;
  }

  /* Adjust backdrop for mobile screens */
  .backdrop {
    z-index: 999; /* Make sure it's above other elements */
  }

  .logo {
    margin-left: 50px; /* Space logo from left edge for smaller screens */
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: -450px;
    width: 400px;
    height: 100%;
    background-color: #fff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    z-index: 1000;
    padding: 20px;
  }
}
</style>
