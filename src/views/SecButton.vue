<template>
    <div class="main">
      <button class="button">
        <div class="backdrop">
          <span>Button</span>
        </div>
        <div class="overlay">
          <span>Button</span>
        </div>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SecButton",
  };
  </script>
  
  <style scoped>
  :root {
    --alabaster: #f5f5eb;
    --beige: #eae9d0;
    --citrine: #e3dc0d;
    --chili-red: #e3310d;
    --murrey: #8f204f;
  }
  
  button {
    appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
    isolation: isolate;
  }
  
  .button {
    isolation: isolate;
    color: var(--alabaster);
    font-size: 24px;
    line-height: 1.5;
    font-weight: 600;
    border-radius: 9999rem;
    background: var(--chili-red);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 96px;
    overflow: hidden;
    transition: 200ms ease-out;
  }
  
  .button > .backdrop {
    z-index: 1;
    transition: 150ms ease-out;
  }
  
  .button > .overlay {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    background: var(--murrey);
    position: absolute;
    inset: 0;
    z-index: 5;
    transform: translateY(calc(100% + 1px));
    transition: 200ms ease-out;
  }
  
  .button:hover,
  .button:focus {
    background: color-mix(in oklab, var(--chili-red), black 40%);
    transition: 250ms ease-out;
  }
  
  .button:hover > .backdrop,
  .button:focus > .backdrop {
    transform: scale(0.8);
    opacity: 0.5;
  }
  
  .button:hover > .overlay,
  .button:focus > .overlay {
    transform: translateY(0);
  }
  </style>
  