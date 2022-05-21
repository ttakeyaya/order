/**
 * xx-xxxx-xxxx
 */
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const generateString = (length = 10) => {
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const convertToOrderStr = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 1 || i === 5) {
      result += str[i];
      result += '-';
    } else {
      result += str[i];
    }
  }
  return result;
};

const isAllUnique = (data, threshold) => {
  let counts = new Set(data).size;
  if (counts !== threshold) return false;
  return true;
};

const generateOrderStr = () => {
  return convertToOrderStr(generateString());
};
module.exports = {
  generateOrderStr,
};
