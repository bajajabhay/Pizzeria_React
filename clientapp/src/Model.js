class list {
  constructor() {
    this.cart = [];
    this.cost = 0;
    this.total = 0;
    this.ingredients = [];
    this.ingredientsCost = 0;
    this.count = [];
  }
  addtocart(p) {
    this.cart.push(p);
  }
  getCart() {
    return this.cart;
  }

  deleteCart(dprod) {
    const index = this.cart.findIndex((x) => x.id === dprod.id);
    console.log("dropd", this.dropd);
    this.cost = dprod.price * dprod.quantity;
    if (index !== undefined) this.cart.splice(index, 1);
    console.log("cart", this.cart);
    return this.cart;
  }

  totalCostOrder(p) {
    this.total = this.total + parseInt(p.price);
  }

  gettotalCostOrder() {
    return this.total;
  }

  getTotal() {
    let rem = 0;
    console.log("total:", this.total);
    console.log("cost", this.cost);
    console.log("remaining", this.total - this.cost);
    rem = this.total - this.cost;
    this.total = rem;
    this.total = rem;
    if (this.total < 0) this.total = 0;
    return this.total;
  }

  getIncrement(p) {
    let a = parseInt(p.price);
    this.total = this.total + a;
    return this.total;
  }

  getDecrement(p) {
    console.log("decrement", p.quantity);
    let b = parseInt(p.price);
    this.total = this.total - b;
    if (this.total < 0) this.total = 0;
    return this.total;
  }

  setIngredients(ing) {
    this.ingredients.push(ing);
  }

  getIngredients() {
    return this.ingredients;
  }

  setTotalIngredients(cost) {
    this.ingredientsCost = cost;
  }

  getTotalIngredients() {
    return this.ingredientsCost;
  }

  getTotalCost() {
    return this.total + this.getTotalIngredients();
  }
}

export var pass = new list();
