export default function traverseObject(obj, arr, options = {}) {
  const { validate = () => true } = options;
  let temp = obj;

  for (let i = 0, { length } = arr; i < length; i += 1) {
    if (temp && validate(temp, i)) {
      temp = temp[arr[i]];
    } else {
      break;
    }
  }

  return temp;
}
