<template>
    <div class="stepper">
      <div
        class="step"
        v-for="(step, index) in steps"
        :key="index"
      >
        <div class="progress" :style="{ height: getProgressHeight(index) }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steps: [0, 1, 2], // Three steps
        activeStep: -1, // No active step initially
      };
    },
    mounted() {
      this.fillStepsSequentially();
    },
    methods: {
      async fillStepsSequentially() {
        const stepInterval = 2000; // Time between step changes in milliseconds
        for (let i = 0; i < this.steps.length; i++) {
          this.activeStep = i;
          await this.sleep(stepInterval);
        }
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
      getProgressHeight(index) {
        if (index < this.activeStep) {
          return "100%";
        } else if (index === this.activeStep) {
          return `${((this.activeStep + 1) / this.steps.length) * 100}%`;
        } else {
          return "0%";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .stepper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .step {
    width: 20px;
    height: 80px;
    margin: 10px 0;
    background-color: white;
    position: relative;
    overflow: hidden;
  }
  
  .progress {
    width: 100%;
    background-color: green;
    position: absolute;
    bottom: 0;
    transition: height 0.5s, background-color 0.5s;
  }
  </style>
  