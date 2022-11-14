<script setup>
import {ref} from 'vue';
import CustomIcon from './CustomIcon.vue';
import {CalcOperation} from './Operation.js';
const operation = new CalcOperation();
const displayValue = ref("0");
var newInput = false;
const buttonElement = ref([[
    {
        key: 'clear',
        element: 'C',
        function: ()=>{displayValue.value = String(operation.clearInput());},
    },
    {
        key: 'sign',
        element: '+/-',
        function: ()=>{displayValue.value = String(operation.changeSign(displayValue.value));},
    },
    {
        key: 'percentage',
        element: '%',
        function: ()=>{displayValue.value = operation.toPercentage(displayValue.value)},
    },
    {
        key: 'divide',
        element: String.fromCodePoint(247),
        function: ()=>{displayValue.value = operation.insertOperation('/', displayValue.value)},
    },
],[
    {
        key: 'one',
        element: '1',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' || newInput ? '1': displayValue.value + '1'; newInput = false;}
    },
    {
        key: 'two',
        element: '2',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' || newInput ? '2': displayValue.value + '2'; newInput = false;}
    },
    {
        key: 'three',
        element: '3',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' || newInput ? '3': displayValue.value + '3'; newInput = false;}
    },
    {
        key: 'times',
        element: 'x',
        function: ()=>{displayValue.value = operation.insertOperation('*', displayValue.value)},
    },
],[
    {
        key: 'four',
        element: '4',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' || newInput ? '4': displayValue.value + '4'; newInput = false;}
    },
    {
        key: 'five',
        element: '5',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' || newInput ? '5': displayValue.value + '5'; newInput = false;}
    },
    {
        key: 'six',
        element: '6',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' || newInput ? '6': displayValue.value + '6'; newInput = false;}
    },
    {
        key: 'plus',
        element: '+',
        function: ()=>{displayValue.value = operation.insertOperation('+', displayValue.value)},
    },
],[
    {
        key: 'seven',
        element: '7',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' || newInput ? '7': displayValue.value + '7'; newInput = false;}
    },
    {
        key: 'eight',
        element: '8',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' || newInput ? '8': displayValue.value + '8'; newInput = false;}
    },
    {
        key: 'nine',
        element: '9',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' || newInput ? '9': displayValue.value + '9'; newInput = false;}
    },
    {
        key: 'minus',
        element: '-',
        function: ()=>{displayValue.value = operation.insertOperation('-', displayValue.value)},
    },
],[
    {
        key: 'zero',
        element: '0',
        function: ()=>{displayValue.value = displayValue.value.length == 1 && displayValue.value == '0' ? '0': displayValue.value + '0'}
    },
    {
        key: 'dot',
        element: '.',
        function: ()=>{
            for (var i = 0; i < displayValue.value.length; i++) {
                if (displayValue.value[i] == '.' || displayValue.value.length == 1 && displayValue.value == '0') {
                    break;
                }
                else if(i == displayValue.value.length - 1){
                    displayValue.value += '.';
                }
            }
        }
    },
    {
        key: 'equal',
        element: '=',
        function: ()=>{displayValue.value = operation.computeResult(displayValue.value); newInput = true},
    },
],])
</script>

<template>
<div>
    <div class="display">
        <input v-model="displayValue" class="numDisplay" disabled/>
    </div>
    <div class="input">
        <div v-for="rows in buttonElement" :key="rows" class="buttonRow">
            <CustomIcon v-for="element in rows" :key="element.key" :element="element" :id="element.key"/>
        </div>
    </div>
</div>
</template>

<style scoped>
.numDisplay{
    width: 200px;
    height: 30px;
    font-size: x-large;
    margin-bottom: 0.6em;;
}
.input{
    width: 208px;
    display: flex;
    flex-direction: column;
}
.buttonRow{
    display: flex;
    flex-direction: row;
    width: 207px;
    height: 2.5em;
    justify-content: space-between;
    margin: 2px 0px;
}

#zero{
    flex-grow: 0.6;
    margin-left: 0.2em;
    
}
</style>