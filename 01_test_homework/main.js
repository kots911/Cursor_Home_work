const pricePhone = 15.678;
const priceLaptop = 90.2345;
const pricePC = 123.965;
const numOfProducts = 3;
document.write('<pre>');
document.writeln( "Минимальная цена: " + Math.min(pricePhone, priceLaptop, pricePC));
document.writeln( "Максимальная цена: " + Math.max(pricePhone, priceLaptop, pricePC));
const sumOfPrices = (pricePhone + priceLaptop + pricePC);
document.writeln("Сумма всех товаров: " + sumOfPrices);

const pricePhoneFloor = Math.floor(pricePhone);
const priceLaptopFloor = Math.floor(priceLaptop);
const pricePCFloor = Math.floor(pricePC);
const sumFloor = (pricePhoneFloor + priceLaptopFloor + pricePCFloor);

document.writeln( "Округленная сумма товаров: " + sumFloor);
const sumFloorRound = Math.round(sumOfPrices/100)*100;
document.writeln( "Сумма товаров, округленная до сотен: " + sumFloorRound);

const isTotalSumEven = sumFloorRound % 2 === 0;

document.writeln("Если сумма всех товаров является парным числом - true=" + isTotalSumEven);

const pay = (500 - sumOfPrices);
document.writeln ("Сдача с 500грн при покупке всех товаров:" + pay);
const sum_02 = (+(sumOfPrices / numOfProducts).toFixed(2));
document.writeln ("Среднее значение цен, округленное:" + sum_02);

const discountRandom = (Math.random() * 100);
const clientDiscountRandom = (discountRandom).toFixed(2);
document.writeln ("Случайный процент скидки клиенту:" + clientDiscountRandom + "%");

const priseSumDiscount = (sumOfPrices / 100 * clientDiscountRandom);
const purchasePriceSum = (sumOfPrices / 2);
const clearPrice = (sumOfPrices - priseSumDiscount - purchasePriceSum);

document.writeln ("Чистый доход:" + clearPrice);
const  payPriseSumDiscount = (+(sumOfPrices - priseSumDiscount).toFixed(2));
document.writeln ("Сумма к оплате после скидки:" + payPriseSumDiscount);




