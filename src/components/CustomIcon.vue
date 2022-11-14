<script>

export default {
    props: {
        element: Object
    },
    data() {
        return {
            isClick: false,
            isHover: false
        }
    }
}
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
    cursor: pointer;
}
</style>