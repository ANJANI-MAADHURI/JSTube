var sellingPrice = 199;
var listPrice = 799;
var discountPercent = ((listPrice - sellingPrice) / listPrice) * 100 ;
console.log(" Discount percentage is: " + discountPercent + "% off");

discountPercent = Math.round(discountPercent);

console.log( ` ${discountPercent}% off`);

var result = listPrice > sellingPrice;
console.log(result);
console.log(typeof result);
