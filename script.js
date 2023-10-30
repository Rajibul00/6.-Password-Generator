let inputrange = document.getElementById('passwordlengthmeter');
let inputBox = document.querySelector('input')

inputrange.addEventListener('input',function(){
    document.querySelector('#spantext').innerText = inputrange.value
})
let lowercase = 'qwertyuioplkjhgfdsazxcvbnm';
let numbers = '1234567890';
let uppercase = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
let symbols = '!@#$%^&*?/';


let uppercaseBox = document.getElementById('uppercase');
let numbersBox = document.getElementById('numbers')
let symbolsBox = document.getElementById('symbols')

let password = ''
function generatepassword(){


 //1. Only Lowercase Scenario*********
 if(uppercaseBox.checked==false && numbersBox.checked==false &&symbolsBox.checked==false){
    password='';

for(i=0;i<inputrange.value;i++){
password+= lowercase[Math.floor(Math.random()*lowercase.length)]
}
inputBox.value = password;
 }
 //2. Lowercase & Uppercase Mix Scenario*********
if(uppercaseBox.checked){
    password='';

   for(i=0;i<inputrange.value-1;i++){
    password+=lowercase[Math.floor(Math.random()*lowercase.length)]
   }
 
   inputBox.value=password+uppercase[Math.floor(Math.random()*uppercase.length)]
}
//3. Lowercase and Numbers Mix Scenario**************
if(numbersBox.checked){
    password='';

    for(i=0;i<inputrange.value-1;i++){
        password+=lowercase[Math.floor(Math.random()*lowercase.length)]
       }
       inputBox.value=password+numbers[Math.floor(Math.random()*numbers.length)]
    
}
//4. Lowercase and Symbols Mixed Scenario******
if(symbolsBox.checked){
    password='';

    for(i=0;i<inputrange.value-1;i++){
        password+=lowercase[Math.floor(Math.random()*lowercase.length)]
       }
       inputBox.value=password+symbols[Math.floor(Math.random()*symbols.length)]
    
}
//5. Lowercase , Uppercase & Numbers Scenario*******
if(uppercaseBox.checked && numbersBox.checked){
    password='';

    for(i=0;i<inputrange.value-2;i++){

     password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    }
    inputBox.value=password+uppercase[Math.floor(Math.random()*uppercase.length)]+numbers[Math.floor(Math.random()*numbers.length)]
 }
 //6. Lowercase , Uppercase & Symbols Scenario*******
 if(uppercaseBox.checked && symbolsBox.checked){    password='';

    for(i=0;i<inputrange.value-2;i++){
     password+=lowercase[Math.floor(Math.random()*lowercase.length)]
    }
    inputBox.value=password+uppercase[Math.floor(Math.random()*uppercase.length)]+symbols[Math.floor(Math.random()*symbols.length)]
 }
 //7. Lowercase , Numbers & Symbols Scenario*******
 if(numbersBox.checked && symbolsBox.checked){
    password='';

    for(i=0;i<inputrange.value-2;i++){
        password+=lowercase[Math.floor(Math.random()*lowercase.length)]
       }
       inputBox.value=password+numbers[Math.floor(Math.random()*numbers.length)]+symbols[Math.floor(Math.random()*numbers.length)]
    
}
// 8 . Lowercase , Numbers,Symbols & Uppercase Scenario*******
if(numbersBox.checked && symbolsBox.checked && uppercaseBox.checked){
    password='';

    for(i=0;i<inputrange.value-3;i++){
        password+=lowercase[Math.floor(Math.random()*lowercase.length)]
       }
       inputBox.value=password+numbers[Math.floor(Math.random()*numbers.length)]+symbols[Math.floor(Math.random()*numbers.length)]+uppercase[Math.floor(Math.random()*numbers.length)]
    
}
    };



