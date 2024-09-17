document.getElementById("convert").onclick = tempConvert;
document.getElementById("clear").onclick = tempClear;

function tempConvert(){
var fahrenheit=document.getElementById("fa").value ;
var  Celsius=document.getElementById("cel").value ;
var  Kelvin=document.getElementById("kel").value ;

// Celsius=(parseFloat(fahrenheit)-32)/1.8;
// fahrenheit=(parseFloat(Celsius)*1.8)+32;
// Kelvin=Celsius+273.15;
if(Celsius!=''){
    fahrenheit=(parseFloat(Celsius)*1.8)+32;
    Kelvin = parseFloat(Celsius) + 273.15;
}
else if(fahrenheit!=''){
 Celsius=(parseFloat(fahrenheit)-32)/1.8;
    Kelvin = Celsius+ 273.15;
}
else if(Kelvin!=''){
   Celsius=Kelvin-273.15;
   fahrenheit=(parseFloat(Celsius)*1.8)+32;
}
fahrenheit=document.getElementById("fa").value=parseFloat(fahrenheit).toFixed(2);
Celsius=document.getElementById("cel").value=parseFloat(Celsius).toFixed(2);
Kelvin=document.getElementById("kel").value=parseFloat(Kelvin).toFixed(2);
}

function tempClear(){
    document.getElementById("fa").value='' ;
document.getElementById("cel").value='' ;
document.getElementById("kel").value='' ;
}

// let celsiusInput = document.querySelector('#cel')
// let fahrenheitInput = document.querySelector('#fa')
// let kelvinInput = document.querySelector('#kel')

// let clearbtn = document.querySelector('#clear')
// let

// function roundNumber(number){
//     return Math.round(number*100)/100
// }


// /* Celcius to Fahrenheit and Kelvin */
// celsiusInput.addEventListener('input', function(){
//     let cTemp = parseFloat(celsiusInput.value)
//     let fTemp = (cTemp*(9/5)) + 32
//     let kTemp = cTemp + 273.15

//     fahrenheitInput.value = roundNumber(fTemp)
//     kelvinInput.value = roundNumber(kTemp)
// })


// /* Fahrenheit to Celcius and Kelvin */
// fahrenheitInput.addEventListener('input', function(){
//     let fTemp = parseFloat(fahrenheitInput.value)
//     let cTemp = (fTemp - 32) * (5/9)
//     let kTemp = (fTemp -32) * (5/9) + 273.15

//     celsiusInput.value = roundNumber(cTemp)
//     kelvinInput.value = roundNumber(kTemp)
// })

// /* Kelvin to Celcius and Fahrenheit */
// kelvinInput.addEventListener('input', function(){
//     let kTemp = parseFloat(kelvinInput.value)
//     let cTemp = kTemp - 273.15
//     let fTemp = (kTemp - 273.15) * (9/5) + 32

//     celsiusInput.value = roundNumber(cTemp)
//     fahrenheitInput.value = roundNumber(fTemp)
// })


// clearbtn.addEventListener('click', ()=>{
//     celsiusInput.value = ""
//     fahrenheitInput.value = ""
//     kelvinInput.value = ""
// })