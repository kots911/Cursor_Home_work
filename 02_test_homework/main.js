
let numN;
let numM;
let sum;
let even;
let minNum;
let maxNum;

do {
  numN = +prompt("Введите первое целое чилое:","");
  } while ((isNaN(numN) || numN !== parseInt(numN) || (!numN) ));
  
do { 
    numM = +prompt("Введите второе целое чилое:","");
    
  } while ( (isNaN(numM) || numM !== parseInt(numM) || (!numN) ));

  console.log(numN);
  console.log(numM);
  minNum = Math.min(numN, numM);
  maxNum = Math.max(numN, numM);
  
  even = confirm("Пропускать парные числа?");
  console.log(even);
  sum = 0;
  let i = minNum;
  if (even && i <= maxNum) {
    i % 2 == 0;
    sum += i;
      }
  else {
    i++;
    sum = sum + i;
  }; 
alert("Сумма всех чисел в цикле:" + sum);