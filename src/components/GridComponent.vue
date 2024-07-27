<template>
    <div class="
    grid-control
      ">
      <slot></slot>
    </div>
  </template>
  
  <style scoped>
  .grid-control {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(186.189px, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-top: 24px;
  }
  </style>