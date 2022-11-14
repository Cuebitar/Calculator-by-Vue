<script setup>
import {ref} from "vue"
const props = defineProps({
    element: Object,
    
});
const isClick = ref(false);
const isHover = ref(false);

</script>

<template>
<button class="buttonAction" :class="{hover: isHover, click: isClick}" @click="element.function">
    {{element.element}}
</button>
</template>

<style scoped>
button{
    font-size: larger;
    border-radius: 100%;
    width: 2em;
}
</style>