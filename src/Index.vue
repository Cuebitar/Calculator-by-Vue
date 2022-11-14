<script setup>
import CustomCalculator from './components/Calculator.vue'
</script>

<template>
<CustomCalculator class="container"/>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
</style>