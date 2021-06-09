
let numN;
let numM;
let sum;
let even;
do {
  numN = +prompt("Введите первое целое чилое:","");
  } while ((isNaN(numN) || numN !== parseInt(numN) || (!numN) ));
  
do { 
    numM = +prompt("Введите второе целое чилое:","");
    
  } while ( (isNaN(numM) || numM !== parseInt(numM) || (!numN) ));

  console.log(numN);
  console.log(numM);
  
  even = confirm("Пропускать парные числа?");
  console.log(even);
  if (even) {
    sum = 0;
    for (let i = numN;  i <= numM; i++) {
      if ( i % 2 == 0)  {
        continue;
      }
      sum += i;
  }
  }
    else {
      sum = 0;
      for ( let i = numN; i <= numM; i++) {
        sum = sum + i;
      }
     
};
alert("Сумма всех чисел в цикле:" + sum);