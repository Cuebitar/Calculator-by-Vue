
import {Queue} from './Queue';
export class CalcOperation{
    constructor() {
        this.storage = new Queue();
        this.result = 0;
    }

    clearInput() {
        this.storage.emptyQueue();
        this.result = 0;
        return this.result;
    }

    changeSign(value) {
        return -value;
    }

    toPercentage(value) {
        return value.charAt(value.length - 1) != '%'? value + '%' : value.substring(0, value.length - 1);
    }

    insertOperation(operator, value) {
        if(value != 0) {
            this.storage.enqueue(value);
            this.storage.enqueue(operator);
        }
        else {
            this.clearInput();
        }
        return '0';
    }

    computeResult(value) {
        this.storage.enqueue(value);
        
        var firstElement = this.storage.dequeue();
        this.result = firstElement.charAt(firstElement.length - 1) == '%' ? parseFloat(firstElement.substring(0, firstElement.length-1)) / 100 : parseFloat(firstElement);
        console.log(this.result);
        while(!this.storage.isEmpty) {
            if(this.storage.length > 1) {                
                var operator = this.storage.dequeue();
                console.log(operator);
                var value = this.storage.dequeue();
                var numValue = value.charAt(value.length - 1) == '%' ? parseFloat(value.substring(0, value.length-1)) / 100 : parseFloat(value);
                console.log(numValue);
                switch(operator) {
                    case '+':  
                        this.result += numValue;
                        break;
                    case '-':
                        this.result -= numValue;
                        break;
                    case '*':
                        this.result *= numValue;
                        break;
                    case '/':
                        this.result /= numValue;
                }
                    
            }
            else {
                this.clearInput();
            }
        }
        return this.result;
    }
}