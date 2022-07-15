class Sales {
    constructor(price) {
        this.price = price;
        this.calculateFruitCost = (fruitName, quantity) => {
            return `${quantity} ${fruitName} for KES ${parseFloat(this.price*quantity).toFixed(1)}`
        }      
    }
}

var apples = new Sales(35.0)
var berries = new Sales( 150.0)
var watermelon = new Sales(400.0)
console.log(berries.calculateFruitCost('berries', 5))
console.log(apples.calculateFruitCost('apples', 2))
console.log(watermelon.calculateFruitCost('watermelon',3))


