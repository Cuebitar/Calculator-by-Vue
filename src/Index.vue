<script>
import CustomCalculator from './components/Calculator.vue'

export default {
    components: {
        CustomCalculator
    }
}
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