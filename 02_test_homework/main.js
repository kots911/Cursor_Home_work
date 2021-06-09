
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
  
    if (even) {
    sum = 0;
    for (let i = minNum;  i <= maxNum; i++) {
      if ( i % 2 == 0)  {
        continue;
      }
      sum += i;
  }
  }
    else {
      sum = 0;
      for ( let i = minNum; i <= maxNum; i++) {
        sum = sum + i;
      }
     
};
alert("Сумма всех чисел в цикле:" + sum);