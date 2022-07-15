class Kiosk{
    constructor(fruits,quantity){
    this.fruits=fruits
    this.quantity=quantity
    this.pricelist={"orange":30,"Mango":15,"Avacado":40}
    this.gettotalcost=function(){
        return `${quantity}  ${fruits} for ${quantity*this.pricelist.Avacado}`
    }
}
}
var MYkiosk=new Kiosk("avocado",3)
console.log(MYkiosk.gettotalcost())
