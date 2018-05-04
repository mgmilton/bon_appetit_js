export default class Pantry {
  constructor(stock) {
    this.stock = {}
  }

  stockCheck(ingredientName) {
    return this.stock[ingredientName] || 0
  }

  restock(ingredientName, amount) {
    var totalAmount = this.stockCheck(ingredientName) + amount
    return this.stock[ingredientName] = totalAmount
  }
}
