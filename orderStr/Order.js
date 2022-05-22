const { generateOrderStr } = require('./generateRandomStr.js');

class Order {
  constructor({ orderType, supCode, name }) {
    this.orderNum = generateOrderStr();
    this.orderType = orderType;
    this.supCode = supCode;
    this.name = name;
  }
  toString() {
    let order = '';
    order += `${this.orderNum}\t${this.orderType}\t${this.supCode}\t${this.name}\n`;
    return order;
  }
}
module.exports = Order;
