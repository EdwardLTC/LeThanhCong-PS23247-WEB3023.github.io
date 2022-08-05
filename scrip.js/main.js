class Item {
  constructor(price, name) {
    this.name = name;
    this.price = price;
  }
}

const Items = [];

var handleAddItem = (price, name) => {
  Items.push(new Item(price, name));
};

var tt;

var handleTotlePrices = () => {
  Items.forEach((Item) => {
    tt += Item.price;
  });
};

var handleRenderItemToCart = () => {
    
};
