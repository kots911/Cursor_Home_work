console.log('hello');
let pricePhone = 15.678;
let priceLaptop = 90.2345;
let pricePC = 123.965;
let numOfProducts = 3;
document.write('<pre>');
document.writeln( "Минимальная цена: " + Math.min(pricePhone, priceLaptop, pricePC));
document.writeln( "Максимальная цена: " + Math.max(pricePhone, priceLaptop, pricePC));
let sum = (pricePhone + priceLaptop + pricePC);
document.writeln("Сумма всех товаров: " + sum);

let pricePhoneFloor = Math.floor(pricePhone);
let priceLaptopFloor = Math.floor(priceLaptop);
let pricePCFloor = Math.floor(pricePC);
let sumFloor = (pricePhoneFloor + priceLaptopFloor + pricePCFloor);

document.writeln( "Округленная сумма товаров: " + sumFloor);
let sumFloorRound = Math.round(sum/100)*100;
document.writeln( "Сумма товаров, округленная до сотен: " + sumFloorRound);

let boolean = (sumFloorRound % 2 === 0);

document.writeln("Если сумма всех товаров является парным числом - true=" + boolean);

let pay = (500 - sum);
document.writeln ("Сдача с 500грн при покупке всех товаров:" + pay);
let sum_02 = ((sum / numOfProducts).toFixed(2));

let discountRandom = (Math.random() * 100);
let clientDiscountRandom = (discountRandom).toFixed(2);
document.writeln ("Случайный процент скидки клиенту:" + clientDiscountRandom + "%");

let priseSumDiscount = (sum / 100 * clientDiscountRandom);
let purchasePriceSum = (sum / 2);
let clearPrice = (sum - priseSumDiscount - purchasePriceSum);

document.writeln ("Чистый доход:" + clearPrice);
let  payPriseSumDiscount = (sum - priseSumDiscount).toFixed(2);
document.writeln ("Сумма к оплате после скидки:" + payPriseSumDiscount);



