import { inputRecalculate } from './inputRecalculate';

export function inputCheck(event) {
  const references = Object.keys(this.refs);

  for(let i = 0; i < references.length; i++) {
    let inputBox = this.refs[references[i]], nextInput = this.refs[references[i + 1]];


    //runs if correct inputBox.
    if(inputBox === event.target) {



      //removes inputted number if it's greater than expected length.
      if(inputBox.value.length > inputBox.maxLength) {
        inputBox.value = inputBox.value.substring(0, inputBox.value.length -1);
      }

      //runs if Input Box's length is the same as its requested maxlength.
      if(inputBox.value.length === inputBox.maxLength) {

        //if first number is zero, it is removed. This does not occur on time input boxes.
        if(inputBox.value.charAt(0) === '0' && inputBox.className !== 'time-input') {
          inputBox.value = inputBox.value.substring(1, inputBox.value.length);
        }

        //runs if an input box comes after currently focused input box.
        if(nextInput) {
          nextInput.focus();
          break;
        }

        //if last input box, calculate.
        inputRecalculate.call(this);
        break;
      }
    }
  }
}
