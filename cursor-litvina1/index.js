
const dress = 15.678;
const shoes = 123.965;
const jeans = 90.2345;





// max price
const maxPrice = Math.max(dress, shoes, jeans)
console.log(maxPrice)


// min price
const minPrice = Math.min(dress, shoes, jeans)
console.log(minPrice)



// amount
const calcAmount = dress + shoes + jeans;
console.log(calcAmount)


//amount, rounding down
const calcAmountDown = Math.floor(dress) + Math.floor(shoes) + Math.floor(jeans);
console.log(calcAmountDown)


//the amount is rounded to hundreds
const amountRoundHundreds = Math.ceil(calc2 / 100) * 100
console.log(amountRoundHundreds)


//boolean 
if (calcAmountDown % 2 === 0) {
    console.log(true)
} else {
    console.log(false)
}


//surrender of money
const surrenderMoney = 500 - (calcAmount)
console.log(surrenderMoney)



//average value
const value = calcAmount / 3;
console.log(value.toFixed(2))


//discount
const discount = Math.random() * 25 + 5;

console.log((dress - discount).toFixed(2));


// Advanced
const allInfo = {
    MaxPrice: `${maxPrice}` ,
    MinPrice: `${minPrice}` ,
    Amount: `${calcAmount}` ,
    AmountDown: `${calcAmountDown}` ,
    AmountRoundHundreds: `${amountRoundHundreds}` ,
    SurrenderofMoney: `${surrenderMoney}`
    

}

console.log(allInfo)




