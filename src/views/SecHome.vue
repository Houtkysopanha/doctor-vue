<template>
    <div class="main-home">
        <div class="container">
            <div class="name">
                <p class="p1">Night CheirDa MD</p>
                <p class="p2 mb-5">Helping to build a Healthy Community.</p>
                <button>Book an Appointment</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SecHome',
};
</script>

<style scoped>
.main-home {
    width: 100%;
    height: 925px; /* Default height for large screens */
    background-image: url(https://img.freepik.com/free-photo/doctor-checking-medical-condition-patient_23-2148728404.jpg?t=st=1732973039~exp=1732976639~hmac=45cb6584f644430d464a37a6c99431f5baa82500ba767b893ecdf3b49b9648dd&w=2000);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    aspect-ratio: 1;
    display: flex; /* Use flexbox for alignment */
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center */
}

.container {
    text-align: center; /* Center the text inside the container */
}

.name .p1 {
    font-size: 75px; /* Default font size for large screens */
    color: white;
    font-family: Arial, sans-serif;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
.name .p2 {
    font: 55px;
    font-weight: 400px;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
.name button{
    width: 200px;
    padding: 8px;
    border: none;
    background-color: #FFB74D;
    border-radius: 15px;
}
/* Responsive Design */
@media (max-width: 768px) {
    .main-home {
        width: 100%;
        height: 700px; /* Reduce height for smaller screens */
    }
}

@media (max-width: 450px) {
    .main-home {
        width: 100%;
        height: 400px; /* Further reduce height for mobile */
    }
    .name .p1{
        font-size: 40px; /* Increase font size for mobile */
    }
}
</style>
