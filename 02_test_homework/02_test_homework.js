
let numN;
let numM;

do {
  numN = +prompt("Введите первое целое чилое:");
  } while ((isNaN(numN) || numN !== parseInt(numN) ));
  
  do { 
    numM = +prompt("Введите второе целое чилое:");
    
  } while ((isNaN(numM) || numM !== parseInt(numM)));

  console.log(numN);
  console.log(numM);
  
  