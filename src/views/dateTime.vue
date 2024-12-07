<template>
    <div class="datepicker-container">
      <div class="datepicker" style="margin: auto;">
        <Datepicker
        v-model="selectedDate"
        :inline="true"
        :format="dateFormat"
        :highlighted="highlightedDates"
      />
      </div>
      <p>Selected Date: {{ selectedDate }}</p>
    </div>
  </template>
  
  <script>
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  
  export default {
    components: { Datepicker },
    data() {
      return {
        selectedDate: null,
        dateFormat: 'yyyy-MM-dd', // Correct format for date-fns
        highlightedDates: ['2024-12-25', '2024-01-01'], // Optional: Highlight specific dates
      };
    },
  };
  </script>
  
  <style>
  .datepicker-container {
    margin: 20px 0px 20px 0px;
    max-width: 400px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
  }

  </style>
  