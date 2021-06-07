
let numN;
let numM;

do {
  numN = +prompt('Enter 1st number:');
  } while ((isNaN(numN) || numN !== parseInt(numN) ));
  
  do { 
    numM = +prompt('Enter 2nd number:');
    
  } while ((isNaN(numM) || numM !== parseInt(numM)));

  console.log(numN);
  console.log(numM);
  
  