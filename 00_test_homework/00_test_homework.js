const pricePhone = 15.678;
const priceLaptop = 90.2345;
const pricePC = 123.965;
const numOfProducts = 3;
document.write('<pre>');
document.writeln( "Минимальная цена: " + Math.min(pricePhone, priceLaptop, pricePC));
document.writeln( "Максимальная цена: " + Math.max(pricePhone, priceLaptop, pricePC));
const sum = (pricePhone + priceLaptop + pricePC);
document.writeln("Сумма всех товаров: " + sum);

const pricePhoneFloor = Math.floor(pricePhone);
const priceLaptopFloor = Math.floor(priceLaptop);
const pricePCFloor = Math.floor(pricePC);
const sumFloor = (pricePhoneFloor + priceLaptopFloor + pricePCFloor);

document.writeln( "Округленная сумма товаров: " + sumFloor);
const sumFloorRound = Math.round(sum/100)*100;
document.writeln( "Сумма товаров, округленная до сотен: " + sumFloorRound);

const boolean = (sumFloorRound % 2 === 0);

document.writeln("Если сумма всех товаров является парным числом - true=" + boolean);

const pay = (500 - sum);
document.writeln ("Сдача с 500грн при покупке всех товаров:" + pay);
const sum_02 = +((sum / numOfProducts).toFixed(2));

const discountRandom = (Math.random() * 100);
const clientDiscountRandom = (discountRandom).toFixed(2);
document.writeln ("Случайный процент скидки клиенту:" + clientDiscountRandom + "%");

const priseSumDiscount = (sum / 100 * clientDiscountRandom);
const purchasePriceSum = (sum / 2);
const clearPrice = (sum - priseSumDiscount - purchasePriceSum);

document.writeln ("Чистый доход:" + clearPrice);
const  payPriseSumDiscount = (sum - priseSumDiscount).toFixed(2);
document.writeln ("Сумма к оплате после скидки:" + payPriseSumDiscount);



