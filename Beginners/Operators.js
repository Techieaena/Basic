// D = L - S / L * 100

// a + ((b * c) / d) * e


var sellingPrice = 299;
var listingPrice = 499;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount percentage is :" + discountPercent);

displayDiscountPercentage = Math.round(discountPercent)

console.log(displayDiscountPercentage);

 