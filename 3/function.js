function isNotaNumber(n){
    return isNaN(+n) || String(n).trim() === '';
}

// 1

const getMaxDigit  = number => {
    if (isNotaNumber(number)) return 'Вы ввели не число!';
    number = number + '';
    let digits = [];
    for (let i = 0; i < number.length; i++)  
        if (/[\d]/.test(number[i])) digits.push(+number[i]);
    return Math.max(...digits);
}

// 2

const powerDigit = (num, power) => {
    if (isNotaNumber(num) || isNotaNumber(power)) return 'Неправильный формат';
    else if (!Number.isInteger(+power)) return 'Степень должна быть целой'
    let res = 1;
    for (let i = 0; i < power; i++) res *= num;
    return res.toFixed(2);
}

// 3

const formatName = name => {
    let validName = /^[a-zа-я]{2,16}$/i;
    if (!validName.test(name)) return 'Неправильный формат имени. Правильное имя состоит только из букв. Длинна от 2 до 16';

    name = name.toLowerCase();
    name = name.substr(0,1).toUpperCase() + name.substr(1, name.length - 1);
    return name;
}

// 4

const calculateAfterTax = money => {
    if (isNotaNumber(money)) return 'Вы ввели не число!';
    const tax = 19.5;
    return money - (money * tax) / 100;
}

// 5

const getRandomNumber = (n,m) => {
    if (isNotaNumber(n) || isNotaNumber(m)) return 'Неправильный формат';
    else if(!Number.isInteger(+n) || !Number.isInteger(+m)) return 'Числа должны быть целыми';
    else if (!isNotaNumber(n) && !isNotaNumber(m) && Number.isInteger(+n) && Number.isInteger(+m) && n > m) return 'n должно быть менше m';
    return +n + Math.floor((Math.random()*(m - n + 1)));
}

// 6 

const countLetter = (letter, word, wordFormat = /^\w+$/gi) => {
    if (letter.length !== 1) return 'Вы ввели не символ!';
    else if (wordFormat && !wordFormat.test(word)) return 'Вы ввели не слово!';
    let matches = word.split(new RegExp(letter, 'gi')).length - 1;
    return matches;
}

// 7 

const convertCurrency = moneyString => {
    const validStringFormat = /^\d+(\$|uah)$/gi;
    moneyString = moneyString.trim();
    if (!validStringFormat.test(moneyString)) return 'Неправильный формат денег (валюты)';

    const validCurrencyFormat = /(\$|uah)/gi;
    const validMoneyFormat = /(\d+)/gi;

    [currency, money] = [moneyString.match(validCurrencyFormat)[0], moneyString.match(validMoneyFormat)[0]];

    const resultCurrency = currency === '$' ? 'UAH' : '$';
    const currencyMultiplier = currency === '$' ? 27.12 : 0.037;
    const resultMoney = Math.round(money * currencyMultiplier);

    return `${resultMoney}${resultCurrency}`;
}

// 8

const getRandomPassword = (length = 8) =>{
    length = length || 8;
    console.log(length);
    if (isNotaNumber(length)) return 'Вы ввели не число!'; 
    else if (!Number.isInteger(+length)) return 'Число должно быть целым'; 
    let password = '';
    for (let i = 0; i < length; i++) password += Math.floor(Math.random() * 10);

    return password;
}

// 9 

const deleteLetters = (letter, string) => {
    if (letter.length !== 1) return 'Вы ввели не символ!';
    return string.replaceAll(letter, '');
}

// 10

const isPalyndrom = string => {
    const compressed = string.toLowerCase().replaceAll(/[\s—_,\.]/gi, '').split('').join('');
    const reversed = compressed.split('').reverse().join('');
    return `Строка "${string}" ${compressed === reversed ? '' : 'не '}являеться полиндромом`;
}

// 11

const deleteDuplicateLetter = string => {
    const letters = string.split('');
    const uniqueLetters = Array.from(new Set(letters));

    console.log(uniqueLetters);

    for (let i = 0; i < uniqueLetters.length; i++){
        if (countLetter(uniqueLetters[i], string, null) > 1) string = deleteLetters(uniqueLetters[i], string);
    }

    return string;
}

let functions = [
    getMaxDigit, powerDigit, formatName, calculateAfterTax, getRandomNumber, countLetter, 
    convertCurrency, getRandomPassword, deleteLetters, isPalyndrom, deleteDuplicateLetter
];

const buttons = document.querySelectorAll('.function .btn');

buttons.forEach(button => {
    button.addEventListener('click', callFunction);
});

function callFunction(e) {
    const elem = e.target;
    const functionIndex = elem.dataset.function;
    const functionRequests = elem.dataset.functionRequests.split(',').map(req => req.trim());

    const parentElem = elem.closest('.function');
    const functionResult = parentElem.querySelector('.function__result');
    

    let functionArgs = [];

    functionRequests.forEach(req => {
        functionArgs.push(prompt(req));
    });

    functionResult.textContent = functions[functionIndex](...functionArgs);
}


