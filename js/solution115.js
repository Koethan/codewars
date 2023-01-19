// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function mango(quantity, price){
    let total = 0
    let mangoes = 0

    if(quantity < 2){
        return quantity * price
    }else{
        for(let i = 1; i <= quantity; i++){
            mangoes += 1
            if(mangoes%3===0){
                total+=0
            }else{
                total+= price
            }
        }
    }
    return total

}
console.log(mango(2,3))
console.log(mango(3,3))
console.log(mango(5,3))
console.log(mango(9,5))

// function mango(quantity, price){
//     return price * (quantity - Math.floor(quantity / 3));
//   }