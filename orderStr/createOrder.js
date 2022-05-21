const { writeFile } = require('fs');

const Order = require('./Order.js');

function createOrderFile(fileName, numOrders) {
  const threshold = numOrders;
  const result = [];
  for (let i = 0; i < threshold; i++) {
    if (i === 0) result.push('\n');
    result.push(new Order(5002, 9996, 'John').toString());
  }
  writeFile(`${fileName}.tsv`, result.join(''), (err) => {
    if (err) throw err;
    console.log('The file has been saved');
  });
}

createOrderFile('20221223052031', 1200);
