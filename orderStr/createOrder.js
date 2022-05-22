const { writeFile } = require('fs');

const Order = require('./Order.js');
const order = {
  orderType: 0503,
  supCode: 99996,
  name: 'John',
};
function createOrderFile(fileName, numOrders) {
  const threshold = numOrders;
  const result = [];
  for (let i = 0; i < threshold; i++) {
    if (i === 0) result.push('\n');
    result.push(new Order(order).toString());
  }
  writeFile(`${fileName}.tsv`, result.join(''), (err) => {
    if (err) throw err;
    console.log('The file has been saved');
  });
}

createOrderFile('20221223052031', 1200);
