class Item {
  constructor(price, name) {
    this.name = name;
    this.price = price;
  }
}

const Items = [];
let tt = 0;

const handleAddItem = (price, name) => {
  Items.push(new Item(price, name));
};


const handleTotlePrices = () => {
  Items.forEach((Item) => {
    tt += Item.price;
  });
  console.log(tt);
};

const handleRenderItemToCart = () => {
    
};
