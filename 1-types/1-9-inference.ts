/**
 * Type Inference π : νμμ λͺμνμ§ μμΌλ©΄ μλμΌλ‘ νμμ΄ κ²°μ 
 */

let friend = 'Armin'; // (Type Inference) μ μΈκ³Ό λμμ λ¬Έμμ΄ ν λΉ => μλμΌλ‘ friend: string μΆλ‘ 
// friend = 1; // error

function print(message = 'hi, there') { // Default parameterλ‘ λ¬Έμμ΄μ΄ ν λΉλμκΈ° λλ¬Έμ νμμ λͺμνμ§ μμλ
  console.log(message); // message: string μΆλ‘ 
}
print('hello');
// print(1); // error 

function add(x: number, y: number) { // μλμΌλ‘ function add(): number μΆλ‘ 
  return x + y;
}
const result = add(1, 2); // μλμΌλ‘ result: number μΆλ‘ 


// νμμ μ ννκ² λͺμνλ κ²μ΄ μ’λ€! νΉν Function