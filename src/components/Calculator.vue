<script>

import CustomIcon from './CustomIcon.vue';
import {CalcOperation} from './Operation.js';

export default{
    data() {
        return {
            operation: new CalcOperation(),
            displayValue: 0,
            newInput: true,
            buttonElement: [[
    {
        key: 'clear',
        element: 'C',
        function: ()=>{this.displayValue = String(this.operation.clearInput());},
    },
    {
        key: 'sign',
        element: '+/-',
        function: ()=>{this.displayValue = String(this.operation.changeSign(this.displayValue));},
    },
    {
        key: 'percentage',
        element: '%',
        function: ()=>{this.displayValue = this.operation.toPercentage(this.displayValue)},
    },
    {
        key: 'divide',
        element: String.fromCodePoint(247),
        function: ()=>{this.displayValue = this.operation.insertoperation('/', this.displayValue)},
    },
],[
    {
        key: 'one',
        element: '1',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' || this.newInput ? '1': this.displayValue + '1'; this.newInput = false;}
    },
    {
        key: 'two',
        element: '2',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' || this.newInput ? '2': this.displayValue + '2'; this.newInput = false;}
    },
    {
        key: 'three',
        element: '3',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' || this.newInput ? '3': this.displayValue + '3'; this.newInput = false;}
    },
    {
        key: 'times',
        element: 'x',
        function: ()=>{this.displayValue = this.operation.insertoperation('*', this.displayValue)},
    },
],[
    {
        key: 'four',
        element: '4',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' || this.newInput ? '4': this.displayValue + '4'; this.newInput = false;}
    },
    {
        key: 'five',
        element: '5',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' || this.newInput ? '5': this.displayValue + '5'; this.newInput = false;}
    },
    {
        key: 'six',
        element: '6',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' || this.newInput ? '6': this.displayValue + '6'; this.newInput = false;}
    },
    {
        key: 'plus',
        element: '+',
        function: ()=>{this.displayValue = this.operation.insertoperation('+', this.displayValue)},
    },
],[
    {
        key: 'seven',
        element: '7',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' || this.newInput ? '7': this.displayValue + '7'; this.newInput = false;}
    },
    {
        key: 'eight',
        element: '8',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' || this.newInput ? '8': this.displayValue + '8'; this.newInput = false;}
    },
    {
        key: 'nine',
        element: '9',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' || this.newInput ? '9': this.displayValue + '9'; this.newInput = false;}
    },
    {
        key: 'minus',
        element: '-',
        function: ()=>{this.displayValue = this.operation.insertoperation('-', this.displayValue)},
    },
],[
    {
        key: 'zero',
        element: '0',
        function: ()=>{this.displayValue = this.displayValue.length == 1 && this.displayValue == '0' ? '0': this.displayValue + '0'}
    },
    {
        key: 'dot',
        element: '.',
        function: ()=>{
            for (var i = 0; i < this.displayValue.length; i++) {
                if (this.displayValue[i] == '.' || this.displayValue.length == 1 && this.displayValue == '0') {
                    break;
                }
                else if(i == this.displayValue.length - 1){
                    this.displayValue += '.';
                }
            }
        }
    },
    {
        key: 'equal',
        element: '=',
        function: ()=>{this.displayValue = this.operation.computeResult(this.displayValue); this.newInput = true},
    },
],]
        }
    },
    components: {
        CustomIcon,
    }
}

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